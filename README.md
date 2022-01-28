# MERN chat application

Tried to have some sort of MVP, in a couple of nights. Didn't have much time to add unit test and improve eslint rules. 

Tried to take all the best practices from PreLaunch for the frontend. Decided to try Redux, didn't like it at all, almost feels like Vuex. 

For backend didn't have a really great reference, so my learning projects and Google were my best friends here.

### Features I want to add later
- Message editing
- Message pinning
- Message reaction
- Message deletion
- Message forwarding / replying
- Image compression
- Authrization with social networks
- Detailed user profile
- User blocking
- Store images in cloud
- Integrate graphql

### Known issues:
- [ ] User profile image upload sometimes throws a server error:
- [ ] Small UI and UX issues
- [ ] Auto scroll to the bottom of the chat when opening the chat
- [ ] User searing can be improved with throttling or debouncing functions

### Frontend stack:

* ReactJS
* Typescript
* Redux
* React Router
* Axios
* date-fns
* Formik

### Backend stack:

- NodeJS
- TypeScript
- Express
- Mongoose
- Multer
- Socket.io
- JWT


### Requirements:
* Node.js installed
* MongoDB connection


### Usage:
2. Install run dependencies:
```
$ npm i
```
3. Install server & client dependencies:
```
$ npm run client-install
$ npm run server-install
```
4. Create a `.env` file in ```server``` folder and insert the following code
```
  NODE_ENV=development
  PORT=3003

  JWT_SECRET=UpFJjpWKYteH5rMHSxst
  JWT_MAX_AGE=7d
```
5.Run it:
```
$ npm start
```