import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import views
import AView01 from './views/AView01/AView01';
import AView02 from './views/AView02/AView02';
import Players from './views/Players/Players';

export default (
    <Switch>
        <Route exact path='/' component={Players} />
        <Route exact path='/AView1' component={AView01} />
        <Route path='/AView02' component={AView02} />
    </Switch>
)