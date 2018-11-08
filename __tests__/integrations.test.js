import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
  });
});

afterEach( () => {
  moxios.uninstall()
});

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  );

  //simulates the click on the Fetch Comments button
  wrapped.find('.fetch-comments').simulate('click');

  //Need the moxios.wait() so that moxios has time to handle the API request before executing the expectaiton
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);
    //the done is here to make sure that jest can wait for the moxios.wait() before completing the test
    done();
    wrapped.unmount();
  });
  


})