import "./generic.css";
import ReactDOM from 'react-dom';

export function Button({title, onClickTranslate}){
    return <button className="btn" onClick={()=>{onClickTranslate()}}>{title}</button>
}



export function Modal(){

    const cont_dev = document.getElementById("modal");

    return ReactDOM.createPortal(
        <div className="humo">
        <div className="boleta">
          <h1>Boleta</h1>
          <p>nombre</p>
          <p>asiento</p>
          <p>total</p>
          <div>
              <button>Cancelar</button>
              <button>hacer pago</button>
          </div>
      </div>
    </div>, cont_dev
    )

}


function DataBoleta({title, data}){
    return(
        <div className="data">
            <p>{title}:</p>
            <p>{data}</p>
         </div>
    );
}
export function Boleta(){
    return(
        <div className="datos_user">
                <DataBoleta title={"Email"} data={"dante@gmail.com"}/>
                <DataBoleta title={"User"} data={"Dante569"}/>
                <DataBoleta title={"Asiento"} data={"B12"}/>
               
        </div>
    );
}