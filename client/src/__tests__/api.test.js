import * as API from '../api';
import { books, bookDetail } from '../__mocks__/books';

describe('api test suite', () => {
    it('test fetchBooks', done => {
        const mockJsonPromise = Promise.resolve(books);
        const mockFetchPromise = Promise.resolve({
            text: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        API.fetchBooks('Java').then((result) => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith('/api/search/index.xml?q=Java&page=1');
            global.fetch.mockClear();
            done();

        });
    });

    it('test fetchBookDetails', done => {
        const mockJsonPromise = Promise.resolve(bookDetail);
        const mockFetchPromise = Promise.resolve({
            text: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        API.fetchBookDetails(13496).then((result) => {
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith('/api/book/show/13496');
            global.fetch.mockClear();
            done();

        });
    });

}); 