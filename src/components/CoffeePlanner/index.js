// Write your code here.
import {Component} from 'react'

import './index.css'

import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import QuestionOption from '../QuestionOption'

class CoffeePlanner extends Component {
  state = {
    drinkType: false,
    coffeeType: false,
    quantity: false,
    grindType: false,
    deliverType: false,
    successMessage: false,
    errorMessage: false,
    drinkOptionType: null,
    coffeeOptionType: null,
    quantityOptionType: null,
    grindOptionType: null,
    deliverOptionType: null,
  }

  selectedCategory = (name, optionType) => {
    if (name === 'DRINK_TYPE') {
      this.setState({drinkType: true, drinkOptionType: optionType})
    }
    if (name === 'COFFEE_TYPE') {
      this.setState({coffeeType: true, coffeeOptionType: optionType})
    }
    if (name === 'QUANTITY') {
      this.setState({quantity: true, quantityOptionType: optionType})
    }
    if (name === 'GRIND_TYPE') {
      this.setState({grindType: true, grindOptionType: optionType})
    }
    if (name === 'DELIVER_TYPE') {
      this.setState({deliverType: true, deliverOptionType: optionType})
    }
  }

  showFinalPlan = () => {
    const {drinkType, coffeeType, quantity, grindType, deliverType} = this.state
    if (drinkType && coffeeType && quantity && grindType && deliverType) {
      this.setState({successMessage: true, errorMessage: false})
    } else {
      this.setState({successMessage: false, errorMessage: true})
    }
  }

  render() {
    const {coffeePlannerData} = this.props
    const {
      successMessage,
      errorMessage,
      drinkOptionType,
      coffeeOptionType,
      quantityOptionType,
      grindOptionType,
      deliverOptionType,
    } = this.state
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
          {coffeePlannerData.map(eachCoffeePlannerData => (
            <ul className="coffee-planner-each-question-option-container">
              <CoffeePlannerQuestion
                coffeePlannerQuestion={eachCoffeePlannerData}
                key={eachCoffeePlannerData.id}
              />
              <QuestionOption
                questionOption={eachCoffeePlannerData.optionsData}
                selectedCategory={this.selectedCategory}
              />
            </ul>
          ))}
        </div>
        <button
          className="create-my-plan-button"
          type="button"
          onClick={this.showFinalPlan}
        >
          Create my plan!
        </button>

        {successMessage && (
          <div className="coffee-planner-sucess-error-container">
            <p className="coffee-planner-final-message-text">
              I Drink my coffee as{' '}
              <span className="coffee-planner-selected-message-text">
                {drinkOptionType}
              </span>
              , with a{' '}
              <span className="coffee-planner-selected-message-text">
                {coffeeOptionType}
              </span>{' '}
              type of bean.{' '}
              <span className="coffee-planner-selected-message-text">
                {quantityOptionType}
              </span>{' '}
              ground ala{' '}
              <span className="coffee-planner-selected-message-text">
                {grindOptionType}
              </span>
              , sent to me{' '}
              <span className="coffee-planner-selected-message-text">
                {deliverOptionType}
              </span>
              .
            </p>
          </div>
        )}
        {errorMessage && (
          <div className="coffee-planner-sucess-error-container">
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
