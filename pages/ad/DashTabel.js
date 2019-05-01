import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import { refDataStaf, incrementCount, startClock } from '../../store'
import { connect } from 'react-redux'
import Axios from 'axios';
class DashTabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: []
        }
    }

    edit() {

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
                {this.props.dataStaf}
                <BootstrapTable data={this.state.d}
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
                <button onClick={this.props.refDataStaf}>ttt</button>
            </div>
        );
    }
}
function mapState(state) {
    const { dataStaf, count, da } = state
    return { dataStaf, count, da }
}
const mapDis = { refDataStaf, incrementCount, startClock }
export default connect(mapState, mapDis)(DashTabel);