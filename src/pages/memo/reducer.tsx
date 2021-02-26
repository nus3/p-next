import { NextPage } from 'next'
import { memo, useCallback, useEffect, useReducer, useState } from 'react'
import { ActionType } from 'state/memo/reducer/action'
import { reducer } from 'state/memo/reducer/reducer'
import { initialState } from 'state/memo/reducer/state'

type ChildProps = {
  count: number
  label: string
  handleClick: () => void
}

const Child = ({ count, label, handleClick }: ChildProps): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`Child${label}がレンダリングされたよ`)
  })

  return (
    <>
      <p>
        Child{label}：{count}
      </p>
      <button
        type="button"
        onClick={() => {
          handleClick()
        }}
      >
        ボタン
      </button>
    </>
  )
}

const ChildMemo = memo<ChildProps>(({ count, label, handleClick }) => {
  return <Child count={count} label={label} handleClick={handleClick} />
})

const Parent: NextPage = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  const handleClick = useCallback(() => {
    // eslint-disable-next-line
    console.log('click button')
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <button
        type="button"
        onClick={() => {
          setParentCount(parentCount + 1)
        }}
      >
        Parent count up
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: ActionType.UpdateCount1,
            payload: {
              value: childState.count1 + 1,
            },
          })
        }}
      >
        Child1 count up
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: ActionType.UpdateCount2,
            payload: {
              value: childState.count2 + 1,
            },
          })
        }}
      >
        Child2 count up
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: ActionType.UpdateCount3,
            payload: {
              value: childState.count3 + 1,
            },
          })
        }}
      >
        Child3 count up
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: ActionType.UpdateCount4,
            payload: {
              value: childState.count4 + 1,
            },
          })
        }}
      >
        Child4 count up
      </button>
      <p>Parent：{parentCount}</p>
      <ChildMemo
        count={childState.count1}
        label="01"
        handleClick={handleClick}
      />
      <ChildMemo
        count={childState.count2}
        label="02"
        handleClick={handleClick}
      />
      <ChildMemo
        count={childState.count3}
        label="03"
        handleClick={handleClick}
      />
      <ChildMemo
        count={childState.count4}
        label="04"
        handleClick={handleClick}
      />
    </div>
  )
}

export default Parent
