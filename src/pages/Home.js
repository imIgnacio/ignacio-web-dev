import Header from '../components/header/Header';
import Jumbo from '../components/jumbo/Jumbo';
import Services from '../components/services/Services';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';

function Home() {
    return <div>
        <Header/>
        <Jumbo/>
        <Services/>
        <About/>
        <Contact/>
    </div>
}

export default Home;