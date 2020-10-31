import React, {Component} from 'react'; import IngredientsCheckerHome from './containers/checker/IngredientsCheckerHome.js'; import { Link } from 'react-router-dom';
export default class BaseContainer extends Component {
  render() {
    return (
      <div>
        <h1>I SAY!</h1>
        <p>every month i can start from scratch and build up this page. get you better at everything: git, create-react-app, routes, etc.</p>
        <uo>
          <li>this month - design for phone then move up to larger screen</li>
          <li>add random poem generator</li>
          <li>transfer components</li>
          <li>ASYNC API CALLS</li>
        </uo>
        <Link to='/checker'>Checker</Link>
        <p></p>
        <Link to='/poem'>Let's poem this</Link>
      </div>
    );
  }
}
