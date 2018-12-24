import  React from "react";
import Multiselect  from 'react-bootstrap-multiselect';
import PropTypes from 'prop-types';
import {FormGroup} from 'react-bootstrap';
import {FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
// const FormGroup = Bootstrap4Helpers.FormGroup;


class WMSDropDownList extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            selectItems: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.deSelectAll = this.deSelectAll.bind(this);
        this.getDropDownDataList = this.getDropDownDataList.bind(this);
    }

    getDropDownDataList(){
        var dropDownList=[];
        if(this.props.dropDownList!==null && this.props.dropDownList.length!==0 && Array.isArray(this.props.dropDownList)){
            this.props.dropDownList.map(function(itemValue,key){
                var newItem ={};
                Object.assign(newItem,itemValue);
                newItem.label = itemValue.displayLabel;
                newItem.value=key;
                if(key===0){
                    newItem.selected = true;
                }
                dropDownList.push(newItem);
            });
            this.state.selectItems=[];
            this.state.selectItems.push(dropDownList[0]);
            this.props.onChange(this.props.name,this.state.selectItems);
        }
        return dropDownList;


    }

    handleChange(option, checked) {
        var listIndex = option.val();
        if(this.props.dropDownList!==null && this.props.dropDownList.length!==0 && this.props.dropDownList.length >listIndex){
           if(checked){
               var item =this.props.dropDownList[listIndex];
               if(this.props.multiple){
                   this.state.selectItems.push(item);
               }else{
                   this.state.selectItems=[];
                   this.state.selectItems.push(item);
               }


           }else{
               this.state.selectItems.splice(listIndex,1);
           }

        }
        this.props.onChange(this.props.name,this.state.selectItems);
    }

    selectAll() {
        this.state.selectItems=this.props.dropDownList;
        this.props.onChange(this.props.name,this.state.selectItems);
    }

    deSelectAll() {
        this.state.selectItems=[];
        this.props.onChange(this.props.name,this.state.selectItems);
    }
    render() {
        var dropDownList=this.getDropDownDataList();
        return (
            (dropDownList!==null && dropDownList.length!==0)?

            <div >
                <FormGroup for={this.props.name} style={{width:"inherit",display:"flex",flexDirection:"column"}}>
                    <label htmlFor={this.props.name} style={styles.lableStyle}>{this.props.label}{this.props.required?<b
                        style={{color: "#2c3d4d"}}>*</b>:null}</label>
                    <Multiselect
                        buttonWidth={"100%"}
                        id={this.props.name}
                        name={this.props.name}
                        multiple={this.props.multiple}
                        data={dropDownList }
                        includeSelectAllOption={this.props.includeSelectAllOption}
                        onChange={this.handleChange}
                        className="form-control"
                        onSelectAll={this.selectAll}
                        onDeselectAll={this.deSelectAll}
                        required={this.props.required}
                        readOnly={this.props.readOnly}
                    />
                    <FieldFeedbacks for={this.props.name} className="form-control-feedback"
                                    style={styles.errorStyle}>
                        <FieldFeedback when="*"/>
                    </FieldFeedbacks>
                </FormGroup>
            </div> : <div></div>
        );
    }
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

WMSDropDownList.propTypes ={
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    includeSelectAllOption:PropTypes.bool.isRequired,
    multiple: PropTypes.bool.isRequired,
    dropDownList:PropTypes.array.isRequired
};

export default WMSDropDownList;
