import React from 'react';
class Success extends React.Component
{
    constructor(props)
    {
        super();
    }

    render()
    {
        return (
            <div style={styles.bodyStyle}>
                <div style ={{display:"flex",paddingTop:15,paddingBottom:30}}>
                    <div className="col-md-2 createSuccessSprite" style ={styles.imageStyle}>
                    </div>
                    <div className="col-md-10">
                        <div style ={styles.headerStyle}>{this.props.header}</div>

                        <div style ={styles.messageStyle}>
                            {this.props.message}
                            <b style ={{color:"#2c3d4d"}}> {this.props.id}</b>
                        </div>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="col-md-3 col-md-offset-9"  style ={{marginTop:20}}>
                    <button type="button" className="wmsPrimaryButton pull-right">{this.props.buttonText}</button>
                </div>
            </div>
        )

    }
}

const styles = {
    bodyStyle: {
        background:"#FFFFFF",
        marginLeft:10,
        display:"flex",
        flexDirection:"column"
    },
    imageStyle:{
        justifyContent:"center",
        alignSelf: "center",
        width:70
    },
    headerStyle:{
        color:"#2c3d4d",
        fontSize: 18
    },
    messageStyle:{
        color:"#666",
        fontSize: 14
    },
    buttonStyle:{

    }
};
export default Success;