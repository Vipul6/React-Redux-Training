import React from 'react';
import Header from './containers/Header';
import Footer from './components/Footer';
import Cart from './cart/components/Cart';

export class App extends React.Component {

    //returns a view
    //return a virtual dom
    render() {
        /*return React.createElement(
                        'h1',
                        {id: 'header'},
                        'React App'
                    )*/
        return (
            <div>
                <Header title='React App'/>
                    {this.props.children}
                <Footer year={2017} company=''/>
            </div>
        );
    }
}