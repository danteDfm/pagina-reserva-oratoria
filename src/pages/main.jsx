
// Supports weights 300-900
import '@fontsource-variable/rubik';


import './index.css'
import { Nav } from '../components/navegacion/nav';
import { Presentacion } from '../components/main/presentacion/presentacion';
import { Eventos } from '../components/main/eventos/eventos';
import { Biografia } from '../components/main/biografia/biografia';

export function Main() {
  return (
    <>  

      <Nav/>
        <div className='main'>
            <Presentacion/>
            <Eventos/>
            <Biografia/>
        </div>
    </>
  );
}
