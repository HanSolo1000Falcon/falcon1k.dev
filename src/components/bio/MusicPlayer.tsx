import { useEffect, useState } from "react"

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = document.getElementById(
      "background-audio",
    ) as HTMLAudioElement
    if (!audio) {
      return
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
    }
  }, [])

  const toggleAudio = () => {
    const audio = document.getElementById(
      "background-audio",
    ) as HTMLAudioElement
    if (!audio) {
      return
    }

    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio id="background-audio" loop>
        <source
          src="https://raw.githubusercontent.com/hansolo1000falcon/files/main/background-music.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="div-base now-playing">
        <p>
          {isPlaying
            ? "Now Playing: PASSIN - Ken Carson"
            : "Not Playing Anything"}
        </p>
        <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </>
  )
}

export default MusicPlayer
