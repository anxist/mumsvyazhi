import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';

class Accardion extends Component {
    render() {
        return (
            <Accordion className="accor_main" defaultActiveKey="0">
                <Accordion.Item className="accor_margin" eventKey="0">
                    <Accordion.Header className="accor_item">question?</Accordion.Header>
                    <Accordion.Body >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accor_margin" eventKey="1">
                    <Accordion.Header>question?</Accordion.Header>
                    <Accordion.Body>
                        LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accor_margin" eventKey="2">
                    <Accordion.Header>question?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accor_margin" eventKey="3">
                    <Accordion.Header>question?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accor_margin" eventKey="4">
                    <Accordion.Header>question ?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default Accardion;