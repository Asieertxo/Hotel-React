import "./Base.scss";
import "./Header.scss";
import logo from "./../img/logo.png";

function Header() {
  return (
    <header className="mainheader">
      <img src={logo} className="mainheader-logo"></img>
      <nav className="mainheader-navegation"> 
                <li className="mainheader-navegation_menu"><a href="#rooms">Habitaciones</a></li>
                <li className="mainheader-navegation_menu"><a href="#events">Eventos</a></li>                    
                <li className="mainheader-navegation_menu"><a href="#tournaments">Torneos</a></li>
                <li className="mainheader-navegation_menu"><a href="#booking">Reservas</a></li>
            </nav>
    </header>
  );
}

export default Header;



/*
<header class="mainheader">
            <nav class="navegation">
                <img src="img/logo.png" class="navegation-logo">
                <li class="navegation-menu"><a href="#rooms">Habitaciones</a></li>
                <li class="navegation-menu"><a href="#events">Eventos</a></li>                    
                <li class="navegation-menu"><a href="#tournaments">Torneos</a></li>
                <li class="navegation-menu"><a href="#booking">Reservas</a></li>
            </nav>
        
            <div class="mainheader-titlebox">
                <h1 class="mainheader-title">
                    <span class="mainheader-title__main">Hotel TheLAN</span>
                    <span class="mainheader-title__secondary">demuestra lo que sabes hacer</span>     
                </h1>
            </div>
        
            <div class="mainheader-booking">
                <input placeholder="Entrada" type="text" onfocus="(this.type='date')" class="mainheader-booking__date">
                <input placeholder="Salida" type="text" onfocus="(this.type='date')" class="mainheader-booking__date">
                <input type="button" class="btn__main" value="Reservar">
            </div>
            <div>
                <a href="#rooms"><img src="img/flechas.gif" class="arrows"></a>
            </div>
            <div class="darken"></div>
                    
        </header>*/