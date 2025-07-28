import './css/App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import {Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <div>

      <header>
        <NavigationBar />
      </header>
      
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
      
    </div>
  )
}

export default App
