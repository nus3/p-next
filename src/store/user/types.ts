export type UserState = {
  name: string | null
  age: number | null
  email: string | null
  token: string | null
  history: string[]
  isChecking: boolean
}

export type UpdateUserPayload = {
  name: string | null
  age: number | null
  email: string | null
  token: string | null
  history: string[]
}
export type AddHistoryPayload = string
