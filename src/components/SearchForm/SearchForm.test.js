import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {

  it('should match the snapshot with all data correctly passed', () => {
    const wrapper = shallow(  <SearchForm
      searchArticlesByKeyword={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot();
  })
})
