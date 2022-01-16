import React from 'react';
import { shallow } from 'enzyme';
import NewsItem  from './NewsItem';


describe('NewsItem', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<NewsItem  item={{title:'News title 1',description:"Testing news post"}}/>);
  })
  afterEach(() => {
    wrapper = null
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have  title', () => {
    const title = wrapper.find("a").text();
    expect(title).toEqual("News title 1");
  });
  it('should have description', () => {
    const title = wrapper.find("p").text();
    expect(title).toEqual("Testing news post");
  });
});