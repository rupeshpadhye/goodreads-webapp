import React from 'react';
import { Row, Col, Avatar } from 'antd';

const AuthorInformation = (props) => {
    const { about, image_url } = props.authorInfo;
    return (
        <Row>
            <Row>
                <Col md={8}><Avatar size={64} src={image_url._cdata} /></Col>

            </Row>
            <Row>
                <Col><div dangerouslySetInnerHTML={{ __html: about._cdata }}></div></Col>
            </Row>
        </Row>
    );

}

export default AuthorInformation;