/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Server} from 'miragejs';
import { restaurantsData, restaurantsDataParam } from './data/restaurants';
import { usersData } from './data/users';

//https://www.swyx.io/react-query-miragejs-crud/ Functionality for Typescript
new Server({
  routes() {
    this.namespace = 'api';

    this.get('/restaurants', () => {
      return restaurantsData();
    });

    this.post('/login', (schema, request) => {
      let req = JSON.parse(request.requestBody);
      const data= usersData();
      for(x of data){

        if(x.username===req.username)
          if(x.password===req.password)
            return x;
      }

      return {id:0,
        username:'',
        password:'',
        email:'',
        image_id:0,
        liked_id:[],};
    });

    this.get("/restaurantsFiltered/:match", (schema, request) => {
      let match = request.params.match
      console.log(match);
    
      return restaurantsDataParam(match);
    })
  },
});

AppRegistry.registerComponent(appName, () => App);
