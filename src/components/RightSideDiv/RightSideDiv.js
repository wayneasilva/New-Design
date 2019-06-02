import React from 'react';
import Radium from 'radium';

const rightSideDiv = () => {

    const style = {
        mainContainer: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },

        upperContainer: {
            height: '50%',
            width: '100%',
            backgroundColor: 'pink'
        },

        lowerContainer: {
            height: '50%',
            width: '100%',
            backgroundColor: 'green'
        }
    }

    return (
        <div style={style.mainContainer}>
            <div style={style.upperContainer}></div>
            <div style={style.lowerContainer}></div>
        </div>
    )
}

export default Radium(rightSideDiv);