import "./contact.css";
import { Button } from "../generic/generic";
export function Contact(){
    return(<>
   

            <div className="contenedor_contact">
            <h1 className="title">Contactanos</h1>
            <p className="p1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente illo accusantium temporibus nulla nostrum laborum consequatur.
                </p>
                <div className="contactos">
                    <div className="numero a1">
                        <h2>Numero</h2>
                        <p>+968975765</p>
                    </div>
                    <div className="gmail a1">
                        <h2>gmail</h2>
                        <p>gmail@gmial.com</p>
                    </div>
                    <div className="direccion a1">
                        <h2>Direccion</h2>
                        <p>avenida circunvalacion</p>
                    </div>
                    <div className="involucrado a1">   
                        <h2>Involucrado</h2>
                        <p>Dante Flores</p>
                    </div>
                </div>
            </div>
            <div className="contenedor_form">
                <h1>Envianos tus dudas</h1>

                <form className="form_contact">
                    <input placeholder="nombre"/>
                    <input placeholder="numero"/>
                 
                    <textarea placeholder="motivo"></textarea>
                   
                    <Button title = {"Enviar"}/>
                </form>
            </div>
    </>);
}