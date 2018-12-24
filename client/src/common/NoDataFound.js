import React from 'react';
import PropTypes from "prop-types";


export const NoDataFound = (props) =>{
    return (<div style={styles.loaderStyle}>
        <h3>{props.message?props.message:"No Data found.."}</h3>
        <div> {props.errorCode? props.errorCode:'404 error'}</div>
    </div>)
};

// NoDataFound.propTypes = {
//     message: PropTypes.string,
// }


const styles = {
    loaderStyle:{
        maxWidth: "200px",
        margin: "auto"
    }
};