import React from 'react';
import { shallow } from 'enzyme';
import Landing  from './';


describe('Landing', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<Landing />);
  })
  afterEach(() => {
    wrapper = null
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});