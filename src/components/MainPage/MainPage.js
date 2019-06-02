import React from 'react';
import Radium from 'radium';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';
import RightSideDiv from '../RightSideDiv/RightSideDiv';

const mainPage = () => {
    const style = {
        containerDiv: {
            display: 'flex',
            flexDirection: 'row'
        },

        bannerDiv: {
            width: '65vw',
            height: '100vh',
            backgroundColor: 'red'
        },

        rightContainerDiv: {
            width: '35vw',
            minWidth: '400px',
            height: '100vh',
            backgroundColor: 'blue'
        }

    }

    return (
        <div style={style.containerDiv}>
            <div style={style.bannerDiv}>
                <Banner/>
            </div>
            <div style={style.rightContainerDiv}>
                <RightSideDiv/>
            </div>
        </div>
    )
}

export default Radium(mainPage);