import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { MyProvider } from "./hooks/ContextProvider"

function App() {

  return (
    <MyProvider>
      <Header />
      <Main />
      <Footer />
    </MyProvider>
  )
}

export default App
