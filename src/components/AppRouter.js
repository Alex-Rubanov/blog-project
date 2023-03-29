import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import ErrorPage from '../pages/ErrorPage';

import React from 'react'

export default function AppRouter() {
  return (
    <Switch>
        <Route exact path="/about">
            <About/>  
        </Route> 

        <Route exact path="/"/>

        <Route exact path="/posts">
         <Posts/>
        </Route>

        <Route exact path="/posts/:id">
            <PostIdPage />
        </Route>

        <Route path="/404">
            <ErrorPage/>
        </Route>

        <Redirect to="/404"/>
    </Switch>
  )
}
