import { State } from 'state/memo/reducer/state'

export type UpdateCount1Payload = {
  value: number
}

export const updateCount1 = (
  state: State,
  { value }: UpdateCount1Payload
): State => ({ ...state, count1: value })
