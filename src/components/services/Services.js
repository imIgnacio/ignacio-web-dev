import React from 'react';
import './Services.css'

import Card from '../../assets/card/Card';

import simpleWebPhoto from '../../assets/images/simple-web.png';
import appWebPhoto from '../../assets/images/app-web.png';
import eCommerce from '../../assets/images/ecommerce.png';

function Services(props) {

    const simpleWeb = 'Página web sencilla, funcional para entregar información a tus clientes y obtener presencia en la red';
    const appWeb = 'Aplicación web con interactividad, administración comercial, base de datos, servidor entre otros extras';
    const commerceWeb = 'Plataforma E-Commerce para que puedas vender tus productos. Características como carrito de compra, pago con tarjetas de débito y crédito, filtros, imágenes de productos y más';

    return <div className='services'>
        <h2>Nuestros Servicios</h2>
        <Card title='Simple Web' background={simpleWebPhoto} text={simpleWeb}/>
        <Card title='App Web' background={appWebPhoto} text={appWeb}/>
        <Card title='Plataforma E-Commerce' background={eCommerce} text={commerceWeb}/>
    </div>
}

export default Services;