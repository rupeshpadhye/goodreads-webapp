import React from 'react';
import { List } from 'antd';
import BookItem from './BookItem';

const BookList = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="medium"
      pagination={{
        onChange: page => {
          props.onPageChanged(page);
        },
        pageSize: 5,
        total: props.totalItems,
        simple: true
      }}
      dataSource={props.books}
      renderItem={item => {
        return (<List.Item onClick={() => props.onBookClicked(item)} ><BookItem book={item.best_book} /></List.Item>)
      }}
    />
  )
}
export default BookList;