import { Reducer } from 'react'
import { Action, ActionType } from 'state/memo/reducer/action'
import { updateCount1 } from 'state/memo/reducer/reducers/updateCount1'
import { updateCount2 } from 'state/memo/reducer/reducers/updateCount2'
import { updateCount3 } from 'state/memo/reducer/reducers/updateCount3'
import { updateCount4 } from 'state/memo/reducer/reducers/updateCount4'
import { State } from 'state/memo/reducer/state'

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.UpdateCount1:
      return updateCount1(state, action.payload)
    case ActionType.UpdateCount2:
      return updateCount2(state, action.payload)
    case ActionType.UpdateCount3:
      return updateCount3(state, action.payload)
    case ActionType.UpdateCount4:
      return updateCount4(state, action.payload)
    default:
      throw new TypeError(`unexpected action. ${action}`)
  }
}
