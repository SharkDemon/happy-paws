import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Volunteer from './Volunteer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Volunteer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Volunteer />
      </BrowserRouter>,
    );
  });
});