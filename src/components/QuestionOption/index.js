// Write your code here.
import {Component} from 'react'

import './index.css'

class QuestionOption extends Component {
  onSelectItem = () => {
    const {questionOption} = this.props
    const {id} = questionOption
    const currentId = id

    const {totalQuestionOption, selectedCategory} = this.props

    const currentItemDetails = totalQuestionOption.filter(
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
    const {questionOption, selectedOption} = this.props
    const {optionTitle, description} = questionOption

    const isSelectedOption = selectedOption === optionTitle
    const listItemClassName = isSelectedOption
      ? 'coffee-planner-question-option-list-item-selected'
      : 'coffee-planner-question-option-list-item'
    const optionTitleClassName = isSelectedOption
      ? 'coffee-planner-question-option-title-selected'
      : 'coffee-planner-question-option-title'
    const imageUrl = isSelectedOption
      ? 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    const imageAlt = isSelectedOption ? 'white cup' : 'blue cup'
    const descriptionClassName = isSelectedOption
      ? 'coffee-planner-question-option-description-selected'
      : 'coffee-planner-question-option-description'
    return (
      <li className={listItemClassName} onClick={this.onSelectItem}>
        <button className="question-option-button" type="button">
          <span className="coffee-planner-question-option-title-container">
            <span className={optionTitleClassName}>{optionTitle}</span>
            <img
              className="coffee-planner-question-option-cup-image"
              src={imageUrl}
              alt={imageAlt}
            />
          </span>
          <span className={descriptionClassName}>{description}</span>
        </button>
      </li>
    )
  }
}

export default QuestionOption
