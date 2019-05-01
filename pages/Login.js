import React, { Component } from 'react';
import Nav from './bagian/Nav';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            d: {
                email: '',
                password: ''
            }

        })
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    onChange() {
        
        this.setState({
            d: {
                email: this.refs.email.value,
                password: this.refs.password.value
            }
        })
    }

    login() {
        const fd = new FormData();
        fd.append('email', this.state.d.email);
        fd.append('password', this.state.d.password);
        Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/login", this.state.d).then((response) => {
            if (response.data.length === 0) {
                console.log("gagal");
                console.log(response);
            }
            else {
                document.cookie = "userId=200; max-age=3600; path=/;";
                //    localStorage.setItem("user", JSON.stringify(response.data));
                //    console.log(JSON.parse(localStorage.getItem("user")));
                //    var aa = JSON.parse(localStorage.getItem("user"))
                //    console.log(aa[0].nama)
                window.location.href = "/admin/beranda/AdmBeranda";
            }

        })
    }
    logout() {
        var data = this.getCookie("userId")
        console.log(data);
        document.cookie = "userId=; path=/;";
        var data = this.getCookie("userId")
        console.log(data);
        // window.location.href = "/Crud";
    }
    render() {
        return (
            <div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="text" ref="email" onChange={this.onChange.bind(this)}
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                    <label>Password</label>
                    <input type="text" ref="password" onChange={this.onChange.bind(this)}
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    <small id="helpId" className="form-text text-muted">Help text</small>
                </div>
                <button onClick={this.login.bind(this)} type="button" className="btn btn-success">Login</button>
                <button onClick={this.logout.bind(this)} type="button" className="btn btn-success">Logout</button>




            </div>
        );
    }
}

export default Login;