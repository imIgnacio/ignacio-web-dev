import Header from '../components/header/Header';
import Jumbo from '../components/jumbo/Jumbo';
import Services from '../components/services/Services';
import About from '../components/about/About';

function Home() {
    return <div>
        <Header/>
        <Jumbo/>
        <Services/>
        <About/>
    </div>
}

export default Home;