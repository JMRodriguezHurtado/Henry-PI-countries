import { useLocation, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import LandingPage from './views/Landing/Landing'
import Detail from './components/detailComponents/DetailInt'
import Form from './components/formComponents/FormInt'
import './App.css'
import Activity from './views/Activities/Activities'



export default function App() {


  const location = useLocation()

  if(location.pathname === '/'){
    return (
      <>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/activities' element={<Activity/>} />
        </Routes>
      </>
    )
  }
}