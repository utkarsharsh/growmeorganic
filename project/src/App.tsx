
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import DataComponets from './components/DataComponents/DataComponets'
import UserDetail from './components/UserDetail/UserDetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UserDetail/>}/>
    <Route path='/components' element={<DataComponets/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
