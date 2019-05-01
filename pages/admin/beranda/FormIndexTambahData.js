import React, { Component } from 'react';
import Axios from 'axios';
class FormIndexTambahData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            tData: {
                nama: '',
                alamat: '',
                keterangan: '',
                deskripsi: '',
                password: '',
                email: '',
                bidang: '',
            },
            load: false
        }
    }
    //ketika input file berubah untuk foto
    onc = (e) => {
        this.setState({
            img: e.target.files[0]
        })
    }
    //mendapatkan data dari input ketika input berubah
    onCh = (e) => {
        this.setState({
            tData: {
                nama: this.refs.na.value,
                alamat: this.refs.al.value,
                keterangan: this.refs.kk.value,
                deskripsi: this.refs.d.value,
                password: this.refs.p.value,
                email: this.refs.e.value,
                bidang: this.refs.b.value,
            }
        })
        //console.log(this.refs.b.value);
    }
    //fungsi tambah staff

     customOnUploadProgress = (ev)=> {
        // console.log('customOnUploadProgress', ev);
        this.setState({
            load:true
        })
      }
      
     
    addDataStaff() {
        const fd = new FormData();
        fd.append('image', this.state.img, this.state.img.name);
        fd.append('nama', this.state.tData.nama);
        fd.append('alamat', this.state.tData.alamat);
        fd.append('bidang', this.state.tData.bidang);
        fd.append('deskripsi', this.state.tData.deskripsi);
        fd.append('keterangan', this.state.tData.keterangan);
        fd.append('email', this.state.tData.email);
        fd.append('password', this.state.tData.password);
        // axios.get('/account/active-listings', {
        //     onDownloadProgress: (pe) => document.querySelector('.place-to-insert-spinner').insertAdjacentHTML(loading spinner thingie)
        // })

        
        Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/addStaff", fd,{
            onUploadProgress: this.customOnUploadProgress
          }).then((response) => {
            console.log(response);
            this.setState({
                tData: {
                    nama: '',
                    alamat: '',
                    keterangan: '',
                    deskripsi: '',
                    password: '',
                    email: '',
                    bidang: '',
                },
                load: false
            })
            this.props.refreshData();

        })
        // .then(() => {
        //     setTimeout(() => {

        //         this.setState({ load: false });
        //         // this.props.refreshForm();      
        //     }, 2000);

        // })

    }
    render() {
        return (
            <div className="row">
             <div className="col">
                <div className="card bg-light mb-3">
                    <div className="card-header">Add data Staff</div>
                    <div className="card-body">
                        <div className="form-group">
                            <input value={this.state.tData.nama} onChange={this.onCh.bind(this)} ref='na' type="text" className="form-control" name="n" id="" aria-describedby="helpId" placeholder="Nama" />
                            <input value={this.state.tData.alamat} onChange={this.onCh.bind(this)} ref='al' type="text" className="form-control" name="al" id="" aria-describedby="helpId" placeholder="Alamat" />
                            <input value={this.state.tData.deskripsi} onChange={this.onCh.bind(this)} ref='d' type="text" className="form-control" name="d" id="" aria-describedby="helpId" placeholder="Deskripsi" />
                            <input value={this.state.tData.keterangan} onChange={this.onCh.bind(this)} ref='kk' type="text" className="form-control" name="k" id="" aria-describedby="helpId" placeholder="keterangan" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="col">
                <div className="card bg-light mb-3">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <div className="form-group">
                            <input value={this.state.tData.email} onChange={this.onCh.bind(this)} ref='e' type="text" className="form-control" name="e" id="" aria-describedby="helpId" placeholder="email" />
                            <input value={this.state.tData.password} onChange={this.onCh.bind(this)} ref='p' type="text" className="form-control" name="p" id="" aria-describedby="helpId" placeholder="password" />
                            <select defaultValue={this.state.tData.bidang} onChange={this.onCh.bind(this)} ref='b' id="inputState" className="form-control">
                                <option>Choose...</option>
                                <option>Agro</option>
                                <option>Biologi</option>
                                <option>Ekologi</option>
                            </select>
                            <input onChange={this.onc.bind(this)} type="file" className="form-control" name="f" id="" aria-describedby="helpId" placeholder="" />
                            <br />
                            {
                                this.state.load ? <div>
                                    <button className="btn btn-danger" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                        </button>
                                </div>

                                    : <div> <button onClick={this.addDataStaff.bind(this)}
                                        type="button" className="btn btn-danger btn-sm">Tambah </button></div>
                            }
                        </div>
                    </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default FormIndexTambahData;