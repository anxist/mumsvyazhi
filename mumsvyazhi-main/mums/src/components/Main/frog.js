import React, {Component} from 'react';
import frog from '../../img/main/ill 2.png';

class Frog extends Component {
    render() {
        return (
            <div className="froggy">
                <img src={frog}
                     width={416}
                     height={394}
                     alt="logo"
                />
            </div>
        );
    }
}

export default Frog;