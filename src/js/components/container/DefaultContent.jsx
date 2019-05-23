import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

class DefaultContent extends Component {

    getRoutes(multiLevelRoutes) {
        let routes = [];
        multiLevelRoutes.map((route) => {
            if(route.component) {
                routes.push(route);
            }else {
                routes = routes.concat(route.children);
            }
        })  
        return routes;
    }

  render() {

    const { routes } = this.props;
    const oneLevelRoutes = this.getRoutes(routes);
    
    return (
        <Switch>
            {
                oneLevelRoutes.map((route, idx) => {
                    if(route.component) {
                        return <Route key={idx} exact={route.exact} path={route.path} component={route.component}
                            />
                    }
                })
            }
        </Switch>
    );
  }
}
export default DefaultContent;