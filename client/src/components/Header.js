import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper teal">
                    <a href="#" className="brand-logo white-text green">Everyday Note</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={"red"}><a href="/api/login">Login with google</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}