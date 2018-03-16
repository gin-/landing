import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home';
import About from "./About";
import Services from "./Services";
import ContactUs from "./ContactUs";

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/services' component={Services}/>
                <Route path='/contact' component={ContactUs}/>
                <Route path='*' component={Home}/>
            </Switch>
        );
    }
}

export default Content;
