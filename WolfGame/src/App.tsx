import { useContext } from 'react'
import { Login } from './components/Login.tsx'
import { Home } from './components/Home.tsx'
import { CreateLobby } from './components/CreateLobby.tsx'
import { TransitionScreen } from './components/TransitionScreen.tsx'
import './App.css'
import { OptionContext } from './context/view.tsx'

function App() {

  const {option} : any = useContext(OptionContext)

  return (
    <>

    {option === 'start' &&
    <div>
      <TransitionScreen duration={1000}/>
      <Login duration={450}/>
    </div>}

    {option === 'main' &&
    <div>
      <TransitionScreen duration={1000}/>
      <Home duration={450}/>
    </div>}

    {option === 'createLobby' &&
    <div>
      <TransitionScreen duration={1000}/>
      <CreateLobby duration={450}/>
    </div>}
    </>
  )
}

export default App
