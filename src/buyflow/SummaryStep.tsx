import React from 'react'
import { Link } from 'react-router-dom'

import { BuyFlowInput } from './types'

interface SummaryStepProps {
  collectedData: BuyFlowInput
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>First Name: {props.collectedData.name.first}</div>
      <div>Last Name: {props.collectedData.name.last}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
