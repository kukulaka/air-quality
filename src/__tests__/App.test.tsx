
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";

import App from '../../src/App';

//does App Render? 
configure({adapter: new Adapter()});
it("renders app without crashing", () => {
  shallow(<App />);
});


