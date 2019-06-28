import React, {Component} from 'react';
import Logo from './Logo';

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="landPage">
                <div>
                    <Logo color={"white"}/>
                </div>
                <div className="content">
                    <img />
                </div>
            </div>
        );
    }
}
export default LandingPage;