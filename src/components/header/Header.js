import logo from '../../assets/images/IgnaciosWebDev.png';
import './Header.css'

function toggleMenu() {
    var x = document.querySelector(".menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function Header() {
    return <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <header>
            <img className='logo' src={logo} alt='Ignacio Web Dev'/>
            <nav>
                <a id='a-desktop' href="#services">Servicio</a>
                <a id='a-desktop' href="#about">Sobre Nosotros</a>
                <a id='a-desktop' href="#contact">Contacto</a>
            </nav>
            <a onClick={toggleMenu} href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            <div className='menu'>
                <a href="#services">Servicio</a>
                <a href="#about">Sobre Nosotros</a>
                <a href="#contact">Contacto</a>
            </div>
        </header>
    </div>
}

export default Header;