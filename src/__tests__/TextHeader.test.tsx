import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Text } from '@chakra-ui/react';
import TextHeader from '../containers/HomeContainer/TextHeader';

// testing the text in the home component
configure({ adapter: new Adapter() });
it('renders Header', () => {
  const wrapper = shallow(<TextHeader />);
  const header = <Text textStyle="h1">Compare your Air</Text>;
  const mainText = (
    <Text paddingTop="40px" id="header" paddingBottom="5px">
      Compare the air quality between cities in the UK.
    </Text>
  );
  const secondText = (
    <Text>Select cities to compare using the search tool below.</Text>
  );
  expect(wrapper.contains(header)).toEqual(true);
  expect(wrapper.contains(mainText)).toEqual(true);
  expect(wrapper.contains(secondText)).toEqual(true);
});
