import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../Components/Header'

import Footer from '../Components/Footer'

import Order from '../Components/Order'

import Tester from '../Components/Tester'

import HomePage from '../Components/Pages/HomePage'

import About from '../Components/Pages/About'



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/about" component={About}/>
                    <Route path="/order/:id" component={Order}  />
                    <Route path="/test"   render={(routeProps) => (<Tester apiName={"Tester"} {...routeProps}/>)}/>
                </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;
