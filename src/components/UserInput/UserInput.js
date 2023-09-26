import React, { useState } from "react";
import styles from  "./UserInput.module.css";

const initialUserInput = {
  'current_savings': '',
  'yearly_savings': '',
  'expected_interest': '',
  'duration': '',
};
const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onCalculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) =>{
      return {...prevInput, [input]: value};
    })
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
    props.onResetHandler();
  };
  return (
    <form onSubmit={submitHandler} className={styles['form-controls']}>
      <div className={styles['form-control']}>
        <p>
          <label>Current Saving(₹)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("current_savings", event.target.value)
            }
            id="current_savings"
            value={userInput['current_savings']}
          />
        </p>
        <p>
          <label>Yearly Saving(₹)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("yearly_savings", event.target.value)
            }
            id="yearly_saving"
            value={userInput['yearly_savings']}
          />
        </p>
      </div>

      <div className={styles['form-control']}>
        <p>
          <label>Expected Interest(%, Per Year)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("expected_interest", event.target.value)
            }
            min="1"
            step="1"
            id="expected_interest"
            value={userInput['expected_interest']}
          />
        </p>

        <p>
          <label>Investment Duration(Years) </label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            min="1"
            step="1"
            id="duration"
            value={userInput['duration']}
          />
        </p>
      </div>

      <p className={styles['form-control__action']}>
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculator
        </button>
      </p>
    </form>
  );
};

export default UserInput;
