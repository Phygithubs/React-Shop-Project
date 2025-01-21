import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Bootombar from './components/bootombar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <header>
         <Header/>
      </header>

      <main style={{height:" auto"}}>
          {/* Home shop */}
          <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
     <Bootombar/>
    </div>
  )
}

export default App
