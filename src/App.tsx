import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Vote from "./components/Vote";
import Discord from "./components/Discord";
import NotFound from "./components/NotFound";
import DiscordInvite from "./components/DiscordInvite.tsx";

function AppContent() {
  const location = useLocation();
  // eslint-disable-next-line react-hooks/purity
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <>
      {location.pathname !== "/.well-known/discord" && (
        <video className="background-video" autoPlay loop muted>
          <source
            src={`https://raw.githubusercontent.com/hansolo1000falcon/files/main/calming-winter-video_${randomNumber}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/.well-known/discord" element={<Discord />} />
        <Route path="/discord/invite" element={<DiscordInvite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
