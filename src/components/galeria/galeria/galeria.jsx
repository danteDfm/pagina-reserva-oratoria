import { Button } from "../../generic/generic";
import "./galeria.css"


function CardPreguntas({title, des}){
    return(
        <div className="card_res">
            <h3>¿{title}?</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsa laudantium quibusdam numquam voluptate at accusantium dolorum veniam. Id eaque quis magnam voluptatem repellendus dolorem excepturi dolore sapiente animi cum.
            </p>
        </div>
    );
}

export function Galeria(){

    return(
       <>
             <section className="seccion_descripcion">            
            
              <h1 className="title_galeria">TITULO BUENARDO</h1>
                
              <div className="container_button">
                    <button className="btn3">Agendar asiento</button>
                    <button className="btn4">Seguir leyendo</button>
              </div>

             </section>

             <section className="galeria_des">
                <h2>Titulo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui consectetur, tempora expedita consequatur velit doloremque similique omnis nisi quas tempore obcaecati at cupiditate totam ipsa? Suscipit aliquam expedita quisquam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui consectetur, tempora expedita consequatur velit doloremque similique omnis nisi quas tempore obcaecati at cupiditate.

                </p>
             </section>

             <section className="preguntas">
                <CardPreguntas title={"PREGUNTA"}/>
                <CardPreguntas title={"PREGUNTA"}/>
                <CardPreguntas title={"PREGUNTA"}/>
             </section>

             <div className="llevame_contactar">
                    <h2>Para mas informacion Contactanos</h2>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure unde maxime iste tempora nulla, fugit saepe vel. Deserunt eum nulla dolore perferendis, aperiam non possimus dolorum tempora sed tenetur?
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure unde maxime iste tempora nulla, fugit saepe vel. Deserunt eum nulla dolore perferendis, aperiam non possimus dolorum tempora sed tenetur?
                    </p>
                    <Button title={"Ir a contactos"}/>
             </div>
       
       </>
    );
}


