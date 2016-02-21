/* eslint no-unused-vars:0 */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PomoContainer from './container/PomoContainer/PomoContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={PomoContainer} />
    <Route path="/user" component={PostDetailView}/>
  </Route>
);

export default routes;
