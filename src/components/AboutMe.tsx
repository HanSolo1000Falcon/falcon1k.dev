import { useState, useEffect } from "react";

function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById(
      "background-audio",
    ) as HTMLAudioElement;
    if (!audio) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleAudio = () => {
    const audio = document.getElementById(
      "background-audio",
    ) as HTMLAudioElement;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio id="background-audio" loop>
        <source
          src="https://raw.githubusercontent.com/hansolo1000falcon/files/main/background-music.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="div-base div-constrained">
        <img
          src="https://raw.githubusercontent.com/hansolo1000falcon/files/main/pfp.png"
          alt="My profile picture"
          width="200"
          height="200"
        />
        <h1>
          <b>HanSolo1000Falcon</b>
        </h1>

        <hr />

        <section>
          <h2>About me</h2>
          <p>
            Hobbyist programmer who somehow always has three projects open and
            zero finished. I like building things just to figure out how they
            work, then rebuilding them “better” instead of shipping.
          </p>
          <p>
            Big fan of the C language family (C, C++, C#) because I enjoy having
            just enough control to break everything myself. I spend a lot of
            time messing with Web APIs, backend logic, and systems stuff that
            probably didn’t need to be reinvented but now exists anyway.
          </p>
          <p>
            Time management is… theoretical. I’ll optimize something that isn’t
            even in production yet. But when a project clicks, I lock in hard.
          </p>
          <p>
            Mostly here to learn, build cool stuff, and slowly turn side
            projects into something real.
          </p>
        </section>

        <hr />

        <section>
          <h2>More/Contact me</h2>
          <p>
            <b>
              <a href="https://github.com/hansolo1000falcon">
                My GitHub profile
              </a>
            </b>
          </p>
          <p>
            <b>
              <a href="/discord/invite">My Discord server</a>
            </b>
          </p>
          <p>
            <b>
              <a href="https://guns.lol/hansolo1kfalcon">My <a href="https://guns.lol">guns.lol</a> profiile</a>
            </b>
          </p>
        </section>

        <hr />

        <section>
          <button onClick={() => (window.location.href = "/vote")}>
            Vote on the current poll!
          </button>
        </section>
      </div>

      <div className="div-base now-playing">
        <p>
          {isPlaying
            ? "Now Playing: PASSIN - Ken Carson"
            : "Not Playing Anything"}
        </p>
        <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </>
  );
}

export default AboutMe;
