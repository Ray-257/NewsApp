import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';


describe('Search Box', () => {
  let wrapper
  const handleSearch = jest.fn();
  const setQuery = jest.fn();
  beforeEach(() => {
     wrapper = shallow(<SearchBox searchKey="test" handleSearch={handleSearch} setQuery={setQuery}  />);
  })
  afterEach(() => {
    wrapper = null
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have input value as `test', () => {
    const inputValue = wrapper.find('input').get(0).props.value;
    expect(inputValue).toEqual("test");
  });
  it('should simulate event on search input', () => {
    wrapper.find('input').simulate('change',{target:''})
    expect(setQuery).toHaveBeenCalledTimes(1);
  });
  it('should simulate event on form  submit', () => {
    wrapper.find('form').simulate('click')
    expect(setQuery).toHaveBeenCalledTimes(1);
  });
});