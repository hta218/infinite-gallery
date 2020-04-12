import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { navigate } from "@reach/router"
import { toast } from 'react-toastify'

const LOCAL_STORAGE_KEY = '__isAuthed'

const AppContainer = createContainer(() => {
  const [view, setView] = useState('home')
  const [auth, setAuth] = useState(!!localStorage.getItem(LOCAL_STORAGE_KEY))
  const [openLightbox, setOpenLightbox] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const login = (username: string, password: string, remember: boolean) => {
    // Handling request to server
    if (username === "admin" && password === "admin") {
      setAuth(true)
      if (remember) {
        localStorage.setItem(LOCAL_STORAGE_KEY, "true")
      }
      navigate('/')
      toast.success("Logged in successfully!")
    } else {
      toast.error("Wrong username or password!")
      console.warn('Wrong username or password')
    }
  }

  const logout = () => setAuth(false)

  const changeView = (v: string) => {
    if (v === 'logout') {
      logout()
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      navigate('/login')
    }
    else {
      setView(v)
    }
  }

  return { view, auth, login, changeView, openLightbox, setOpenLightbox, imageIndex, setImageIndex }
})

export default AppContainer