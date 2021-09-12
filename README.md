# Calorie Calculator App


## Available Scripts

In the project directory, you can run:

### `npm run server`
To start the Server
Listen - http://localhost:3001

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure
Server - server
Client - src
DB - MongoDB Atlas

package.json - Contains all Client & Server dependencies package with version

server folder containes
- controllers
- routes
- helpers/response - All server responses
- models
- db.js - DB Connect
- config - All app configuration (DB URL , private JWT key & Expire )

Client- src 
Redux
- actions
- Reducers
- config/api - http Api handler
- confige/store
App
- Constant - Routes Path & Intial state
- helpers

