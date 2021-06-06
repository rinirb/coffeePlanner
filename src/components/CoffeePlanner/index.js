// Write your code here.
import {Component} from 'react'

import './index.css'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

class CoffeePlanner extends Component {
  state = {
    successMessage: false,
    errorMessage: false,
    selectedOptions: ['', '', '', '', ''],
  }

  selectedCategory = (name, optionType) => {
    const {coffeePlannerData} = this.props
    const {selectedOptions} = this.state
    const questionTypeIndex = coffeePlannerData.findIndex(
      eachData => eachData.questionType === name,
    )
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionTypeIndex] = optionType
    this.setState({selectedOptions: [...newSelectedOptions]})
  }

  getSelectedOption = questionType => {
    const {selectedOptions} = this.state
    const {coffeePlannerData} = this.props
    const questionTypeIndex = coffeePlannerData.findIndex(
      eachData => eachData.questionType === questionType,
    )
    return selectedOptions[questionTypeIndex]
  }

  showFinalPlan = () => {
    const {selectedOptions} = this.state
    const isAllOptionsSelected =
      selectedOptions.filter(eachOption => eachOption === '').length === 0

    if (isAllOptionsSelected) {
      this.setState({successMessage: true, errorMessage: false})
    } else {
      this.setState({successMessage: false, errorMessage: true})
    }
  }

  render() {
    const {coffeePlannerData} = this.props
    const {successMessage, errorMessage, selectedOptions} = this.state

    return (
      <div className="coffee-planner-bg-container">
        <div className="create-a-plan-bg-container">
          <div className="create-a-plan-container">
            <h1 className="create-a-plan-heading">Create a Plan</h1>
            <p className="create-a-plan-description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <div className="coffee-planner-question-option-container">
          <ul className="coffee-planner-each-question-option-container">
            {coffeePlannerData.map(eachCoffeePlannerData => (
              <CoffeePlannerQuestion
                coffeePlannerQuestion={eachCoffeePlannerData}
                key={eachCoffeePlannerData.id}
                selectedCategory={this.selectedCategory}
                getSelectedOption={this.getSelectedOption}
              />
            ))}
          </ul>
        </div>
        <button
          className="create-my-plan-button"
          type="button"
          onClick={this.showFinalPlan}
        >
          Create my plan!
        </button>

        {successMessage && (
          <div className="coffee-planner-success-error-container">
            <p className="coffee-planner-final-message-text">
              I Drink my coffee as{' '}
              <span className="coffee-planner-selected-message-text">
                {selectedOptions[0]}
              </span>
              , with a{' '}
              <span className="coffee-planner-selected-message-text">
                {selectedOptions[1]}
              </span>{' '}
              type of bean.{' '}
              <span className="coffee-planner-selected-message-text">
                {selectedOptions[2]}
              </span>{' '}
              ground ala{' '}
              <span className="coffee-planner-selected-message-text">
                {selectedOptions[3]}
              </span>
              , sent to me{' '}
              <span className="coffee-planner-selected-message-text">
                {selectedOptions[4]}
              </span>
              .
            </p>
          </div>
        )}
        {errorMessage && (
          <div className="coffee-planner-success-error-container">
            <p className="coffee-planner-final-message-text">
              Kindly select options for all the questions.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default CoffeePlanner
