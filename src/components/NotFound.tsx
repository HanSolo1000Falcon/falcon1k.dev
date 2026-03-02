function NotFound() {
  return (
    <div className="div-base div-constrained">
      <h1 id="h1-404">404</h1>
      <h2 id="h2-404">Page Not Found</h2>
      <p>
        Looks like you wandered off the map, traveler. This page either doesn’t
        exist or has been moved.
      </p>
      <hr />
      <p>
        Chill, you can <a href="/">go back home</a> or check out{" "}
        <a href="https://github.com/hansolo1000falcon">my GitHub</a> for cool
        stuff instead.
      </p>
    </div>
  );
}

export default NotFound;
