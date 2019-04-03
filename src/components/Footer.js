import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProductList from './ProductList'

export default class Footer extends Component {
  render() {
    return (
      <div class="container">
        <hr />
        <footer>
            <div class="row">
            <div class="col-lg-12">
            <p>Copyright &copy; <Link to={ProductList}>Packt
            Publishing</Link> 2014</p>
            </div>
            </div>
        </footer>
    </div>
    )
  }
}