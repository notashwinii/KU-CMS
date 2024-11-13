import React from 'react'

// Routes
import { BrowserRouter, Routes, Route} from 'react-router-dom'


// Pages
import LoginPage from './pages/login/LoginPage';

// Components

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element = {<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;