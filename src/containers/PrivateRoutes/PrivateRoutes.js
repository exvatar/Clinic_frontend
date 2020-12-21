import React from 'react'
import { Switch, Route } from 'react-router-dom';
import RolesLists from '../../config/roles';
import Home from '../../pages/Home'

function PrivateRoutes(props) {
    const role = props.role || "GUEST";
    return (
        <>
            <Switch>
                {RolesLists[role].map(({ path, page: PageComponent }, idx) =>
                    <Route key={idx} exact path={path}>
                        <PageComponent setRole={props.setRole} />
                    </Route>)}
                {/* <Redirect to="/" /> */}
                {/* <Route path="*" component={Home}></Route> */}
            </Switch>
        </>
    )
}

export default PrivateRoutes
