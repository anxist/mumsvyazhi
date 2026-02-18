import React, {Component} from 'react';
import Header from "./Main/header";
import Promo from "./Main/Promo";
import Main from "./Main/Main";
import Footer from "./Main/Footer";
export default class Home extends Component {
    render() {
        return (
            <div className="background">
                <Header></Header>
                <Promo></Promo>
                <Main></Main>
                <Footer></Footer>
            </div>

        );
    }
}

