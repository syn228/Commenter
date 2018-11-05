import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
});

afterEach(() => {
  wrapped.unmount()
});

it('shows a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});

it('allows users to write in the text area', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
});

