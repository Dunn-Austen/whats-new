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
    expect(wrapper.state('genreDisplayed')).toEqual(expected);
  });

  it('should update state when searchArticlesByKeyword returns an array.length > 0', () => {
    const wrapper = shallow(<App />);
    const mockSearchQuery = 'The Who';
    const expected = [
      {
      id: 1,
      headline: 'The Who postpones Denver Concert at the Pepsi Center',
      img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
      description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
      url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
      }
    ]

    wrapper.instance().searchArticlesByKeyword(mockSearchQuery);
    expect(wrapper.state('genreDisplayed')).toEqual(expected);
  });

  it('should update state when searchArticlesByKeyword returns an array.length = 0', () => {
    const wrapper = shallow(<App />);
    const mockSearchQuery = 'Surfcity';
    const expected = [
      {
      id: null,
      headline: 'No matching results',
      img: 'https://store.hallsigns.com/assets/images/W14-1.png',
      description: 'Please search using a different keyword',
      url: null
      }
    ]

    wrapper.instance().searchArticlesByKeyword(mockSearchQuery);
    expect(wrapper.state('genreDisplayed')).toEqual(expected);
  });

})
