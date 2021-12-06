import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import HomeContainer from '../containers/HomeContainer';
import { shallow, configure } from 'enzyme';
import getCities from '../api/getCities';
import { AllCities } from '../types/Cities';

// mock API call
configure({ adapter: new Adapter() });
jest.mock('../api/getCities');

describe('home container should retrieve city data on load', () => {
  it('t1', (done) => {
    const mockedData: AllCities = {
      meta: {
        name: 'test',
        license: 'test',
        website: 'test',
        page: 1,
        limit: 1,
        found: 1,
      },
      error: { meta: null, results: null, error: false, errorMsg: null },
      results: [
        {
          country: 'GB',
          city: 'Manchester',
          count: 1,
          locations: 1,
          firstUpdated: '2021-04-01T00:00',
          lastUpdated: '2021-04-01T00:00',
          parameters: ['p02', 'o2'],
          value: 'Manchester',
          label: 'Manchester',
        },
      ],
    };
    (getCities as jest.MockedFunction<typeof getCities>).mockResolvedValueOnce(
      mockedData
    );
    const wrapper = shallow(<HomeContainer></HomeContainer>);
    setImmediate(() => {
      expect(wrapper).toMatchSnapshot();
      done();
    });
  });
});
