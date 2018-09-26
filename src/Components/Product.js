import React, { Component } from 'react';

class Product extends Component {




    deleteProduct(){
        this.props.deleteProduct(this.props.index);
    }
    EditProduct(){
        this.props.EditProduct(this.props.index);
    }

    render() {
        var { name,title,price,index } = this.props;
        return (
            <div className="Product">
                <h3>{ index }</h3>
                <div>{ name }</div>
                <div>{ title }</div>
                <div>{ price }</div>
                <button onClick={ () => this.deleteProduct() }>Delete</button>
                <button onClick={ () => this.EditProduct() }>Edit</button>
            </div>
        );
    }
}

export default Product;
