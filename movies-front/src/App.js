import { Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import Home from "./Pages/Home/Home";
import MovieSingle from "./Pages/MovieSingle/MovieSingle";
import MovieAdd from "./Pages/MovieAdd/MovieAdd";
import NotFound from "./Pages/NotFound";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <Fragment>
      <DefaultLayout>
        <NotificationContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/add" component={MovieAdd} />
          <Route path="/movie/edit/:id" component={MovieSingle} />
          <Route path="*" component={NotFound} />
        </Switch>
      </DefaultLayout>
    </Fragment>
  );
}

export default App;
