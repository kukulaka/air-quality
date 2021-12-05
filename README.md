# Air quality one page site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

As this is a simple site and requires no routing, I decided to bootstrap with create-react-app.  This project is deployed to [https://kukulaka.github.io/air-quality](https://kukulaka.github.io/air-quality). If this was a more complex project, I would use NextJS and take advantage of the file based routing approach.  

To speed up development time, I used [https://chakra-ui.com](Chakra UI) for UI components. I could have also used [https://styled-components.com/docs/basics](Styled components) or [https://emotion.sh/docs/introduction](Emotion). This is my preference rather than using seperate style sheets as its easy to keep track of specific styles for components, and prevents class name bugs. Other approches could have included [https://tailwindcss.com/docs/installation](TailwindCSS) and styled components.  

## Http Requests
[https://www.npmjs.com/package/axios](Axios) was used for Http requests. The baseurl is stored in the env file. **Have included an example env in the repo, but this would not normally be pushed to the repo!**

## Tests


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`
This deploys the project to [https://kukulaka.github.io/air-quality/](https://kukulaka.github.io/air-quality/). You must run `yarn build` first.
