import Barcode from 'react-barcode';
import  React from 'react';
import PropTypes from "prop-types";

class BarcodeGenerator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 1772,
            width: 2,
            height: 100,
            format: "CODE128",
            displayValue: true,
            fontOptions: "",
            font: "monospace",
            textAlign: "center",
            textPosition: "bottom",
            textMargin: 2,
            fontSize: 20,
            background: "#ffffff",
            lineColor: "#000000",
            margin: 10,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            value: (props.value)?props.value:1772,
            width: 2,
            height: 100,
            format: (props.format)?props.format:"CODE128",
            displayValue: true,
            fontOptions: "",
            font: "monospace",
            textAlign: "center",
            textPosition: "bottom",
            textMargin: (props.textMargin)?props.textMargin:2,
            fontSize: (props.fontSize)?props.fontSize:20,
            background: (props.background)?props.background:"#ffffff",
            lineColor: (props.lineColor)?props.lineColor:"#000000",
            margin: 10,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
        });
    }

    render(){
        return (
                    <Barcode
                        value={this.state.value}
                        width={this.state.width}
                        height={this.state.height}
                        format={this.state.format}
                        displayValue={this.state.displayValue}
                        fontOptions={this.state.fontOptions}
                        font={this.state.font}
                        textAlign={this.state.center}
                        textPosition={this.state.textPosition}
                        textMargin={this.state.textMargin}
                        fontSize={this.state.fontSize}
                        background={this.state.background}
                        lineColor={this.state.lineColor}
                        margin={this.state.margin}
                        marginTop={this.state.marginTop}
                        marginBottom={this.state.marginBottom}
                        marginLeft={this.state.marginLeft}
                        marginRight={this.state.marginRight}
                    />

        );
    }
}


BarcodeGenerator.propTypes = {
    value: PropTypes.number.isRequired
}



export default BarcodeGenerator;