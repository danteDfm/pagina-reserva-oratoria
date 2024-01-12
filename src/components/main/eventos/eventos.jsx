import "./eventos.css";


function CardEvento(){
  return (
          <div className="card">
              <h3>primer evento</h3>
                <div className='img_card'></div>
                <p className='info_card'>Lorem ipsum, dolor sit amet dsadsadsfa consectetur adipisicing elit. Inventore, rerum tenetur dolore, voluptatem accusamus a voluptas distinctio soluta provident fugit officia</p>
                <div className='meta_card'> 
                  <p>pet</p>
                  <p>2022/09/01</p>
              </div>
          </div>
        );
}

export function Eventos(){
    return(
        
        <section className='content_area content_card'>
        <h1 className='title_card'>Nuestros proximos eventos</h1>
        
        <div className='content_card_preview'>
      
            <CardEvento/>
            <CardEvento/>
            <CardEvento/>
            <CardEvento/>

        </div>


         
        </section>
    );
}