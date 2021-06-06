// Write your code here.
import {Component} from 'react'

import './index.css'

import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  render() {
    const {
      coffeePlannerQuestion,
      selectedCategory,
      getSelectedOption,
    } = this.props
    const {questionType, questionTitle, optionsData} = coffeePlannerQuestion
    const selectedOption = getSelectedOption(questionType)

    return (
      <li className="coffee-planner-question-title-container">
        <h1 className="coffee-planner-question-title">{questionTitle}</h1>
        <ul className="coffee-planner-question-option-list-container">
          {optionsData.map(eachItem => (
            <QuestionOption
              totalQuestionOption={optionsData}
              questionOption={eachItem}
              selectedCategory={selectedCategory}
              key={eachItem.id}
              selectedOption={selectedOption}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
