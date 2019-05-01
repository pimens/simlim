import React, { Component } from 'react';

import HeaderDash from './bag/HeaderDash';
import FooterDash from './bag/FooterDash'
import Navigasi from './bag/Navigasi';
import MenuNav from './bag/MenuNav';
import DashTabel from './DashTabel';
import { InsertButton } from 'react-bootstrap-table';
import DashFormTambahData from './DashFormTambahData';
import Axios from 'axios';
class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahStaf: false,
            dataStaff: []
        }
    }
    componentDidMount() {
        Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                dataStaff: response.data
            })
        })
    }
    refreshData = () => {
        Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                dataStaff: response.data
            })
        })
    }
    showFormData = () => {
        return (
            <InsertButton
                btnText='Tambah Data'
                btnContextual='btn-danger'
                className='my-custom-class'
                btnGlyphicon='glyphicon-add'
                onClick={() => (this.setState({ tambahStaf: !this.state.tambahStaf }))} />
        );
    }
    closeForm=()=>{
        this.setState({
            tambahStaf: !this.state.tambahStaf
        })
    }
    render() {
        return (
            <div id="wrapper">
                <HeaderDash title="Dashborad-Admin" />
                <Navigasi />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNav />
                    {
                        this.state.tambahStaf ?
                            <div>
                                <DashFormTambahData 
                                    refresh = {this.refreshData}
                                    closeForm = {this.closeForm}
                                />
                            </div>
                            :
                            <div>gak</div>
                    }
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

                                        <DashTabel showFormData={this.showFormData} 
                                            dataStaff = {this.state.dataStaff}
                                            refresh = {this.refreshData}
                                           
                                        />


                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                   
                </div>
                <FooterDash />
            </div>
           
        );
    }
}

export default Dash;