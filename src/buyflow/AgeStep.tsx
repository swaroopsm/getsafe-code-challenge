import React, { useState } from 'react'

interface AgeStepProps {
  onNext: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext }) => {
  const [age, setAge] = useState(0)

  const handleFormSubmit = () => onNext('age', age)

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="age">Age:</label>{' '}
        <input
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
