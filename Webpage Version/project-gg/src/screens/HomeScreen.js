import React, {Component} from 'react';
import Logo from '../components/Logo';

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
                    TEST
                </div>
            </div>
        );
    }
}
export default LandingPage;