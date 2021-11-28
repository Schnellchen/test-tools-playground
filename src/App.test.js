import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Link from './components/Link';
import Checkbox from './components/Checkbox';
//import * as user from './api/user';
import * as app from "./functions/anotherMath";
import * as math from "./functions/math";

// Whole module mock
//jest.mock("./functions/math");

// Single function mock
math.add = jest.fn((a, b) => a + b);
math.subtract = jest.fn();

test("calls math.add with keeping of original implementation", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toReturnWith(3);
});

test("calls math.add", () => {
  app.doAdd(1, 3);
  expect(math.add).toReturnWith(3);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/nav/i);
  expect(text).toBeInTheDocument();
});

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByTestId} = render(
    <Checkbox dataTestId="test-checkbox" labelOn="On" labelOff="Off" />,
  );
  const checkbox = queryByTestId('test-checkbox');

  expect(checkbox).toHaveClass('notChecked');

  fireEvent.click(checkbox);
  expect(checkbox).toHaveClass('checked');

  fireEvent.mouseOver(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(checkbox.parentElement).toHaveTextContent(/_onMouseOver/i);

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(checkbox.parentElement).toHaveTextContent(/_onChange/i);
});


// jest.mock('./__mocks__/request');
//
// // Должен быть возвращен тестируемый промис.
// it('работает с промисами', () => {
//   expect.assertions(1);
//   return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
// });