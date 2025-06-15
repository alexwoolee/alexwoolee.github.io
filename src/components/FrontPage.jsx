// .. => "go up one folder"
// currently in src/components/Title.js, image is in src/assets/bg-1.png
// to reach assets/ from components/, you go up one level to src/, then into assets/

export default function FrontPage() {
  return (
    <>
      <div id="top"></div>
      <div className="front-sec">
        <h1 id="heading-big">Alex Lee</h1>
        <h3 id="heading-small">Alex Lee</h3>
        <h4>I Like Animals</h4>
        <div id="front-links">
          <div className="square"><button>Click me</button></div>
          <div className="square"><button>Click me</button></div>
        </div>
      </div>
    </>

  );
}