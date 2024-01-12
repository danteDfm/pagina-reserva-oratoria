import "./index.css";

import { useState } from "react";
import { Nav } from "../components/navegacion/nav";
import {Galeria} from "../components/galeria/galeria/galeria"
import {Asiento} from "../components/galeria/asientos/asientos"
import {Pago} from "../components/galeria/pagos/pagos"
import { Boleta, Modal } from "../components/generic/generic";

export function Sro() {


  //cinemark usa botones
  return (
    <>  
     <Modal/>
      <Nav />
      <main className="content_sro">
         
          <Galeria/>
      </main>
    </>
  );

}
