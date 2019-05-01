import React, { Component } from 'react';
import Axios from 'axios';
import Link from 'next/link'
class Kegiatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kegiatan: []
        }
    }
    componentDidMount=()=> {
        // $config['base_url']="http://localhost/yourProjectFolder/";
        
        Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getKegiatan").then((response) => {
            console.log(response)
            this.setState({
                kegiatan: response.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2" />
                    {
                        this.state.kegiatan.map(kegiatan => {
                            return (
                                <div key={kegiatan.id} className="col-sm-2">
                                    <div className="list-group">
                                    <Link href={{ pathname: '/bagian/DKegiatan', query: { name: kegiatan.id }}}>
                                        <a className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="d-flex w-100 justify-content-between">
                                                <small className="mb-1">{kegiatan.jenis}</small>
                                                <small className="text-muted">{kegiatan.tanggal}</small>
                                            </div>
                                            <p className="mb-1">{kegiatan.judul}</p>
                                            <small className="text-muted">{kegiatan.tempat}</small>
                                        </a></Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Kegiatan;