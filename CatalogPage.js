import React, { Component } from 'react';
import Products from './constants/Products';

class Image extends Component {

  render() {
    const { imageUrl, alt } = this.props;
    return (
      <img src={imageUrl} width='100' height='100' alt={alt}/>
    )
  }
}

class TextBox extends Component {

  render() {
    const text = this.props.text;
    return (
      <span>{text}</span>
    )
  }
}

class Price extends Component {

  render(){
    const price = this.props.price;
    return <span>${price}</span>
  }
}

class ProductCard extends Component {

  render() {
    const product = this.props.product;
    return (
      <div>
        <TextBox text={product.title}/>
        <Price price={product.price}/>
        <Image imageUrl={product.imageUrl} al={product.title}/>
      </div>
    )
  }
}

class Catalog extends Component {

  render() {
    const { products } = this.props;
    return (
      <ul>
        {
          products.map(product => {
            return <li key = {product.id}><ProductCard product={product}/></li>
          })
        }
      </ul>
    )
  }
}

class CatalogPage extends Component {
  render() {
    const products = Products;
    return (
      <Catalog products={products}/>
    )
  }

}

export default CatalogPage;