import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import SweetAlert from "react-bootstrap-sweetalert";
import 'react-datepicker/dist/react-datepicker.css';

class DatePickerInput extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            startDate: null//moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        this.props.onDateChange(date);
    }

    render() {
        return <DatePicker
            dateFormat="YYYY/MM/DD"
            selected={this.state.startDate}
            onChange={this.handleChange}
            className={(this.props.class)?this.props.class:""}
            placeholderText="Click to select a date"
        />;
    }

}

DatePickerInput.propTypes = {
    onDateChange: PropTypes.func.isRequired
    // name: PropTypes.string,
    // isRequired: PropTypes.bool
}

export default DatePickerInput;