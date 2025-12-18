import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const WinterLand = () => {
  // --- Refs for Three.js and DOM integration ---
  const containerRef = useRef(null); // Reference to the main wrapper
  const mountRef = useRef(null);
  const npcTextRef = useRef(null); 
  const promptRefs = useRef([]); 

  // --- React State for UI Visibility ---
  const [showDialogue, setShowDialogue] = useState(false);
  const [npcName, setNpcName] = useState("NPC");
  
  // --- Game State Refs ---
  const gameState = useRef({
    activeDialogue: null,
    dialogueIndex: 0,
    canInteract: true,
    keys: { ArrowLeft: false, ArrowRight: false, Space: false },
    npcs: [], 
    playerGroup: null,
    pLegs: [],
    camera: null,
    renderer: null,
    scene: null,
    snowSystem: null,
    snowVel: [],
    frameId: null,
    width: 1, // Track container width
    height: 1 // Track container height
  });

  useEffect(() => {
    // --- CONFIGURATION ---
    const RENDER_SCALE = 0.25; 
    const PLAYER_SPEED = 0.15;
    const CAM_SMOOTHING = 0.08;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const skyColor = 0xff8866; 
    const fogColor = 0xcc6655; 
    scene.background = new THREE.Color(skyColor);
    scene.fog = new THREE.Fog(fogColor, 8, 35); 

    // Initialize with dummy values, ResizeObserver will fix immediately
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 4, 14);
    gameState.current.camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setSize(100, 100, false); // Initial dummy size
    renderer.shadowMap.enabled = true;
    
    // Append renderer to the mount point
    if (mountRef.current) {
      while(mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }
    gameState.current.renderer = renderer;
    gameState.current.scene = scene;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffddcc, 0.6); 
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffaa88, 0.8); 
    dirLight.position.set(-10, 15, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // --- MATERIALS ---
    const matSnow = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const matPath = new THREE.MeshLambertMaterial({ color: 0x554444 });
    const matWood = new THREE.MeshLambertMaterial({ color: 0x553322 });
    const matLeaves = new THREE.MeshLambertMaterial({ color: 0x225533 });
    const matTorii = new THREE.MeshLambertMaterial({ color: 0xcc2222 }); 
    const matPlayer = new THREE.MeshLambertMaterial({ color: 0xffaa00 }); 

    // Helper for building windows texture
    function createBuildingTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#443322';
      ctx.fillRect(0, 0, 64, 64);
      ctx.fillStyle = '#ffeeaa';
      if (Math.random() > 0.3) ctx.fillRect(8, 10, 20, 30);
      if (Math.random() > 0.3) ctx.fillRect(36, 10, 20, 30);
      ctx.strokeStyle = '#221100';
      ctx.lineWidth = 2;
      ctx.strokeRect(8, 10, 20, 30);
      ctx.strokeRect(36, 10, 20, 30);
      
      const tex = new THREE.CanvasTexture(canvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      return tex;
    }

    // --- WORLD GENERATION ---
    const groundGeo = new THREE.PlaneGeometry(300, 60);
    const ground = new THREE.Mesh(groundGeo, matSnow);
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -5;
    ground.receiveShadow = true;
    scene.add(ground);

    const pathGeo = new THREE.PlaneGeometry(300, 3);
    const path = new THREE.Mesh(pathGeo, matPath);
    path.rotation.x = -Math.PI / 2;
    path.position.y = 0.01; 
    path.receiveShadow = true;
    scene.add(path);

    // Falling Snow System
    const snowGeo = new THREE.BufferGeometry();
    const snowCount = 2000;
    const snowPos = new Float32Array(snowCount * 3);
    const snowVel = []; 
    for (let i = 0; i < snowCount * 3; i += 3) {
      snowPos[i] = (Math.random() - 0.5) * 60; 
      snowPos[i + 1] = Math.random() * 20;      
      snowPos[i + 2] = (Math.random() - 0.5) * 40; 
      snowVel.push(Math.random() * 0.05 + 0.02); 
    }
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, sizeAttenuation: true, opacity: 0.8, transparent: true });
    const snowSystem = new THREE.Points(snowGeo, snowMat);
    scene.add(snowSystem);
    gameState.current.snowSystem = snowSystem;
    gameState.current.snowVel = snowVel;

    // Props Functions
    function createTree(x, z) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 1.5, 5), matWood);
      trunk.position.y = 0.75;
      group.add(trunk);
      const l1 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2, 6), matLeaves);
      l1.position.y = 2;
      group.add(l1);
      const l2 = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.5, 6), matLeaves);
      l2.position.y = 3;
      group.add(l2);
      const snowTop = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.5, 6), matSnow);
      snowTop.position.y = 3.6;
      group.add(snowTop);
      scene.add(group);
    }

    function createTorii(x, z) {
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 4, 6), matTorii);
      p1.position.set(-1.5, 2, 0);
      const p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 4, 6), matTorii);
      p2.position.set(1.5, 2, 0);
      group.add(p1, p2);
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.4, 0.4), matTorii);
      b1.position.set(0, 3.5, 0);
      const b2 = new THREE.Mesh(new THREE.BoxGeometry(5, 0.5, 0.5), matTorii);
      b2.position.set(0, 3.9, 0);
      group.add(b1, b2);
      scene.add(group);
    }

    // Generate Environment
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 100;
      const z = -2 - Math.random() * 10; 
      if (Math.abs(x) > 2) createTree(x, z);
    }
    for (let i = 0; i < 10; i++) {
        const x = (Math.random() - 0.5) * 80;
        const z = 2 + Math.random() * 3;
        createTree(x, z);
    }
    createTorii(-5, 0);
    createTorii(20, 0);

    for (let i = -5; i < 15; i++) {
      const h = Math.random() * 3 + 3;
      const w = Math.random() * 2 + 2;
      const mat = new THREE.MeshLambertMaterial({ map: createBuildingTexture() });
      const houseGroup = new THREE.Group();
      houseGroup.position.set(i * 8 + (Math.random() * 2), h / 2, -6 - (Math.random() * 3));
      const base = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), mat);
      houseGroup.add(base);
      const roofGeo = new THREE.ConeGeometry(w * 0.8, 1.5, 4);
      const roof = new THREE.Mesh(roofGeo, new THREE.MeshLambertMaterial({ color: 0x333344 }));
      roof.position.y = h / 2 + 0.75;
      roof.rotation.y = Math.PI / 4; 
      houseGroup.add(roof);
      scene.add(houseGroup);
    }

    // Player
    const playerGroup = new THREE.Group();
    const pBody = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 1.2), matPlayer);
    pBody.position.y = 0.5;
    playerGroup.add(pBody);
    const pHead = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), matPlayer);
    pHead.position.set(0, 0.9, 0.5);
    playerGroup.add(pHead);
    const pTail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.4, 0.2), matPlayer);
    pTail.position.set(0, 0.8, -0.6);
    pTail.rotation.x = Math.PI / 4;
    playerGroup.add(pTail);
    const legGeo = new THREE.BoxGeometry(0.2, 0.4, 0.2);
    const pLegFL = new THREE.Mesh(legGeo, matPlayer); pLegFL.position.set(-0.25, 0.2, 0.4);
    const pLegFR = new THREE.Mesh(legGeo, matPlayer); pLegFR.position.set(0.25, 0.2, 0.4);
    const pLegBL = new THREE.Mesh(legGeo, matPlayer); pLegBL.position.set(-0.25, 0.2, -0.4);
    const pLegBR = new THREE.Mesh(legGeo, matPlayer); pLegBR.position.set(0.25, 0.2, -0.4);
    playerGroup.add(pLegFL, pLegFR, pLegBL, pLegBR);
    const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.6), new THREE.MeshLambertMaterial({ color: 0xcc2222 }));
    scarf.position.set(0, 0.7, 0.4);
    playerGroup.add(scarf);
    scene.add(playerGroup);
    gameState.current.playerGroup = playerGroup;
    gameState.current.pLegs = [pLegFL, pLegFR, pLegBL, pLegBR];

    // NPCs
    const npcsData = [
        { id: 1, type: "spirit", name: "Torii Spirit", x: -5, z: -1, color: 0xffaaaa, text: ["The sunset is beautiful today.", "Watch your step on the ice.", "Keep warm."] },
        { id: 2, type: "snowman", name: "Snowman", x: 10, z: -1.5, color: 0xffffff, text: ["...brrr...", "I was built in a while loop.", "Do you like my carrot nose?"] },
        { id: 3, type: "mario", name: "Plumber", x: 18, z: 0, color: 0xff0000, text: ["It's-a me!", "I took a wrong turn at the warp pipe.", "Have you seen a princess around here?"] },
        { id: 4, type: "cat", name: "Stray Cat", x: 28, z: -1, color: 0x222222, text: ["Meow...", "The snow is too cold on my paws.", "Got any tuna?"] },
        { id: 5, type: "dog", name: "Golden Ret.", x: 35, z: 1, color: 0xffcc88, text: ["Woof! I love snow!", "I can't find my ball though.", "Everything is white!"] },
        { id: 6, type: "cat", name: "White Cat", x: 45, z: 2, color: 0xffffff, text: ["I am camouflaged.", "You cannot see me.", "...wait, you can?"] }
    ];

    npcsData.forEach((npcData, index) => {
        const group = new THREE.Group();
        group.position.set(npcData.x, 0, npcData.z);
        if(npcData.type === "snowman") {
            const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), new THREE.MeshLambertMaterial({color:0xffffff}));
            b1.position.y = 0.5;
            const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.4, 8, 8), new THREE.MeshLambertMaterial({color:0xffffff}));
            b2.position.y = 1.3;
            const nose = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.4, 6), new THREE.MeshLambertMaterial({color: 0xff8800}));
            nose.position.set(0, 1.3, 0.4);
            nose.rotation.x = Math.PI/2;
            group.add(b1, b2, nose);
        } else if (npcData.type === "mario") {
             const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.4), new THREE.MeshLambertMaterial({color: 0x0000ff}));
             body.position.y = 0.5;
             const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshLambertMaterial({color: 0xffccaa})); 
             head.position.y = 1.1;
             const hatBase = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.6), new THREE.MeshLambertMaterial({color: 0xff0000}));
             hatBase.position.y = 1.4;
             group.add(body, head, hatBase);
        } else if (npcData.type === "cat" || npcData.type === "dog") {
             const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.8), new THREE.MeshLambertMaterial({color: npcData.color}));
             body.position.y = 0.3;
             const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), new THREE.MeshLambertMaterial({color: npcData.color}));
             head.position.set(0, 0.6, 0.4);
             const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.1), new THREE.MeshLambertMaterial({color: npcData.color}));
             tail.position.set(0, 0.5, -0.4);
             tail.rotation.x = Math.PI/4;
             group.add(body, head, tail);
        } else {
             const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.0, 0.6), new THREE.MeshLambertMaterial({color: npcData.color}));
             body.position.y = 0.5;
             const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new THREE.MeshLambertMaterial({color: 0xffccaa})); 
             head.position.y = 1.2;
             group.add(body, head);
        }
        scene.add(group);
        gameState.current.npcs.push({ mesh: group, data: npcData });
    });

    // --- EVENT LISTENERS ---
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
          if (gameState.current.activeDialogue) {
              advanceDialogue();
          } else {
              gameState.current.keys.Space = true;
          }
      }
      if (e.code === 'ArrowLeft') gameState.current.keys.ArrowLeft = true;
      if (e.code === 'ArrowRight') gameState.current.keys.ArrowRight = true;
    };

    const handleKeyUp = (e) => {
      if (e.code === 'Space') gameState.current.keys.Space = false;
      if (e.code === 'ArrowLeft') gameState.current.keys.ArrowLeft = false;
      if (e.code === 'ArrowRight') gameState.current.keys.ArrowRight = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // --- GAME LOGIC ---
    let typeInterval = null;

    function showDialogueUI(npc) {
        setNpcName(npc.name);
        setShowDialogue(true);
        gameState.current.activeDialogue = npc;
        gameState.current.dialogueIndex = 0;
        setTimeout(() => typeText(npc.text[0]), 0);
    }

    function advanceDialogue() {
        gameState.current.dialogueIndex++;
        const idx = gameState.current.dialogueIndex;
        const active = gameState.current.activeDialogue;
        if (idx < active.text.length) {
            typeText(active.text[idx]);
        } else {
            setShowDialogue(false);
            gameState.current.activeDialogue = null;
            gameState.current.canInteract = false;
            setTimeout(() => { gameState.current.canInteract = true; }, 500);
        }
    }

    function typeText(text) {
        if (typeInterval) clearInterval(typeInterval);
        if (npcTextRef.current) npcTextRef.current.innerText = "";
        let i = 0;
        typeInterval = setInterval(() => {
            if (npcTextRef.current) {
                npcTextRef.current.innerText += text.charAt(i);
                i++;
                if (i >= text.length) clearInterval(typeInterval);
            }
        }, 30);
    }

    // --- ANIMATION LOOP ---
    let time = 0;
    const animate = () => {
        gameState.current.frameId = requestAnimationFrame(animate);
        time += 0.05;

        const positions = gameState.current.snowSystem.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
            positions[i] -= gameState.current.snowVel[(i - 1) / 3]; 
            if (positions[i] < 0) {
                positions[i] = 20; 
            }
        }
        gameState.current.snowSystem.geometry.attributes.position.needsUpdate = true;

        const { keys, playerGroup, pLegs } = gameState.current;
        if (!gameState.current.activeDialogue) {
            if (keys.ArrowRight) {
                playerGroup.position.x += PLAYER_SPEED;
                playerGroup.rotation.y = Math.PI / 2; 
                playerGroup.position.y = Math.abs(Math.sin(time * 4)) * 0.1;
                pLegs[0].rotation.x = Math.sin(time * 4) * 0.5;
                pLegs[3].rotation.x = Math.sin(time * 4) * 0.5;
                pLegs[1].rotation.x = -Math.sin(time * 4) * 0.5;
                pLegs[2].rotation.x = -Math.sin(time * 4) * 0.5;
            } else if (keys.ArrowLeft) {
                playerGroup.position.x -= PLAYER_SPEED;
                playerGroup.rotation.y = -Math.PI / 2;
                playerGroup.position.y = Math.abs(Math.sin(time * 4)) * 0.1;
                pLegs[0].rotation.x = Math.sin(time * 4) * 0.5;
                pLegs[3].rotation.x = Math.sin(time * 4) * 0.5;
                pLegs[1].rotation.x = -Math.sin(time * 4) * 0.5;
                pLegs[2].rotation.x = -Math.sin(time * 4) * 0.5;
            } else {
                playerGroup.position.y = 0;
                pLegs.forEach(l => l.rotation.x = 0);
            }
        }

        gameState.current.camera.position.x += (playerGroup.position.x - gameState.current.camera.position.x) * CAM_SMOOTHING;
        gameState.current.camera.lookAt(playerGroup.position.x, 2, 0);

        let closestDist = 999;
        let closestNPC = null;
        
        // Use the current container size for projecting the prompt
        const width = gameState.current.width;
        const height = gameState.current.height;

        gameState.current.npcs.forEach((item, index) => {
            const dist = playerGroup.position.distanceTo(item.mesh.position);
            const promptEl = promptRefs.current[index];
            if (promptEl) {
                const promptPos = item.mesh.position.clone();
                promptPos.y += 2.0; 
                promptPos.project(gameState.current.camera);
                
                // FIXED MATH: Use container width/height instead of window
                const x = (promptPos.x * 0.5 + 0.5) * width;
                const y = (-(promptPos.y * 0.5) + 0.5) * height;
                
                promptEl.style.left = `${x}px`;
                promptEl.style.top = `${y}px`;

                if (dist < 3.0) {
                    promptEl.style.display = 'block';
                    if(dist < closestDist) {
                        closestDist = dist;
                        closestNPC = item.data;
                    }
                } else {
                    promptEl.style.display = 'none';
                }
            }
        });

        if (keys.Space && closestNPC && !gameState.current.activeDialogue && gameState.current.canInteract) {
            showDialogueUI(closestNPC);
            gameState.current.keys.Space = false;
        }
        gameState.current.renderer.render(scene, gameState.current.camera);
    };

    animate();

    // --- RESIZE OBSERVER ---
    // Instead of window.resize, we watch the container element
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            gameState.current.width = width;
            gameState.current.height = height;
            
            gameState.current.camera.aspect = width / height;
            gameState.current.camera.updateProjectionMatrix();
            gameState.current.renderer.setSize(width * RENDER_SCALE, height * RENDER_SCALE, false);
        }
    });

    if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        resizeObserver.disconnect();
        cancelAnimationFrame(gameState.current.frameId);
        if (typeInterval) clearInterval(typeInterval);
        if (mountRef.current && gameState.current.renderer) {
            // Check if child exists before removing
            if(mountRef.current.contains(gameState.current.renderer.domElement)){
                mountRef.current.removeChild(gameState.current.renderer.domElement);
            }
        }
        gameState.current.renderer.dispose();
    };
  }, []);

  // --- STYLES ---
  const styles = {
    container: {
        position: 'relative',
        width: '100%',  // Changed from 100vw to 100% to fit parent
        height: '100%', // Changed from 100vh to 100% to fit parent
        backgroundColor: '#111',
        fontFamily: "'VT323', monospace",
        overflow: 'hidden',
        userSelect: 'none'
    },
    canvasContainer: {
        width: '100%',
        height: '100%',
        display: 'block'
    },
    uiLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    instructions: {
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontSize: '24px',
        textShadow: '2px 2px 0px #000',
        opacity: 0.9,
        marginTop: '10px' // Reduced margin since it's inside a specific container now
    },
    dialogueBox: {
        background: 'rgba(50, 20, 20, 0.95)',
        border: '4px solid #ffccaa',
        color: '#ffccaa',
        margin: '20px auto 20px auto', // Reduced bottom margin to ensure visibility
        padding: '20px',
        width: '80%',
        maxWidth: '600px',
        minHeight: '100px',
        fontSize: '32px',
        pointerEvents: 'auto',
        boxShadow: '0 0 20px rgba(255, 100, 50, 0.3)',
        borderRadius: '4px',
        display: showDialogue ? 'block' : 'none'
    },
    nameTag: {
        color: '#fff',
        fontSize: '0.8em',
        marginBottom: '5px',
        textTransform: 'uppercase',
        borderBottom: '1px solid #ffccaa',
        display: 'inline-block'
    },
    prompt: {
        position: 'absolute',
        background: '#a33',
        color: 'white',
        padding: '5px 10px',
        border: '2px solid white',
        fontSize: '20px',
        transform: 'translate(-50%, -100%)',
        display: 'none',
        whiteSpace: 'nowrap',
        boxShadow: '2px 2px 0px rgba(0,0,0,0.5)',
        pointerEvents: 'none'
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          canvas { image-rendering: pixelated; width: 100% !important; height: 100% !important; }
          .typing-cursor::after { content: '▋'; animation: blink 1s infinite; }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `}
      </style>
      
      <div ref={containerRef} style={styles.container}>
        <div ref={mountRef} style={styles.canvasContainer} />

        <div style={styles.uiLayer}>
          <div style={styles.instructions}>
            HEADSPACE: WINTER<br/>
            <span style={{fontSize: '18px'}}>← / → to Move &nbsp;&bull;&nbsp; SPACE to Interact</span>
          </div>

          {[...Array(6)].map((_, i) => (
             <div 
                key={i} 
                ref={el => promptRefs.current[i] = el} 
                style={styles.prompt}
             >
                 SPACE
             </div>
          ))}

          <div style={styles.dialogueBox}>
             <div style={styles.nameTag}>{npcName}</div>
             <div ref={npcTextRef} className="typing-cursor"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinterLand;