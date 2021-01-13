export type User = {
  name: string | null
  age: number | null
  email: string | null
  token: string | null
  history: string[]
}

export type UserState = {
  user: User
}

export type UpdateUserPayload = User
export type AddHistoryPayload = string
