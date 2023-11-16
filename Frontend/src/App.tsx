import { useSelector } from "react-redux"
import NavbarRoute from "./pages/navbar/NavbarRoute.component"
import { RootState } from "./store/store"
import Login from "./pages/login/Login.component"



const App = () => {
  const { status, token } = useSelector((state: RootState) => state.login)


  return (
    <>
      {token ?
        <NavbarRoute />
        : <Login />
      }
    </>
  )
}

export default App
