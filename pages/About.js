import React, { Component } from 'react';
import Nav from './bagian/Nav';
import {connect} from 'react-redux'
import {incrementCount,decrementCount} from '../store'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios'
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
                nama: 'pimen',
                alamat: 'xxx'
            },
            dd : []
        }
    }
    componentDidMount(){
      Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                dd: response.data
            })
        })
    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
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
            {this.props.dataStaf.nama}
            <button type="button" onClick={()=>this.props.decrementCount(this.state.da)} className="btn btn-success">Login</button>
            </div >
        );
    }
}
function mapState(state){
    const {count,dataStaf} = state
    return {count,dataStaf};
}
About.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapMet={incrementCount,decrementCount}
export default connect(mapState,mapMet)(withStyles(styles)(About));