import React, { Component } from 'react';
import Nav from './bagian/Nav';
import {connect} from 'react-redux'
import {incrementCount,decrementCount} from '../store'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: null,
            da: {
                nama: '',
                alamat: ''
            }
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <Nav />
                <TextField
                id="standard-with-placeholder"
                label="Username"
                placeholder="Usernameee"
                className={classes.textField}
                margin="normal"
                />
                halaman about == {this.props.count}
            <div className="example">Hello World!</div>
            
            <button type="button" onClick={this.props.decrementCount} className="btn btn-success">Login</button>
            </div >
        );
    }
}
function mapState(state){
    const {count} = state
    return {count};
}
About.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapMet={incrementCount,decrementCount}
export default connect(mapState,mapMet)(withStyles(styles)(About));