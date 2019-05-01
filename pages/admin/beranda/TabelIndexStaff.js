import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import axios from 'axios'

class TabelIndexStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            curId : '',
            curentData: {
                id : '',
                nama: '',
                alamat: '',
                keterangan: '',
                deskripsi: '',
                password: '',
                email: '',
                bidang: '',
            },
            edit: false
        }
    }
    //foto
    tombolAction(cell, row) {
        const a = "backend/" + cell;
        return `<img src="/backend/${cell}" alt="xxx" className="rounded-circle"></img>
         </div>`;
        // return (<div>{console.log(a)}
        
        //     <img src="${cell}" alt="xxx" className="rounded-circle"></img>
        // </div>);
    }
    //delete data
    deleteData = (del, dropRowKeys) => {
        const dropRowKeysStr = dropRowKeys.join(',');
        if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
            axios.post("http://sampeweweh.dx.am/backend/index.php/tps/delStaff", dropRowKeys).then((response) => {
                console.log(response);
                this.props.refreshData();
            })
        }
    }
      //edit
    edit = (row) => {
        //alert(`You double click row id: ${row.id}`);
        //this.props.se(row);

        this.setState({
            curentData: row,
            edit: true,
            curId : row.id
        })
    }
    cancelEdit = ()=>
    {
        this.setState({
           
            edit: false,
           
        })
    }

    onCh = (e) => {
        this.setState({
            curentData: {
                nama: this.refs.naa.value,
                alamat: this.refs.ala.value,
                keterangan: this.refs.kka.value,
                deskripsi: this.refs.da.value,
                password: this.refs.pa.value,
                email: this.refs.ea.value,
                bidang: this.refs.ba.value,
            }
        })
        if(e.target.files===undefined | e.target.files===null)
        {
            console.log("kosong gambar")
        }
        else{
           // console.log(e.target.files)
            this.setState({
                img: e.target.files[0]
            })
        }      
    }
    editDataStaff() {
        const fd = new FormData();
        if(this.state.img===null){
            fd.append('image', "kosong");
        }
        else{
            fd.append('image', this.state.img, this.state.img.name);
        }   
        fd.append('id', this.state.curId);  
        fd.append('nama', this.state.curentData.nama);
        fd.append('alamat', this.state.curentData.alamat);
        fd.append('bidang', this.state.curentData.bidang);
        fd.append('deskripsi', this.state.curentData.deskripsi);
        fd.append('keterangan', this.state.curentData.keterangan);
        fd.append('email', this.state.curentData.email);
        fd.append('password', this.state.curentData.password);
        axios.post("http://sampeweweh.dx.am/backend/index.php/tps/editStaff", fd).then((response) => {
            console.log(response);
            this.setState({
                curentData: {
                    nama: '',
                    alamat: '',
                    keterangan: '',
                    deskripsi: '',
                    password: '',
                    email: '',
                    bidang: '',
                }                
            })
            this.props.refreshData();
           

        }).then(() => {
            setTimeout(() => {

              
                
            }, 2000);

        })

    }
   

    render() {
        const selectRow = {
            mode: 'checkbox',  // multi select
            clickToSelect: true
        };
        const options = {
            insertBtn: this.props.showFormData,//utk show form tambah
            handleConfirmDeleteRow: this.deleteData,//utk deletedata
            onRowDoubleClick: this.edit
        };
        return (
            <div>
                
                {
                    this.state.edit ?
                        <div className="row">
                            <div className="col">
                                <div className="card bg-light mb-3">
                                    <div className="card-header">EDIT data Staff {this.state.curentData.id}</div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <input defaultValue={this.state.curentData.nama} onChange={this.onCh.bind(this)} ref='naa' type="text" className="form-control" name="n" id="" aria-describedby="helpId" placeholder="Nama" />
                                            <input defaultValue={this.state.curentData.alamat} onChange={this.onCh.bind(this)} ref='ala' type="text" className="form-control" name="al" id="" aria-describedby="helpId" placeholder="Alamat" />
                                            <input defaultValue={this.state.curentData.deskripsi} onChange={this.onCh.bind(this)} ref='da' type="text" className="form-control" name="d" id="" aria-describedby="helpId" placeholder="Deskripsi" />
                                            <input defaultValue={this.state.curentData.keterangan} onChange={this.onCh.bind(this)} ref='kka' type="text" className="form-control" name="k" id="" aria-describedby="helpId" placeholder="keterangan" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-light mb-3">
                                    <div className="card-header"></div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <input defaultValue={this.state.curentData.email} onChange={this.onCh.bind(this)} ref='ea' type="text" className="form-control" name="e" id="" aria-describedby="helpId" placeholder="email" />
                                            <select defaultValue={this.state.curentData.bidang} onChange={this.onCh.bind(this)} ref='ba' id="inputState" className="form-control">
                                                <option>Choose...</option>
                                                <option>Agro</option>
                                                <option>Biologi</option>
                                                <option>Ekologi</option>
                                            </select>
                                            <input defaultValue={this.state.curentData.password} onChange={this.onCh.bind(this)} ref='pa' type="text" className="form-control" name="p" id="" aria-describedby="helpId" placeholder="password" />
                                            
                                            <input onChange={this.onCh.bind(this)} type="file" className="form-control" name="f" id="" aria-describedby="helpId" placeholder="" />
                                            <br />
                                            {
                                                this.state.load ? <div>
                                                    <button className="btn btn-danger" type="button" disabled>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                        Loading...
                                        </button>
                                                </div>

                                                    : <div> <button onClick={this.editDataStaff.bind(this)}
                                                        type="button" className="btn btn-danger btn-sm">EDIT </button>
                                                        <button onClick={this.cancelEdit.bind(this)}
                                                        type="button" className="btn btn-danger btn-sm">Cancel </button>    
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :

                        <div></div>
                }





                <BootstrapTable data={this.props.d}
                    striped
                    insertRow
                    deleteRow={true}
                    pagination options={options}
                    selectRow={selectRow} search={true}
                    multiColumnSearch={true}
                    exportCSV={true}>
                    <TableHeaderColumn dataField='foto'
                        dataFormat={this.tombolAction.bind(this)}>
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='nama'>Nama</TableHeaderColumn>
                    <TableHeaderColumn dataField='bidang'>Bidang</TableHeaderColumn>
                    <TableHeaderColumn dataField='foto'>Alamat</TableHeaderColumn>
                    <TableHeaderColumn dataField='id' isKey hidden> Action</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TabelIndexStaff;


 // this.setState({
        //     tDataIndex : {
        //         nama: row.nama,
        //         alamat: row.alamat,
        //         keterangan: row.keterangan,
        //         deskripsi: row.deskripsi,
        //         password : row.password,
        //         email : row.email,
        //         bidang : row.bidang,
        //     }
        // })