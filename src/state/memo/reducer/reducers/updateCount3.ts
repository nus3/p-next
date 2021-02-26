import { State } from 'state/memo/reducer/state'

export type UpdateCount3Payload = {
  value: number
}

export const updateCount3 = (
  state: State,
  { value }: UpdateCount3Payload
): State => ({ ...state, count3: value })
