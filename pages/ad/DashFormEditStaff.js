import React, { Component } from 'react';
import {connect} from 'react-redux'
class DashFormEditStaff extends Component {
    render() {
        return (
            <div>
               halo from form
            </div>
        );
    }
}
function mapState(state) {
    const { dataStaf, editStaf } = state
    return { dataStaf, editStaf }
}
export default connect(mapState,null)(DashFormEditStaff);