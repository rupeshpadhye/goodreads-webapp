import React from 'react';
import { Col, Row, Avatar } from 'antd';

const BookItem = (props) => {
    const { author, title, small_image_url } = props.book;
    return (
        <Row>
            <Col md={6}>
                <Avatar shape="square" size="large" src={small_image_url} />
            </Col>
            <Col md={18}>
                <Row className="bookListTitle">{title}</Row>
                <Row> {author.name} </Row>
            </Col>
        </Row>
    )
}

export default BookItem;