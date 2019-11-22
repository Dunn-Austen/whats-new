import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {

  it('should match the snapshot with all data correctly passed', () => {
    const wrapper = shallow(<NewsContainer
      genreDisplayed={[{id: 1, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      />);

    expect(wrapper).toMatchSnapshot();
  })
})
