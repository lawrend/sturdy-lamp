import React, {Component} from 'react';
import CheckerInputForm from '../../components/checker/CheckerInputForm.js';
import CheckerResultsContainer from './CheckerResultsContainer.js'
import {Link} from 'react-router-dom';
import '../../css/ingredients-checker.css';

class IngredientsCheckerHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingToCheck: "",
    }
  }
  handleChange = (e) => {
    this.setState({ingToCheck: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <div className="ingredients-checker-container">
        <CheckerInputForm ingToCheck={this.state.ingToCheck} onSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <CheckerResultsContainer results={this.state.ingToCheck.toLowerCase().split(', ')}/>
        <Link to="/">home</Link>
      </div>
      )
  }
}

export default IngredientsCheckerHome;

