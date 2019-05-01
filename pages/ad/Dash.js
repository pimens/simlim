import React, { Component } from 'react';

import HeaderDash from './bag/HeaderDash';
import FooterDash from './bag/FooterDash'
import Navigasi from './bag/Navigasi';
import MenuNav from './bag/MenuNav';
import DashTabel from './DashTabel';
import { InsertButton } from 'react-bootstrap-table';
class Dash extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tambahStaf : false
        }
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
    render() {
        return (
            <div id="wrapper">
                <HeaderDash title="Dashborad-Admin" />
                <Navigasi />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <MenuNav />
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
                                        {
                                            this.state.tambahStaf ?
                                            <div>tambah</div>
                                            :
                                            <div>gak</div>
                                        }
                                       <DashTabel showFormData = {this.showFormData}/>
                                    </div>
                                </div>
                            </div>
                            <FooterDash />
                        </div>
                    </div>

                </div>
                halaman dashboard

            </div>
        );
    }
}

export default Dash;