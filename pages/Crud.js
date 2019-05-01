import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './bagian/Nav';
import Container from './bagian/Container';
import Kegiatan from './bagian/Kegiatan';
import { incrementCount } from '../store'


class Crud extends Component {    
    render() {
        console.log(this.props)
        return (
            <div>            
               <Nav />
               {this.props.count}
               <button onClick={this.props.incrementCount} > tamba</button>
               <Container /> 
               <Kegiatan />
            </div>     
        );
    }
}

function mapState (state) {
  const { count } = state
  return { count }
}
const mapMethod = { incrementCount }
export default connect(
  mapState,
  mapMethod
)(Crud)
