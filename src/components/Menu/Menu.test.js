import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu
      entertainment={[{id: 1, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      health={[{id: 2, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      local={[{id: 3, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      science={[{id: 4, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      switchStateGenre={jest.fn()}
      technology={[{id: 5, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
      />);
  });

  it('should match the snapshot with all data correctly passed', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke switchStateGenre() upon button click', () => {
    wrapper.find('#entertainment-btn').simulate('click');
    expect(wrapper.switchStateGenre).toEqual(undefined);
  });
})
