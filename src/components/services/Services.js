import React from 'react';
import './Services.js'

import Card from '../../assets/card/Card';

import simpleWebPhoto from '../../assets/images/simple-web.png';
import appWebPhoto from '../../assets/images/app-web.png';
import eCommerce from '../../assets/images/ecommerce.png';


function Services(props) {

    return <div className='services'>
        <h2>Nuestros Servicios</h2>
        <Card title='Simple Web' background={simpleWebPhoto}/>
        <Card title='App Web' background={appWebPhoto}/>
        <Card title='Plataforma E-Commerce' background={eCommerce}/>
    </div>
}

export default Services;