import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {

  it('should match the snapshot with all data correctly passed', () => {
    const wrapper = shallow(<NewsArticle
            headline={'A'}
            img={'B'}
            description={'C'}
            url={'D'}
            id={1}
            key={1}
          />);

    expect(wrapper).toMatchSnapshot();
  })
})
