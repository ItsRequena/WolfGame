import { Login } from './components/Login.tsx'
import { TransitionScreen } from './components/TransitionScreen.tsx'
import './App.css'

function App() {
  return (
    <>
      <TransitionScreen duration={1000}/>
      <Login duration={450}/>
    </>
  )
}

export default App
