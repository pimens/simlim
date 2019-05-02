import React, { Component } from 'react';

import HeaderDash from './bag/HeaderDash';
import FooterDash from './bag/FooterDash'
import Navigasi from './bag/Navigasi';
import MenuNav from './bag/MenuNav';
import DashTabel from './DashTabel';
import { InsertButton } from 'react-bootstrap-table';
import DashFormTambahData from './DashFormTambahData';
import Axios from 'axios';
import {connect} from 'react-redux'
import DashFormEditStaff from './DashFormEditStaff';
class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tambahStaf: false,
            dataStaff: [],
            edit: false
        }
    }
    componentDidMount() {
        this.refreshData();
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
    closeForm = () => {
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
                                    refresh={this.refreshData}
                                    closeForm={this.closeForm}
                                />
                            </div>
                            :
                            <div></div>
                    }  
                    {
                        this.props.editStaf ? 
                        <div><DashFormEditStaff refresh={this.refreshData}
                        /></div>                        
                        :
                        <div>false</div>
                    }                  
                    <DashTabel showFormData={this.showFormData}
                        dataStaff={this.state.dataStaff}
                        refresh={this.refreshData}

                    />
                </div>
                <FooterDash />
            </div>

        );
    }
}
function mapState(state) {
    const { editStaf } = state
    return { editStaf }
}
export default connect(mapState)(Dash);