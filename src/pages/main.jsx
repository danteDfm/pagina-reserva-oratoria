
// Supports weights 300-900
import '@fontsource-variable/rubik';


import './index.css'
import { Nav } from '../components/navegacion/nav';

export function Main() {
  return (
    <>  

      <Nav/>
      <main className='main'>

        <div className='content_area area_main'>

            <h1 className='title_main'>CONFERENCIAS QUE DEJAN HUELLA</h1>
            <p className='des_main'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quaerat itaque quo accusamus tempore quas, consequuntur voluptatibus animi adipisci eligendi ducimus!</p>
            <div className='content_btn'>
              <button className='btn_one'>Mas info</button>
              <button className='btn_two'>Ver fechas</button>
            </div>

        </div>


        <div className='content_area info'>

              <div className='img_info'>

              </div>

              <div className='des_info'>
                  <h1>Pasion por transmintir y motivar hacia una vida mejor</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis possimus dolores cum est ipsum id facere asperiores dolorem praesentium quia, consequatur consectetur qui ex labore omnis tenetur expedita laboriosam.</p>
                  <button>Leer más...</button>
              </div>

        </div>


        <div className='content_area content_card'>
          <div className='card'> 
            <h2>primer evento</h2>
          </div>
          <div className='card'>
            <h2>segundo evento</h2> </div>
          <div className='card'> 
          <h2>tercer evento</h2></div>
          <div className='card'>
            <h2>cuarto evento</h2> </div>
        </div>
      </main>
    </>
  );
}
