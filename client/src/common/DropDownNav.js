import React, {PropTypes, Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import {Link} from 'react-router-dom';



class DropDownNav extends Component
{
    constructor(props)
    {
        super()
    }
    render()
    {
        var subActions = this.props.subActions;
        var  liComponent= subActions.map((subAction, index) =>{
            return (<li className="active" key={index}><Link to={subAction.url}>{subAction.name}</Link></li>)
        })
        return (
            <Collapsible trigger={this.props.roleName}>{ liComponent}</Collapsible>
        )

    }
}

DropDownNav.propTypes = {
    subActions: PropTypes.array.isRequired,
    roleName: PropTypes.string.isRequired

};


const styles = {
    headingStyle: {
        marginLeft:22,
        color:'#999'
    },
    activeHeadingStyle: {
        color:'#666'
    }
};


export default DropDownNav;