import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Trip from './Trip';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Trip />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Trip />
      </BrowserRouter>,
    );
  });
});