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
            <a onClick={toggleMenu} href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            <div className='menu'>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </header>
    </div>
}

export default Header;