import React, {Component} from 'react';
import Logo from '../components/Logo';

class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
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
export default LoginScreen;