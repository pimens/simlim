import React, { Component } from 'react';
const style_2 = {
    width: '52',
    height: '50'
}
const s1 = {
    marginbottom: 0
}

class NavigasiPeneliti extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element"> <span>
                                    <img alt="image" className="img-circle" src="../../../static/img/userss.png" style={style_2} />
                                </span>

                                </div>
                                <div className="logo-element">
                                    LPPM Unram
                            </div>
                            </li>
                            <li>
                                <a href="main.php"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-th-large"></i> <span className="nav-label">Program Usulan</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="?page=10">Penelitian</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <div id="page-wrapper" className="gray-bg dashbard-1"> */}
                   
                {/* </div> */}

            </div>
        );
    }
}

export default NavigasiPeneliti;