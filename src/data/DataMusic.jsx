import dpCover from "../assets/covers/pokemon-diamond.jpg"
import smgCover from "../assets/covers/smg.png"
import dawnAudio from "../assets/audio/pokemon-dp-dawn.mp3"
import route201Audio from "../assets/audio/pokemon-dp-route-201-day.mp3"
import solaceonTownAudio from "../assets/audio/pokemon-dp-solaceon-town-day.mp3"
import test from "../assets/audio/luma.mp3"

const music = [
  {
    id: 4,
    title: "Luma",
    artist: "Nintendo",
    cover: smgCover,
    audio: test
  },
  {
    id: 1,
    title: "Dawn",
    artist: "Pokemon",
    cover: dpCover,
    audio: dawnAudio
  },
  {
    id: 2,
    title: "Route 201 Day",
    artist: "Pokemon",
    cover: dpCover,
    audio: route201Audio
  },
  {
    id: 3,
    title: "Solaceon Town",
    artist: "Pokemon",
    cover: dpCover,
    audio: solaceonTownAudio
  },
]

export default music;