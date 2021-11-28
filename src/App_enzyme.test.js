import App from './App';
import Checkbox from './components/Checkbox';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('Get checkbox element', () => {
  expect(shallow(<App/>).find(Checkbox).length).toBeTruthy();
});

test('Get article tag', () => {
  expect(shallow(<App/>).find('article').text()).toMatch(/article/i);
});

test('Change article text', () => {
  const article = mount(<App/>).find('article');
  article.simulate('click');
  article.simulate('click');
  article.simulate('click');
  expect(article.text()).toMatch(/clicked/i);
});

