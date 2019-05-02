import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editStaff } from '../../store'
import Axios from 'axios';
class DashFormEditStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            dataStaff: {

            }
        }
    }
    componentDidMount() {
        this.setState({
            dataStaff: this.props.dataStaf
        })
    }
    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            dataStaff: {
                ...this.state.dataStaff,
                [name]: value
            }

        });
    }
    sub() {
        const fd = new FormData();
        if(this.state.img===null){
            fd.append('image', "kosong");
        }
        else{
            fd.append('image', this.state.img, this.state.img.name);
        }   
        fd.append('id', this.state.dataStaff.id);  
        fd.append('nama', this.state.dataStaff.nama);
        fd.append('alamat', this.state.dataStaff.alamat);
        fd.append('bidang', this.state.dataStaff.bidang);
        fd.append('deskripsi', this.state.dataStaff.deskripsi);
        fd.append('keterangan', this.state.dataStaff.keterangan);
        fd.append('email', this.state.dataStaff.email);
        fd.append('password', this.state.dataStaff.password);
        Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/editStaff", fd).then((response)=>{
            console.log(response)
            this.props.refresh();            
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="wrapper wrapper-content">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>New data for the report</h5> <span className="label label-primary">IN+</span>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <div className="form-group">
                                    <input defaultValue={this.state.dataStaff.nama}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="nama" id="" placeholder="Nama" />
                                    <input defaultValue={this.state.dataStaff.alamat}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="alamat" id="" placeholder="Nama" />
                                    <input defaultValue={this.state.dataStaff.deskripsi}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="deskripsi" id="" placeholder="Nama" />
                                    <input defaultValue={this.state.dataStaff.keterangan}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="keterangan" id="" placeholder="Nama" />
                                    <input defaultValue={this.state.dataStaff.email}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="email" id="" placeholder="Nama" />
                                    <input defaultValue={this.state.dataStaff.password}
                                        onChange={(e) => this.handleInput(e)}
                                        type="text" className="form-control" name="password" id="" placeholder="Nama" />
                                    <select defaultValue={this.state.dataStaff.bidang}
                                        name="bidang"
                                        onChange={(e) => this.handleInput(e)}
                                        className="form-control">
                                        <option>Choose...</option>
                                        <option>Agro</option>
                                        <option>Biologi</option>
                                        <option>Ekologi</option>
                                    </select>
                                    <input onChange={(e) => {this.setState({img:e.target.files[0]}) }} type="file" className="form-control" name="f" placeholder="" />
                                 

                                    {this.state.dataStaff.nama}
                                    <br />
                                    <button onClick={this.sub.bind(this)} type="button" className="btn btn-primary">cek</button>
                                    <button onClick={() => this.props.editStaff(false)} type="button" className="btn btn-primary">cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapState(state) {
    const { dataStaf, editStaf } = state
    return { dataStaf, editStaf }
}
const mapMethod = { editStaff };
export default connect(mapState, mapMethod)(DashFormEditStaff);