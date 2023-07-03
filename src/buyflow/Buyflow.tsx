import React, { useState } from 'react'

import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import NameStep from './NameStep'
import { BuyFlowStep, BuyFlowInput, ProductIds } from './types'

interface BuyflowProps {
  productId: ProductIds
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState<BuyFlowStep>(BuyFlowStep.Email)
  const [collectedData, updateData] = useState<BuyFlowInput>({
    email: '',
    age: 0,
    name: { first: '', last: '' },
  })

  function getStepCallback<TValue>(nextStep: BuyFlowStep) {
    return (field: keyof BuyFlowInput, value: TValue) => {
      updateData({ ...collectedData, [field]: value })
      setStep(nextStep)
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>

      {currentStep === BuyFlowStep.Email && (
        <EmailStep onNext={getStepCallback(BuyFlowStep.Age)} />
      )}

      {currentStep === BuyFlowStep.Age && (
        <AgeStep onNext={getStepCallback(BuyFlowStep.Name)} />
      )}

      {currentStep === BuyFlowStep.Name && (
        <NameStep onNext={getStepCallback(BuyFlowStep.Summary)} />
      )}

      {currentStep === BuyFlowStep.Summary && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default Buyflow

export * from './types'
