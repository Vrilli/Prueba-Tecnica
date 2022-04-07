import React from 'react'


 export const Carrusel = () => {
  return (
    <div>
     
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://as01.epimg.net/meristation/imagenes/2020/02/13/noticias/1581576624_508899_1581576871_portada_normal.jpg" className="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/06/14151154/Pokemon-Nintendo.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://imagenes.atresplayer.com/atp/clipping/cmsimages02/2021/03/09/2286A07D-CB71-415C-970B-782BE58164E3/1280x720.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

