import { State } from 'state/memo/reducer/state'

export type UpdateCount2Payload = {
  value: number
}

export const updateCount2 = (
  state: State,
  { value }: UpdateCount2Payload
): State => ({ ...state, count2: value })
