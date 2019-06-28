import React, {Component} from 'react';
import Logo from '../components/Logo';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="homePage">
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
export default HomeScreen;