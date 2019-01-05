import React from 'react';
import { Col, Row, Card, Rate } from 'antd';

const BookInformation = (props) => {
    const { average_rating, best_book: { author, image_url, title }, text_reviews_count, ratings_count, description, authors } = props.bookInfo;
    return (
        <Card>
            <Row>
                <Col md={6}>
                    <Row>
                        <img src={image_url} alt={title} width="95%" height="300px" />
                    </Row>
                </Col>
                <Col md={18}>
                    <Row><h1>{title}</h1></Row>
                    <Row> {authors && <h3>By {(authors || []).map(author => author.name).join()}</h3>} </Row>
                    <Row>
                        <Col md={8}>
                            <Rate value={average_rating} disabled />
                            {average_rating && <span className="ant-rate-text">{average_rating} stars</span>}
                        </Col>
                        <Col md={16}>
                            <Row>
                                <Col md={8}>Rating Details </Col>
                                <Col md={8}> {ratings_count} Ratings  </Col>
                                <Col md={8}> {text_reviews_count} Reviews </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <div className="bookDescription" dangerouslySetInnerHTML={{ __html: description }}></div>
                    </Row>
                </Col>
            </Row>
        </Card >
    )
}

export default BookInformation;