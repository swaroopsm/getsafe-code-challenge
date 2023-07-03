import React, { useState } from 'react'
import { BuyFlowInput } from './types'

interface AgeStepProps {
  onNext: (field: 'age', value: BuyFlowInput['age']) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext }) => {
  const [age, setAge] = useState<BuyFlowInput['age']>(0)

  const handleFormSubmit = () => onNext('age', age)

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="age">Age:</label>{' '}
        <input
          autoFocus
          id="age"
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button>Next</button>
    </form>
  )
}

export default AgeStep
