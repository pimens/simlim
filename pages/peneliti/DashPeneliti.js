import React, { Component } from 'react';
import HeaderDashPeneliti from './bag/HeaderDashPeneliti'
import NavigasiPeneliti from './bag/NavigasiPeneliti';
import MenuNavPeneliti from './bag/MenuNavPeneliti';
import FooterDashPeneliti from './bag/FooterDashPeneliti';



class DashPeneliti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: {
                nama: '',
                alamat: '',
            },
            dataStaff: []
        }
    }
    handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            d: {
                ...this.state.d,
                [name]: value
            }
        })
    }
    add() {
        console.log(this.state.dataStaff)
        var newStateArray = this.state.dataStaff.slice();
        newStateArray.push(this.state.d);
        this.setState({
            dataStaff: newStateArray
        })
    }
    render() {
        return (
            <div id="wrapper">
                <HeaderDashPeneliti title="Dash Peneliti" />
                <NavigasiPeneliti />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNavPeneliti />
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
                                            <label For="">nama</label>
                                            <input type="text"
                                                onChange={this.handleInput.bind(this)}
                                                className="form-control" name="nama" id="" aria-describedby="helpId" placeholder="" />
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                        <div className="form-group">
                                            <label For="">alamat</label>
                                            <input type="text"
                                                onChange={this.handleInput.bind(this)}
                                                className="form-control" name="alamat" id="" aria-describedby="helpId" placeholder="" />
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                        <button onClick={this.add.bind(this)} type="button" className="btn btn-primary btn-lg">tambah</button>
                                        <table className="table table-striped table-inverse table-responsive">
                                            <thead className="thead-inverse">
                                                <tr>
                                                    <th>nama</th>
                                                    <th>alamat</th>
                                                </tr>
                                            </thead>

                                            
                                            {
                                                this.state.dataStaff.map((dd) => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">{dd.nama}</td>
                                                                <td>{dd.alamat}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <FooterDashPeneliti />
            </div>
        );
    }
}

export default DashPeneliti;