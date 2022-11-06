import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')

  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }

    props.onAddGoal(enteredValue)
    setIsValid(true)
    setEnteredValue('')
  }

  // className={`form-control ${!isValid ? 'invalid' : ''}`}

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${
          !isValid && styles.invalid
          // !isValid ? styles.invalid : ''
        }`}
      >
        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

export default CourseInput
