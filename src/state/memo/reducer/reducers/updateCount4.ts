import { State } from 'state/memo/reducer/state'

export type UpdateCount4Payload = {
  value: number
}

export const updateCount4 = (
  state: State,
  { value }: UpdateCount4Payload
): State => ({ ...state, count4: value })
