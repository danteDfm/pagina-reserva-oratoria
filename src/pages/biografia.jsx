import { BioContent } from "../components/bio/bio_content";
import { Nav } from "../components/navegacion/nav";
export function Biografia(){
    return (
       <>
             <Nav/>
            <div className="biografia">
                <BioContent/>
            </div>
         
        
       </>

    );
}