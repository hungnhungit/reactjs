import React, {Component} from 'react';

import './index.css';

import Product from './Components/Product';

import css from './App.css'

import Form from './api/Form';

import AppRouter from './router/AppRouter'


import {Link} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Hello Hungit',
            age: 1,
            Sort: ['id', 'name', 'title', 'price'],
            products: [
                {
                    id: 1,
                    name: 'Iphone 6',
                    title: 'test',
                    price: 2
                },
                {
                    id: 2,
                    name: 'SamSung s6',
                    title: 'SamSung s6',
                    price: 7
                },
                {
                    id: 3,
                    name: 'Iphone 6s',
                    title: 'Iphone 6s',
                    price: 3
                },
                {
                    id: 4,
                    name: 'Iphone 7 Plus',
                    title: 'Iphone 7 Plus',
                    price: 10
                }
            ],
            search: '',
            sortValue: true,
            sortName: 'price',
            Form : new Form({ id: null , name : '' , title : '' , price : null}),
        }

    }

    componentWillMount() {
    }

    AddProduct() {

        var {name, title, price} = this.state.Form;

        var product = {
            id: this.state.products.length + 1,
            name: name,
            title: title,
            price: price
        }

        this.state.products.push(product);

        this.setState({
            products: this.state.products,
            Form : new Form({ name : '' , title : '' , price : null})
        });

    }

    UpdateProduct() {

        var product = this.state.products.find(item => item.id === this.state.Form.id);

        var {name, title, price} = this.state.Form;

        product.name = name;

        product.title = title;

        product.price = price;

        this.setState({
            products: this.state.products,
            Form : new Form({ name : '' , title : '' , price : null})
        });

    }

    changeInput(event) {
        var name = event.target.name;

        var value = event.target.value;

        this.setState({
            Form: {
                ...this.state.Form,
                [name] : value
            }
        });
    }

    deleteProduct(e) {

        var index = this.state.products.findIndex(item => item.id === e)

        this.state.products.splice(index, 1);

        this.setState({
            products: this.state.products
        });

    }

    EditProduct(e) {

        var {name, title, price, id} = this.state.products.find(item => item.id === e)

        this.setState({
            Form: {
                id: id,
                name: name,
                title: title,
                price: price
            }
        });

    }

    searchProduct(e) {

        this.setState({
            search: e.target.value
        })

    }

    render() {

        const _this = this;

        var {products, search, Form, sortName, sortValue, Sort} = this.state

        if (search !== '') {
            products = products.filter(function (item) {
                var patt = new RegExp(search.toUpperCase());
                return patt.test(item.name.toUpperCase()) || patt.test(item.title.toUpperCase());
            });
        }
        if (sortName !== '') {
            products = products.sort((a, b) => {
                return a[sortName] === b[sortName] ? 0 : a[sortName] < b[sortName] ? sortValue : !sortValue
            })
        }

        products = products.map(function (item, index) {
            return (
                <div key={index}>
                    <Product index={item.id}
                             name={item.name}
                             title={item.title}
                             price={item.price}
                             abc={(e) => _this.test(e)}
                             deleteProduct={(e) => _this.deleteProduct(e)}
                             EditProduct={(e) => _this.EditProduct(e)}

                    />
                </div>
            )
        })

        var selectSort = Sort.map(function (item, index) {
            return (
                <option key={index} value={item}>{item}</option>
            )
        })

        return (

 /*           <div className="container">

                <input type="text" name="search" placeholder="Search" value={search}
                       onChange={this.searchProduct.bind(this)}/>
                <input type="text" name="name" value={Form.name} onChange={this.changeInput.bind(this)}/>
                <input type="text" name="title" value={Form.title} onChange={this.changeInput.bind(this)}/>
                <input type="number" name="price" value={Form.price || ''}
                       onChange={this.changeInput.bind(this)}/>
                <div>
                    <select name="sortName" onChange={(e) => {
                        this.setState({sortName: e.target.value})
                    }} value={this.state.sortName}>
                        {selectSort}
                    </select>
                </div>
                <button onClick={() => {
                    this.AddProduct()
                }}>Add Product
                </button>
                <button onClick={() => {
                    this.UpdateProduct()
                }}>Update Product !!
                </button>
                <button onClick={() => {
                    this.setState({sortValue: !sortValue})
                }}>Sort Product !!
                </button>
                {products}
            </div>
            */

            <div className="main">
                <AppRouter/>
            </div>

        );
    }
}

export default App;
