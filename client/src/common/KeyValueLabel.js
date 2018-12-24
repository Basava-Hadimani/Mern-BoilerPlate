import  React from 'react';
import PropTypes from 'prop-types';

class KeyValueLabel extends  React.Component{
    render(){
        return(
            <div className="row">
               <div className="col-md-3">
                   <label  style={styles.lableStyle}>{this.props.label}</label>
               </div>
                <div className="col-md-9">
                    <label  style={styles.valueStyle}>{this.props.value?this.props.value:"--"}</label>
                </div>
            </div>

        );
    }
}

KeyValueLabel.propTypes ={
    label: PropTypes.string.isRequired
};

const styles = {
    lableStyle:{
        color:"#999",
        fontSize: 14
    },
    valueStyle: {
        width: "100%",
        fontSize: 14,
        overflow: "hidden"
    }

};

export default KeyValueLabel;