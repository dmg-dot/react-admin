import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Analysis from './pages/analysis/Analysis'
import Userinfo from './pages/userinfo/Userinfo'
import './app.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className='container'>
          <Sidebar />
            <div className='main'>
              <Routes>
                <Route path='/' element = {<Home />}></Route>
                <Route path='/analysis' element={<Analysis />}></Route>
                <Route path='/userinfo' element={<Userinfo />}></Route>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </div>
    )
}

export default App;
