import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dog from './Dog';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Dog />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Dog />
      </BrowserRouter>,
    );
  });
});