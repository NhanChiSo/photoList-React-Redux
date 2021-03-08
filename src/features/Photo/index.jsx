import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NotFound from '../../components/NotFound';
import MainPage from './pages/Main';
import AddEditPage from './pages/AddEdit';

function Photo(props) {
    // Hook này sẽ trả về url của thằng cha (ở đây là /photos)
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound}/>
        </Switch>
    )
}

export default Photo
