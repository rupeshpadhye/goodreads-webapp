import React, { Component } from 'react';
import { Button, Col, Row, List, Avatar, Card, Rate, Input, Spin } from 'antd';
import { fetchBooks, fetchBookDetails } from './api';
import SearchBookResults from './SearchResults';

const Search = Input.Search;

class SearchBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: undefined,
      loading: false,
      totalItems: 0,
      query: undefined
    }
  }

  handleSearch = (query) => {
    this.setState({ loading: true });
    fetchBooks(query).then(data => {
      this.setState({
        books: data.books,
        loading: false,
        totalItems: data.totalItems,
        query: query
      });
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <Row gutter={8}>
        <Row style={{ height: '2rem', margin: '1rem' }}>
          <Search
            placeholder="Type Book Title"
            enterButton="Search"
            size="large"
            onSearch={this.handleSearch}
          />
        </Row>
        <Row>
          <SearchBookResults {...this.state} />
        </Row>
      </Row>
    )
  }
}

export default SearchBooks;