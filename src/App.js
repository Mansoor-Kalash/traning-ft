import React from "react";
import BestBooks from "./BestBooks";
import Header from "./Header";
import Profile from "./Profile";
import Footer from "./Footer";
import Login from "./Login";
import FavBook from "./FavBook";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {!isAuthenticated ? <Login /> : <BestBooks />}

              {/* TODO: if the user is logged in, render the `BestfavBook` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/MyFavorite">
              <FavBook/>
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
