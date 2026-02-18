import React, {Component} from 'react';

import Secret from './Secret';

class Game extends Component {
    render() {
        return (
            <div className="haml">
                <Secret>
                </Secret>
            </div>
        );
    }
}

export default Game;