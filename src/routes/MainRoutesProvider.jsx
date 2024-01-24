import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TodoDetails from '../pages/TodoDetails'

const MainRoutesProvider = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path={"/details/:id"} element={<TodoDetails />}/>
      </Routes>
    </div>
  )
}

export default MainRoutesProvider
