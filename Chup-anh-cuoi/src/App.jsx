import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  return (
    <>
      <Header />
      <div className="work_place">
        <NavBar />
        <Content />
      </div>
    </>
  )
}

export default App
