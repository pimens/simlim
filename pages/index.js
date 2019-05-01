import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FooterIndex from './bagian/ind/FooterIndex';
import Heder from './bagian/ind/Heder';

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
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            da: {
                email: '',
                password: ''
            },
            valid: true,
            msg: ''
        }
    }
    login = () => {
        console.log(this.state.da)
        if (this.state.da.email === '' | this.state.da.password === '') {
            console.log("kososn")
            this.setState({
                valid: false,
                msg: "gak boleh kosong"
            })
        }
        else {
            Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/login", this.state.da).then((response) => {
                if (response.data.length === 0) {
                    console.log(response);
                    this.setState({
                        valid: false,
                        msg: "password atau uname salah"
                    })
                }
                else {
                    console.log(response.data[0].nama);
                    document.cookie = `userId=${response.data[0].nama}; max-age=3600; path=/;`;
                    //    localStorage.setItem("user", JSON.stringify(response.data));
                    //    console.log(JSON.parse(localStorage.getItem("user")));
                    //    var aa = JSON.parse(localStorage.getItem("user"))
                    //    console.log(aa[0].nama)
                    window.location.href = "/ad/Dash";
                }

            })
        }

    }
    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            da: {
                ...this.state.da,
                [name]: value
            }

        });
    }
    render() {
        const style_2 = {
            backgroundImage: 'url(' + 'static/img/homeunram.jpg' + ')'
        };
        return (
            <div>
                <Heder />
                <style jsx>{`
                    
                    marquee {
                        bgcolor="skyblue"; 
                        font-family: impact; 
                        font-size:16px; color:red;" 
                        scrolldelay="100";
                    }
                    
                `}</style>

                <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                    <div className="container">
                        <img width="40px" src="img/logounram.png" /> Simlitabmas
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault" >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll" href="pdf/panduan.pdf">Panduan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll" id="btnlogin" href="" data-toggle="modal" data-target="#modelId">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="home" className="intro route bg-image" style={style_2}>
                    <div className="overlay-itro">  <marquee>Batas Waktu Penguploadan Proposal Diperpanjang sampai Tanggal 19 April 2019! - Mohon Lihat Panduan</marquee></div>
                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <p className="intro-subtitle"><span className="text-slider-items">Simlitabmas,Lembaga Penelitian dan Pengabdian Kepada Masyarakat, Universitas Mataram</span><strong className="text-slider"></strong></p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* modal */}
                <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {
                                    this.state.valid ? <div></div> :
                                        <div class="alert alert-secondary" role="alert">
                                            {this.state.msg}
                                            This is a secondary alert with . Give it a click if you like.
                                        </div>                                        
                                }
                                <TextField
                                    id="standard-with-placeholder"
                                    label="Username"
                                    name="email"
                                    placeholder="Usernameee"
                                    fullWidth
                                    className={this.props.classes.textField}
                                    margin="normal"
                                    onChange={(e) => this.handleInput(e)}
                                />
                                <br />
                                <TextField
                                    id="standard-with-placeholder"
                                    label="password"
                                    placeholder="passwrod"
                                    name="password"
                                    fullWidth
                                    className={this.props.classes.textField}
                                    margin="normal"
                                    ref="password"
                                    onChange={(e) => this.handleInput(e)}
                                //  onChange={e=>{this.setState({password:e.target.value})}}                
                                />
                                {/* <Login/> */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.login.bind(this)} type="button" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterIndex />
            </div >
        );
    }
}
index.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(index)