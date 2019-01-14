import React, { Component } from 'react';
import { Col, Row, Spin, Modal } from 'antd';
import { fetchBooks, fetchBookDetails, fetchAuthorDetails } from './api';
import BookList from './BookList';
import BookInformation from './BookInformation';
import AuthorInformation from './AuthorInformation';

export const isQuery = Component => props => {
    const { query } = props;
    return query ? <Component {...props} /> : null;
};

export const isLoading = Component => props => {
    const { loading } = props;
    return loading ? <Col md={12} offset={12}> <Spin size="large" /> </Col> : <Component {...props} />;
};

export class ResultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: undefined,
            totalItems: this.props.totalItems,
            books: this.props.books,
            visible: false,
        }
    }

    handlePageChanged = (page) => {
        fetchBooks(this.props.query, page).then(data => {
            this.setState({
                books: data.books,
                totalItems: data.totalItems
            });
        }).catch(error => console.log(error));
    }
    handleBookCliked = (book) => {
        this.setState({ selectedBook: book });
        fetchBookDetails(book.best_book.id).then(bookInfo => {
            this.setState({
                selectedBook:
                    Object.assign({}, this.state.selectedBook, bookInfo)
            });
        });
    }

    handleAuthorInfo = (author) => {
        console.log(author);
        const { id, name } = author;
        fetchAuthorDetails(id).then((response) => {

            this.setState({
                visible: true,
                authorInfo: response.authorInfo,
                modalTitle: name
            }, () => {
                console.log(this.state);
            })
        });
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        const { totalItems, books, selectedBook, visible, modalTitle, authorInfo } = this.state;
        return (
            <Row gutter={16} style={{ margin: '1rem' }}>
                <Col lg={0} md={6} sm={4} />
                <Col lg={6} md={12} sm={6}>
                    <div className="bookList">
                        <BookList
                            books={books}
                            onBookClicked={this.handleBookCliked}
                            totalItems={totalItems}
                            onPageChanged={this.handlePageChanged} />
                    </div>
                </Col>
                <Col lg={0} md={6} sm={4} />
                <Col lg={18} md={24} sm={24}>
                    <Row gutter={8}>
                        <Col lg={0} md={24} sm={24} style={{ height: '1rem' }} />
                        <Col>
                            <Modal
                                title={modalTitle}
                                visible={visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <AuthorInformation authorInfo={authorInfo} />
                            </Modal>
                            {selectedBook && <BookInformation bookInfo={selectedBook} getAuthorInfo={this.handleAuthorInfo} />}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const SearchResults = isQuery(isLoading(ResultView));
export default SearchResults;