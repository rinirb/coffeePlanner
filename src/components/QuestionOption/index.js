// Write your code here.
import {Component} from 'react'

import './index.css'

class QuestionOption extends Component {
  state = {selectedItem: null}

  onSelectItem = event => {
    const currentId = parseInt(event.target.id, 10)

    const {questionOption, selectedCategory} = this.props
    this.setState({selectedItem: currentId})
    const currentItemDetails = questionOption.filter(
      eachItem => eachItem.id === currentId,
    )
    const selectedOptionType = currentItemDetails[0].optionTitle
    let selectedCategoryName
    if (currentId <= 2) {
      selectedCategoryName = 'DRINK_TYPE'
    } else if (currentId >= 3 && currentId <= 5) {
      selectedCategoryName = 'COFFEE_TYPE'
    } else if (currentId >= 6 && currentId <= 8) {
      selectedCategoryName = 'QUANTITY'
    } else if (currentId >= 9 && currentId <= 11) {
      selectedCategoryName = 'GRIND_TYPE'
    } else {
      selectedCategoryName = 'DELIVER_TYPE'
    }
    selectedCategory(selectedCategoryName, selectedOptionType)
  }

  render() {
    const {questionOption} = this.props
    const {selectedItem} = this.state
    return (
      <ul className="coffee-planner-question-option-list-container">
        {questionOption.map(eachQuestionOption =>
          eachQuestionOption.id === selectedItem ? (
            <li
              className="coffee-planner-question-option-list-item-selected"
              key={eachQuestionOption.id}
              id={eachQuestionOption.id}
              onClick={this.onSelectItem}
            >
              <div
                className="coffee-planner-question-option-title-container"
                id={eachQuestionOption.id}
              >
                <h1
                  className="coffee-planner-question-option-title-selected"
                  id={eachQuestionOption.id}
                >
                  {eachQuestionOption.optionTitle}
                </h1>
                <img
                  className="coffee-planner-question-option-cup-image"
                  src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png"
                  alt="blue-cup"
                  id={eachQuestionOption.id}
                />
              </div>
              <p
                className="coffee-planner-question-option-description-selected"
                id={eachQuestionOption.id}
              >
                {eachQuestionOption.description}
              </p>
            </li>
          ) : (
            <li
              className="coffee-planner-question-option-list-item"
              key={eachQuestionOption.id}
              id={eachQuestionOption.id}
              onClick={this.onSelectItem}
            >
              <div
                className="coffee-planner-question-option-title-container"
                id={eachQuestionOption.id}
              >
                <h1
                  className="coffee-planner-question-option-title"
                  id={eachQuestionOption.id}
                >
                  {eachQuestionOption.optionTitle}
                </h1>
                <img
                  className="coffee-planner-question-option-cup-image"
                  src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
                  alt="blue-cup"
                  id={eachQuestionOption.id}
                />
              </div>
              <p
                className="coffee-planner-question-option-description"
                id={eachQuestionOption.id}
              >
                {eachQuestionOption.description}
              </p>
            </li>
          ),
        )}
      </ul>
    )
  }
}

export default QuestionOption
