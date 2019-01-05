import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResults, { isQuery, isLoading, ResultView } from '../SearchResults';
import { Spin } from 'antd';
import BookList from '../BookList';
import BookInformation from '../BookInformation';
import BookItem from '../BookItem';
import * as API from '../api';

describe('<SearchResults/> test suite', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<SearchResults />);
        expect(wrapper).toBeDefined();
    });

    it('should return null when query not defined ', () => {
        const dummyComponent = () => (<div>Dummy</div>);
        const HOComponent = isQuery(dummyComponent);
        const wrapper = shallow(<HOComponent />);
        expect(wrapper.find(dummyComponent).length).toBe(0);
    });

    it('should return Spin when loading true ', () => {
        const dummyComponent = () => (<div>Dummy</div>);
        const HOComponent = isLoading(dummyComponent);
        const wrapper = shallow(<HOComponent loading={true} />);
        expect(wrapper.find(Spin).length).toBe(1);
    });

    it('should show SearchResults component ', () => {
        const wrapper = mount(<SearchResults query='Testme' loading={false} totalItems={1234} books={[]} />);
        expect(wrapper.find(BookList).length).toBe(1);
    });

    it('ResultView on book click show selected Book', done => {
        const books = [{
            'average_rating': 4.48,
            'best_book': {
                'author': { id: 60805, name: "Joshua Bloch" },
                'image_url': "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                'small_image_url': "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
                'title': "Effective Java Programming Language Guide",
                'books_count': 32,
                'id': 101316,
            },
            'ratings_count': 5604,
            'text_reviews_count': 308,
        }];

        API.fetchBookDetails = jest.fn(() => new Promise(resolve => resolve({
            description: 'Description of books',
            authors: [{ name: 'Author1' }, { name: 'Author2' }]
        })));

        const wrapper = mount(
            <ResultView
                totalItems={1234}
                books={books}
            />);

        expect(wrapper.find(BookList).length).toBe(1);
        const bookList = wrapper.find(BookList);
        bookList.find('.ant-list-item').simulate('click');
        process.nextTick(() => {
            wrapper.update();
            const selected = wrapper.state().selectedBook;
            expect(selected.description).toBe('Description of books');
            done();
        })


    })

});