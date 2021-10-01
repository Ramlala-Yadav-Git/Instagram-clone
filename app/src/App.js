import { Info } from "./components/suggestion/Info";
import { Routes } from "./routes/Routes";
import { Suggestion } from "./components/suggestion/Suggestion";
import { Chat } from "./components/chat/Chat"
import { Stories } from "./components/stories/Stories"
import Navbar from "./components/navbar/navbar"
import ProfileTop from "./components/profile/profileTop"
import Settings from  "./components/settings/settings"
function App() {
  return (
    <>
      {/* <Info /> */}
      {/* <Suggestion /> */}

      {/* <Routes /> */}
      <Navbar />
    
      {/*<Chat />*/}
      <ProfileTop /> 
      <Settings />

    </>
  );
}

export default App;
