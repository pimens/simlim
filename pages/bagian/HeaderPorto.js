import React, { Component } from 'react';
import Head from 'next/head'
class HeaderPorto extends Component {
    render() {
        return (
            <div>
                <Head>


                    <title>{this.props.title}</title>                    
                   
                    <link href="static/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="static/font-awesome/css/font-awesome.css" rel="stylesheet"/>
                    <link href="static/css/animate.css" rel="stylesheet"/>
                    <link href="static/css/style.css" rel="stylesheet"/>
                        
                </Head>

            </div>
                );
            }
        }
        
export default HeaderPorto;