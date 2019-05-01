import React, { Component } from 'react';
import Axios from 'axios';

class DashFormTambahData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            nama: '',
            alamat: '',
            keterangan: '',
            deskripsi: '',
            password: '',
            email: '',
            bidang: '',

        }
    }
    addData(){
        console.log(this.state)
        const fd = new FormData();
        fd.append('image', this.state.img, this.state.img.name);
        fd.append('nama', this.state.nama);
        fd.append('alamat', this.state.alamat);
        fd.append('bidang', this.state.bidang);
        fd.append('deskripsi', this.state.deskripsi);
        fd.append('keterangan', this.state.keterangan);
        fd.append('email', this.state.email);
        fd.append('password', this.state.password);
        Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/addStaff",fd).then((response)=>{
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
                                    <input value={this.state.nama} onChange={(e) => { this.setState({ nama: e.target.value }) }} ref='na' type="text" className="form-control" name="n" id="" aria-describedby="helpId" placeholder="Nama" />
                                    <input value={this.state.alamat} onChange={(e) => { this.setState({ alamat: e.target.value }) }} ref='al' type="text" className="form-control" name="al" id="" aria-describedby="helpId" placeholder="Alamat" />
                                    <input value={this.state.deskripsi} onChange={(e) => { this.setState({ deskripsi: e.target.value }) }} ref='d' type="text" className="form-control" name="d" id="" aria-describedby="helpId" placeholder="Deskripsi" />
                                    <input value={this.state.keterangan} onChange={(e) => { this.setState({ keterangan: e.target.value }) }} ref='kk' type="text" className="form-control" name="k" id="" aria-describedby="helpId" placeholder="keterangan" />
                                    <input value={this.state.email} onChange={(e) => {this.setState({email:e.target.value}) }} ref='e' type="text" className="form-control" name="e" id="" aria-describedby="helpId" placeholder="email" />
                                    <input value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} ref='p' type="text" className="form-control" name="p" id="" aria-describedby="helpId" placeholder="password" />
                                    <select defaultValue={this.state.bidang} onChange={(e) => {this.setState({bidang:e.target.value}) }} ref='b' id="inputState" className="form-control">
                                        <option>Choose...</option>
                                        <option>Agro</option>
                                        <option>Biologi</option>
                                        <option>Ekologi</option>
                                    </select>
                                    <input onChange={(e) => {this.setState({img:e.target.files[0]}) }} type="file" className="form-control" name="f" id="" aria-describedby="helpId" placeholder="" />
                                    <button onClick={this.addData.bind(this)} >TambahData</button>
                                    <button onClick={this.props.closeForm} >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashFormTambahData;