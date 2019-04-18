import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';
import ReactDOM from 'react-dom';

import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('App Component testing', function() {
//   it('App renders main message', () => {
//     const wrapper = shallow(<App />);
//     const editText = (
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//     );
//     expect(wrapper).to.contain(editText);
//   });

//   describe('(Component) App', () => {
//     it('renders without crashing', () => {
//       const wrapper = shallow(<App />);
//       expect(wrapper).to.exist;
//     });
//   });

//   describe('Test Framework', () => {
//     it('is configured correctly', () => {
//       expect(1).to.equal(1);
//     });
//   });

//   chai.use(chaiEnzyme());
// });

function isPalindrone(value) {
  if (value.length === 1) return true;

  let valueStrippedSpaces = value.split(' ').join('');
  return (
    valueStrippedSpaces ===
    valueStrippedSpaces
      .split('')
      .reverse()
      .join('')
  );
}

describe('Is Palindrone', () => {
  it('exists', () => {
    expect(isPalindrone).to.exist;
  });

  it('a single letter is a palindrome', () => {
    // arrange
    const value = 'a';

    // act
    const result = isPalindrone(value);

    // assert
    expect(result).to.be.true;
  });

  it('two non-matching letters is not a palindrome', () => {
    // arrange
    const value = 'at';

    // act
    const result = isPalindrone(value);

    // assert
    expect(result).to.be.false;
  });

  it('two matching letters are a palindrome', () => {
    // arrange
    const value = 'oo';

    // act
    const result = isPalindrone(value);

    // assert
    expect(result).to.be.true;
  });

  it('three letter palindrome', () => {
    // arrange
    const value = 'mom';

    // act
    const result = isPalindrone(value);

    // assert
    expect(result).to.be.true;
  });

  it('four letter palindrome', () => {
    // arrange
    const value = 'abba';

    // act
    const result = isPalindrone(value);

    // assert
    expect(result).to.be.true;
  });

  it('phrase with spaces is a palindrome', () => {
    // arrange
    const value = 'a man a plan a canal panama';

    // act
    const result = isPalindrone(value);

    // asert
    expect(result).to.be.true;
  });
});
