import { UpdateCount1Payload } from 'state/memo/reducer/reducers/updateCount1'
import { UpdateCount2Payload } from 'state/memo/reducer/reducers/updateCount2'
import { UpdateCount3Payload } from 'state/memo/reducer/reducers/updateCount3'
import { UpdateCount4Payload } from 'state/memo/reducer/reducers/updateCount4'

export enum ActionType {
  UpdateCount1 = 'UpdateCount1',
  UpdateCount2 = 'UpdateCount2',
  UpdateCount3 = 'UpdateCount3',
  UpdateCount4 = 'UpdateCount4',
}

export type Action =
  | {
      type: ActionType.UpdateCount1
      payload: UpdateCount1Payload
    }
  | {
      type: ActionType.UpdateCount2
      payload: UpdateCount2Payload
    }
  | {
      type: ActionType.UpdateCount3
      payload: UpdateCount3Payload
    }
  | {
      type: ActionType.UpdateCount4
      payload: UpdateCount4Payload
    }
