import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/> test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('<App/> test suite', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });

  });

});
