import dpCover from "../assets/covers/pokemon-diamond.jpg"
import dawnAudio from "../assets/audio/pokemon-dp-dawn.mp3"
import route201Audio from "../assets/audio/pokemon-dp-route-201-day.mp3"
import solaceonTownAudio from "../assets/audio/pokemon-dp-solaceon-town-day.mp3"
import test from "../assets/audio/smb_gameover.wav"

const music = [
  {
    id: 4,
    title: "Test",
    artist: "Nintendo",
    cover: dpCover,
    audio: test
  },
  {
    id: 1,
    title: "Dawn",
    artist: "Pokem",
    cover: dpCover,
    audio: dawnAudio
  },
  {
    id: 2,
    title: "Route 201 Day",
    artist: "Pokemo",
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