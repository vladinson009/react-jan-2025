import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

import RegisterSection from "./components/user/RegisterSection"
import LoginSection from "./components/user/LoginSectioin"

import Catalogue from "./components/game/Catalogue"
import CreateGame from "./components/game/CreateGame"
import DetailsGame from "./components/game/DetailsGame"
import EditGame from "./components/game/EditGame"
import MyProvider from "./context/contextProvider"
import Logout from "./components/user/Logout"


function App() {


  return (
    <MyProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        // GAME ROUTES
        <Route path="/games">
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="create" element={<CreateGame />} />
          <Route path="details/:gameId" element={<DetailsGame />} />
          <Route path="edit/:gameId" element={<EditGame />} />
        </Route>
        // USER ROUTES
        <Route path="/users">
          <Route path="login" element={<LoginSection />} />
          <Route path="register" element={<RegisterSection />} />
          <Route path="logout" element={<Logout />} />
        </Route>

      </Routes >
    </MyProvider>
  )
}

export default App
