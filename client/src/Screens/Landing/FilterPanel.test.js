import React from 'react';
import { shallow } from 'enzyme';
import FilterPanel  from './FilterPanel';


describe('NewsItem', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<FilterPanel  />);
  })
  afterEach(() => {
    wrapper = null
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have  DropDown', () => {
    expect(wrapper.find("DropDown").length).toEqual(2);
  });
});