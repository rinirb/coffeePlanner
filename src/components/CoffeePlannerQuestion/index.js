// Write your code here.
import {Component} from 'react'

import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {coffeePlannerQuestion} = this.props
    const {questionTitle} = coffeePlannerQuestion

    return (
      <li className="coffee-planner-question-title-container">
        <h1 className="coffee-planner-question-title">{questionTitle}</h1>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
