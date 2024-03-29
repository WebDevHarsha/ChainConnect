import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import ChatBox from "./Pages/ChatBox";
import Profile from "./Pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/chat" element={<ChatBox />}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App