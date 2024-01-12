import "./pagos.css";
import { Button} from "../../generic/generic";

export function Pago(){
    return(
       
        <section className="secciones_transaccion">
     
        
          <form className="formulario_transaccion">
          <h1 className="title_transaccion">Ingresar Datos para la Transaccion</h1>
           <div className="inp1">
              <input type="text" placeholder="Nombre" required/>
              <input type="email" placeholder="Telefono" required/>
           </div>
            <input type="number" placeholder="Numero de tarjeta" required/>
            <input type="number" placeholder="MM / AA" required/>
            <input type="number" className="inflexion" placeholder="CVV" required/>
            <Button title={"Terminar Transaccion"}/>
          </form>
       
      </section>
    );
}