function AboutMe() {
  return (
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
        <p>
          Used to make unity mods with BepInEx, also how I got into programming. But the interest fizzled
          out for various reasons.
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
            <a href="https://guns.lol/hansolo1kfalcon">My guns.lol profile</a>
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
  )
}

export default AboutMe
