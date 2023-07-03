export enum BuyFlowStep {
  Email = 'email',
  Age = 'age',
  Name = 'name',
  Summary = 'summary',
}

export interface BuyFlowInput {
  email: string
  age: number
  name: {
    first: string
    last: string
  }
}

export enum ProductIds {
  devIns = 'dev_ins',
}
