import React from 'react';


import { Link , NavLink  } from 'react-router-dom';


export default class Header extends React.Component {

    render() {
        return (
        
            <div className="Header">
	                <NavLink to='/' activeClassName="active" exact>Home</NavLink>
	                <NavLink to='/about' activeClassName="active" >About</NavLink>
	                <NavLink to='/order/1' activeClassName="active">Order</NavLink>
	                <NavLink to='/test' activeClassName="active">Tester</NavLink>
            </div>
        );
    }
}


