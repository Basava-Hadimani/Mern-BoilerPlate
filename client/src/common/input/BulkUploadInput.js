import  React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FormWithConstraints } from 'react-form-with-constraints';
import FileUploadInput from "./FileUploadInput";
import TextAreaInput from "./TextAreaInput";
import Button from '../button/PrimaryButton';

class BulkUploadInput extends  React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            fileUpload:{},
            comment:''
        }
    }

    handleChange(event) {
        const target = event.currentTarget;
        this.form.validateFields(target);

        if(target.name==='fileUpload'){
            this.setState({
                [target.name]:target.files[0]

            })
        }else{
            this.setState({
                [target.name]: target.value
            });

        }
    }

    handleSubmit() {
        // event.preventDefault();

        // super.handleSubmit(event);
        this.form.validateFields();

        if (!this.form.isValid()) {
        } else {
            this.props.onSubmit(this.state);
        }
    }
    render(){
        return(
            <div style={{opacity: this.props.opacity?0.5:1, marginLeft: 10, marginRight: 10}}>
                <FormWithConstraints onSubmit={this.handleSubmit} ref={formWithConstraints => this.form = formWithConstraints} style={styles.bodyStyle}>
                    <div style={styles.headerStyle}>{(this.props.title)?this.props.title:"Upload a bulk order file"}</div>
                    {(this.props.isSampleDownloadReq)?
                    <button style={{marginLeft: 500}}><Link to="/warehouse/po/sampleDownload">Sample Download</Link></button>:null}
                    <div style={{marginTop: 10}}>
                        <FileUploadInput
                            onChange={this.handleChange}
                            label={"Attach File"}
                            name={"fileUpload"}
                            required
                            uploadText={"Browse"}
                            fileTypeText="File must be of Excel/CVS format"
                            accept=".xls,.xlsx,.csv"/>

                    </div>
                    {/*<div style={{marginTop: 10}} className="row">*/}
                          {/*<TextAreaInput*/}
                              {/*required={false}*/}
                              {/*readOnly={false}*/}
                              {/*onChange={this.handleChange.bind(this)}*/}
                              {/*label="Comment"*/}
                              {/*value={this.state.comment}*/}
                              {/*name="comment" row="3"/>*/}
                    {/*</div>*/}

                    <div className="horizontalLine" style={{marginTop: 40}}></div>
                    <span>{this.props.note}</span>
                    <div style={{marginTop: 20}} className="row">
                        <div className="offset-md-10" style={{marginRight: 10}} >
                            <Button
                                label={"Upload"}
                                onClick={()=>{this.handleSubmit();}}
                            />
                        </div>
                    </div>
                </FormWithConstraints>




            </div>

        );
    }
}

BulkUploadInput.propTypes ={
    onSubmit: PropTypes.func.isRequired,
    isSampleDownloadReq: PropTypes.bool.isRequired,
    note: PropTypes.string
};

const styles = {

    lableStyle:{
        color:"#999",
        fontSize: 12
    },
    errorStyle:{
        fontSize: 11,
        overflow: "hidden"
    }

};

export default BulkUploadInput;