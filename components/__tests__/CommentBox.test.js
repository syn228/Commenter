import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'
import Root from 'Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

afterEach(() => {
  wrapped.unmount()
});

it('shows a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});


describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    wrapped.update();
  });

  it('allows users to write in the text area', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears the text area when the form is submitted', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
