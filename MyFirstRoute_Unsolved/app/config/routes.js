// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Child1 = require("../components/Child1");
var Child2 = require("../components/Child2");
var Grandchild1 = require("../components/Grandchild1");
var Grandchild2 = require("../components/Grandchild2");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="child1" component={Child1} />
      <Route path="grandchild1" component={Grandchild1} />
      <Route path="child2" component={Child2} />
      <Route path="grandchild2" component={Grandchild2} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>

);
