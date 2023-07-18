
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './composer/Header/Header'

function App() {
  return (
    <>
      <h1>this is the code site </h1>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
