import React, { Component } from 'react';

class Container extends Component {
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10">
                        <div className="jumbotron">
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;