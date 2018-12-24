import React from 'react';
import PropTypes from 'prop-types';
import {DateRange} from "react-date-range";
import SweetAlert from "react-bootstrap-sweetalert";

class DateRangeSelect extends React.Component{
    constructor(){
        super();
        this.state={
            startDate: null,
            endDate:null,
        }
        this.onConfirmDate = this.onConfirmDate.bind(this);
        this.onCancelDate = this.onCancelDate.bind(this);
        this.handleDateSelect = this.handleDateSelect.bind(this);
    }

    onConfirmDate(){
        this.props.onConfirmDate(this.state);
    }

    onCancelDate(){
        this.props.onCancelDate();
    }

    handleDateSelect(range){
        this.setState({startDate: range.startDate, endDate: range.endDate});
    }

    render(){
        return (
            <div className="calendarSprite">
                <SweetAlert
                    showCancel
                    cancelBtnBsStyle="default"
                    title={<span style={{fontSize:18}}>{(this.props.title)?this.props.title:"Select from-to date"}</span>}
                    onConfirm={this.onConfirmDate}
                    onCancel={this.onCancelDate}
                >
                    <DateRange
                        style={{borderStyle: 'line'}}
                        onInit={this.handleDateSelect}
                        onChange={this.handleDateSelect}
                    />
                </SweetAlert>
            </div>
        );
    }
}

DateRangeSelect.propTypes = {
    onConfirmDate: PropTypes.func.isRequired,
    onCancelDate: PropTypes.func.isRequired,
}

export default DateRangeSelect;