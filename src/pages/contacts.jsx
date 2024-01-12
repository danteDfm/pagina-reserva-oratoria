import { Contact } from "../components/contact/contact";
import { Nav } from "../components/navegacion/nav"

export function Contactos(){

        return (
            <>
             <Nav/>
                <div className="page_contactos">
                     <Contact/>
                </div>
            
            </>
        );

}