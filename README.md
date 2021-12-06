#  :cloud: Air quality one page site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

As this is a simple site and requires no routing, it was bootstrapped with create-react-app typescript template.  This project is deployed to [https://kukulaka.github.io/air-quality](https://kukulaka.github.io/air-quality). If this was a more complex project, I would use NextJS and take advantage of the file based routing approach.  

To speed up development time, [Chakra UI](https://chakra-ui.com) was used for UI components. [Styled Components](https://styled-components.com/docs/basics) or [Emotion](https://emotion.sh/docs/introduction) could also have been used. This is my preference rather than using seperate style sheets as its easy to keep track of specific styles for components, and prevents class name bugs. Other approches could have included [TailwindCSS](https://tailwindcss.com/docs/installation) and styled components. 

If `head` details need to be changed, something like [React Helmet](https://github.com/nfl/react-helmet) could be used to control the meta data, but this not needed here.

## Project structure
I have included the typical project structure I use. Some of these directrories will be empty due to this being a small project. 

## Http Requests
[Axios](https://www.npmjs.com/package/axios) was used for Http requests. The base url for the Air Quality API is stored in the env file. **Have included an example env in the repo, but this would not normally be pushed to the repo!** The swagger for the air quality API can be found at [https://docs.openaq.org/](https://docs.openaq.org/).

## Tests
These can be found in the `__tests__` directory. Tests can be ran using `yarn test` and `yarn test:watch`.  [Jest](https://jestjs.io/) to run tests and [Enzyme](https://enzymejs.github.io/enzyme/) for mocking. More tests should be included than this :smiley:


## Other notes
I have used a npm package for autocomplete component (chakra-ui-autocomplete) due to time contraints.  If I had more time would make my own. The component does not currently have a custom render for the list of cities, and so when height is added to the list props, the list shows even when no cities are selected. :unamused:
I needed to add `value` and `label` properties as there was no way to amend to accept other property names.  :unamused: :unamused: 

Air Quality location data - to get the air quality values the endpoint `/v2/latest` was used. To get city data `/v2/cities`. Parameters to reduce the response size were used included country code and city names. The endpoint `/v2/latest` is called every time a new city was selected. but in some scenarios, it might be better do one call with all the selected cities. 

This endpoint has multiple locations per city, but the mockup pdf only requires one location to be shown per city. Therefore, the first item in the locations array was chosen for ease. If there was more time, there could be multiple cards per city in a parent div (box or similar) and these could be compared against all the locations in another city. 
## Done
- [x] Chakra UI install and basic theme
- [x] Basic tests for checking Home and App component render ok
- [x] Request function using Axios using base URL
- [x] Autocomplete component for cities input box
- [x] Function to get all cities 
- [x] Grid layout for city child component

### To Do
- [ ] Confirm hex values of linear gradient so it can be a bit nicer and match the mockup pdf
- [ ] Confirm font sizes
- [ ] Make styling for input box a little nicer
- [ ] Values endpoint
- [ ] Component for city value
- [ ] Custom component for autocomplete 

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
