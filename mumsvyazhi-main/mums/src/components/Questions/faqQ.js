import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Header_questions from "./header_questions";


class FaqQ extends Component {
    render() {
        return (
            <div className='bg_quest container-fluid'>
                <Container>
                    <Header_questions></Header_questions>
                </Container>
            </div>
        );
    }
}

export default FaqQ;