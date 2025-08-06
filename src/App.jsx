import './css/App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import {Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <div>

      <NavigationBar />
      
      <header>
        <h1>E-Commerce Fun App</h1>
        <div className='data-source'>API Data Provider: <a href="">https://fakestoreapi.com/</a></div>
      </header>
      
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>

      <aside>

      </aside>

      <footer>
        <div>
          <p>Contact:</p>
          <p>Address:</p>
          <p><a href="">Terms of Cookie Use</a></p>
        </div>
      </footer>

    </div>
  )
}

export default App
