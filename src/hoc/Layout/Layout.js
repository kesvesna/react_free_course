import React, {Component} from 'react';
import './Layout.css';

class Layout extends Component {
    render (){
        return (
            <div className="Layout">
                <main className="Layout main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;