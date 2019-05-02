import React, { Component } from 'react';
import HeaderDashPeneliti from './bag/HeaderDashPeneliti'
import NavigasiPeneliti from './bag/NavigasiPeneliti';
import MenuNavPeneliti from './bag/MenuNavPeneliti';
import FooterDashPeneliti from './bag/FooterDashPeneliti';



class DashPeneliti extends Component {
    render() {
        return (
            <div id="wrapper">
            <HeaderDashPeneliti title="Dash Peneliti"/>
            
            <NavigasiPeneliti/>
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
                                    hallooo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <FooterDashPeneliti/>
        </div>
        );
    }
}

export default DashPeneliti;