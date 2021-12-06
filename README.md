# :cloud: Air quality one page site

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

As this is a simple site and requires no routing, it was bootstrapped with create-react-app typescript template. If this was a more complex project, I would use NextJS and take advantage of the file based routing approach.

To speed up development time, [Chakra UI](https://chakra-ui.com) was used for UI components. [Styled Components](https://styled-components.com/docs/basics) or [Emotion](https://emotion.sh/docs/introduction) could also have been used. This is my preference rather than using seperate style sheets as its easy to keep track of specific styles for components, and prevents class name bugs. Other approches could have included [TailwindCSS](https://tailwindcss.com/docs/installation) and styled components.

If `head` details need to be changed, something like [React Helmet](https://github.com/nfl/react-helmet) could be used to control the meta data, but this is not needed here.

## Deployment

This project is deployed to [https://kukulaka.github.io/air-quality](https://kukulaka.github.io/air-quality).

## Project structure

I have included the typical project structure I use. Some of these directrories will be empty due to this being a small project.

## Http Requests

[Axios](https://www.npmjs.com/package/axios) was used for Http requests. The base url for the Air Quality API is stored in the env file. **Have included an example env in the repo, but this would not normally be pushed to the repo!** The swagger for the air quality API can be found at [https://docs.openaq.org/](https://docs.openaq.org/).

## Tests

These can be found in the `__tests__` directory. Tests can be run using `yarn test` and `yarn test:watch`. [Jest](https://jestjs.io/) to run tests and [Enzyme](https://enzymejs.github.io/enzyme/) for mocking. More tests should be included than this :smiley:

## Other notes

### Autocomplete component

I have used a npm package for autocomplete component (chakra-ui-autocomplete) due to time contraints. If I had more time would make my own. The component does not currently have a custom render for the list of cities, and so when height is added to the list props, the list shows even when no cities are selected. :unamused:
I needed to add `value` and `label` properties as there was no way to amend to accept other property names. :unamused: :unamused:

There also seems to be a bug with setting the color of the input. The components includes tags by default, with no way to switch them off. However, I think they look kind of cool and provide a way of deleting all locations for a city.

### Air Quality API

Air Quality location data - to get the air quality values the endpoint `/v2/latest` was used. To get city data `/v2/cities`. Parameters to reduce the response size were used included country code and city names. The endpoint `/v2/latest` is called every time a new city was selected. but in some scenarios, it might be better do one call with all the selected cities.

### CityAirQuality component

As a city could have multiple locations (eg Manchester) there are potentially multiple locations for a city. In the mock pdf, only one location per city is shown.
On the delete call to action, only that specific location will be removed from the array. if only one location should be shown per city, code can be refactored to account for this.

## Done

- [x] Chakra UI install and basic theme
- [x] Basic tests for checking Home and App component render ok
- [x] Request function using Axios using base URL
- [x] Autocomplete component for cities input box
- [x] Function to get all cities
- [x] Grid layout for city child component
- [x] Function to get locations by city
- [x] call to action to remove location from selected items

### To Do

- [ ] Confirm hex values of linear gradient so it can be a bit nicer and match the mockup pdf
- [ ] Confirm font sizes
- [ ] Make styling for input box a little nicer - it currently does mot match mockup completely
- [ ] Custom component for autocomplete

## Suggestions 
- Include the measurement unit
- Group locations by city (if there is more than one)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

This deploys the project to [https://kukulaka.github.io/air-quality/](https://kukulaka.github.io/air-quality/).
