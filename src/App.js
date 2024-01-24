import React from 'react'
import Navbar from './components/Navbar'
import MainRoutesProvider from './routes/MainRoutesProvider'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutesProvider />
    </div>
  )
}

export default App
