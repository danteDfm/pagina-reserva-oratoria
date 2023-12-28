import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Sro } from './pages/sro';
function Error(){
  return <h1>404</h1>
}

function App() {
  

  return (
    <>  

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/sro' element={<Sro/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
        
    </>
  )
}

export default App
