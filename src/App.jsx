import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Sro } from './pages/sro';
import { Contactos } from './pages/contacts';
import { Biografia } from './pages/biografia';
function Error(){
  return <h1>404</h1>
}

function App() {
  

  return (
    <>  
  
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/sro' element={<Sro/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/biografia' element={<Biografia/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
        
    </>
  )
}

export default App
