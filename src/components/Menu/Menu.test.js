import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {

  it('should match the snapshot with all data correctly passed', () => {
    const wrapper = shallow(<Menu
              entertainment={[{id: 1, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
              health={[{id: 2, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
              local={[{id: 3, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
              science={[{id: 4, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
              switchStateGenre={jest.fn()}
              technology={[{id: 5, headline: 'A' , img: 'B' , description: 'C', url: 'D'}]}
            />);

    expect(wrapper).toMatchSnapshot();
  })
})
