import React from "react";

function Card(props) {

    const [saturate, setSaturate] = React.useState('0');
    const [shadow, setShadow] = React.useState('inset rgb(255, 255, 255) 10px -10px 0px 6px');
    const [width, setWidth] = React.useState(window.innerWidth);
    
    React.useEffect(() => {
        if(width <= 900){
            setSaturate(1);
            setShadow('');
        }
        return;
    },[width]);

    const styles = {
        div: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
            marginLeft: '10%',
        },
        h3: {
            width: '128px',
            height: 'auto',
            textAlign: 'center',
            fontSize: '1.25rem',
        },
        figure: {
            width: '220px',
            height: '220px',
            borderStyle: 'solid',
            borderWidth: '4px',
            background: `url(${props.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `saturate(${saturate}`,
            transition: '0.5s',
            boxShadow: shadow,
        },
        paragraph: {
            width: '90%',
            textAlign: 'center',
        }
    }

    return <div style={styles.div}>
        <h3 style={styles.h3}>{props.title}</h3>
        <div style={styles.figure} onMouseEnter={() => {setSaturate(1); setShadow('')}} onMouseLeave={() => {setSaturate(0); setShadow('inset rgb(255, 255, 255) 10px -10px 0px 6px')}}></div>
        <p style={styles.paragraph}>{props.text}</p>
    </div>
}

export default Card;