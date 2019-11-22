import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when switchStateGenre is called', () => {
    const wrapper = shallow(<App />);
    const mockGenre = [{mockProperty: 'MockValue'}];
    const expected = mockGenre;

    wrapper.instance().switchStateGenre(mockGenre);
    expect(wrapper.state('genreDisplayed')).toEqual([{mockProperty: 'MockValue'}]);
  });



})
