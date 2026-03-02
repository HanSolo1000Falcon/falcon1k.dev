import { useState, useEffect } from "react";

async function uploadVote(option: number) {
  await fetch("https://api.falcon1k.dev/poll/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votedFor: option }),
  });
}

async function fetchPoll(): Promise<{ pollName: string; options: string[] }> {
  const response = await fetch("https://api.falcon1k.dev/poll/current");
  return response.json();
}

function Vote() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [poll, setPoll] = useState<{
    pollName: string;
    options: string[];
  } | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("didAcceptCookies") === "true";
    setCookiesAccepted(accepted);
  }, []);

  useEffect(() => {
    if (!cookiesAccepted) return;

    fetchPoll().then((data) => {
      const votedPolls = JSON.parse(localStorage.getItem("pollsVoted") || "[]");
      if (votedPolls.includes(data.pollName)) {
        setHasVoted(true);
      }
      setPoll(data);
    });
  }, [cookiesAccepted]);

  const handleVote = async (index: number) => {
    if (!poll) return;

    await uploadVote(index);

    const votedPolls = JSON.parse(localStorage.getItem("pollsVoted") || "[]");
    votedPolls.push(poll.pollName);
    localStorage.setItem("pollsVoted", JSON.stringify(votedPolls));

    setHasVoted(true); // <- THIS is your "reload"
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("didAcceptCookies", "true");
    setCookiesAccepted(true);
  };

  if (!cookiesAccepted) {
    return (
      <div className="blur-overlay">
        <h2>To view this page you must accept cookies.</h2>
        <button id="accept-cookies" onClick={handleAcceptCookies}>Accept Cookies</button>
      </div>
    );
  }

  if (!poll) {
    return <h1>Loading poll...</h1>;
  }

  if (hasVoted) {
    return (
      <div className="div-base div-constrained">
        <h1>You have already voted on this poll!</h1>
      </div>
    );
  }

  return (
    <div className="div-base div-constrained">
      <h1>{poll.pollName}</h1>
      <ul className="poll-options">
        {poll.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleVote(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vote;
