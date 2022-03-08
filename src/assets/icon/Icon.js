import React from "react";

function Icon(props) {

    const [scale, setScale] = React.useState('1');

    const styles= {

        mainDiv: {
            backgroundColor: 'white',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // textAlign: 'center',
        },
        icon: {
            width: '128px',
            height: '128px',
            transition: '0.5s',
            transform: `scale(${scale}) `,
        },
        p: {
            width: '128px',
            textAlign: 'center',
        }
    }

    function zoomIn() {
        setScale('1.25');
    }

    function zoomOut() {
        setScale('1');
    }

    return <div style={styles.mainDiv}>
        <a href={props.link} target='_blank' rel="noreferrer" onMouseEnter={zoomIn} onMouseLeave={zoomOut}>
            <span><img src={props.logo} alt='WhatsApp' style={styles.icon}/></span>
        </a>
        <p style={styles.p}>{props.text}</p>
    </div>
}

export default Icon;