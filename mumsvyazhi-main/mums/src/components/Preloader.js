import React, {Component} from 'react';
import Lottie from 'lottie-react';
import animationData from '../components/Animation - 1702822230496.json';


export default class Preloader extends Component {

    render() {
        return (
            <>
                <div>
                    <Lottie animationData={animationData} loop={true}/>
                </div>
            </>
        );
    }
}
