import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import { editStaff, setCurrentStaff } from '../../store'
import { connect } from 'react-redux'
import Axios from 'axios';
class DashTabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: [],
            curentData: [],
            edit: false
        }
    }
    deleteData = (del, dropRowKeys) => {
        const dropRowKeysStr = dropRowKeys.join(',');
        if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
            Axios.post("http://sampeweweh.dx.am/backend/index.php/tps/delStaff", dropRowKeys).then((response) => {
                console.log(response);
                this.props.refresh();
            })
        }
    }
    edit = (row) => {
        this.props.editStaff(true);
        this.props.setCurrentStaff(row);
    }

    componentDidMount() {
        Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                d: response.data
            })
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
                <link rel="stylesheet"
                    href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css">
                </link>
                {/* redux {this.props.dataStaf.nama} */}
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
                                    <BootstrapTable data={this.props.dataStaff}
                                        striped
                                        insertRow
                                        deleteRow={true}
                                        pagination options={options}
                                        selectRow={selectRow} search={true}
                                        multiColumnSearch={true}
                                        exportCSV={true}>
                                        <TableHeaderColumn dataField='nama'>Nama</TableHeaderColumn>
                                        <TableHeaderColumn dataField='bidang'>Bidang</TableHeaderColumn>
                                        <TableHeaderColumn dataField='foto'>Alamat</TableHeaderColumn>
                                        <TableHeaderColumn dataField='id' isKey hidden> Action</TableHeaderColumn>
                                    </BootstrapTable>
                                    {/* <button onClick={this.props.editStaff}>tes props redux</button> */}
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
const mapDis = { editStaff, setCurrentStaff }
export default connect(mapState, mapDis)(DashTabel);