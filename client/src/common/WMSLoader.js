import React from 'react';
import Loader from 'halogen/PulseLoader';

export const WMSLoader = (props) =>{
    return (<div style={styles.loaderStyle}>
        <h3>Loading...</h3>
        <Loader color="#26A65B" size="16px" margin="4px"/>
    </div>)
};

const styles = {
    loaderStyle:{
        position: 'absolute',
        margin: 0,
        zIndex: '999',
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"inherit"
    }
};