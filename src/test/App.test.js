import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';
import ReactDOM from 'react-dom';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {
  it('App renders main message', () => {
    const wrapper = shallow(<App />);
    const editText = (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
    expect(wrapper).to.contain(editText);
  });

  describe('(Component) App', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
  });

  describe('Test Framework', () => {
    it('is configured correctly', () => {
      expect(1).to.equal(1);
    });
  });

  chai.use(chaiEnzyme());
});
