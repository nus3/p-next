import { NextPage } from 'next'
import { useCallback, useEffect, useMemo, useState } from 'react'

type ChildProps = {
  count1: number
  handleClick: () => void
}

const Child = ({ count1, handleClick }: ChildProps): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('Childがレンダリングされたよ')
  })

  return (
    <>
      <p>Child1：{count1}</p>
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

// const ChildMemo = memo<ChildProps>(({ count1, handleClick }) => {
//   return <Child count1={count1} handleClick={handleClick} />
// })

// const NothingPropsChild = (): JSX.Element => {
//   const [count, setCount] = useState<number>(0)

//   useEffect(() => {
//     // eslint-disable-next-line
//     console.log('NothingPropsChildがレンダリングされたよ')
//   })

//   return (
//     <div>
//       <p>propがないコンポーネントだよ</p>
//       <button
//         type="button"
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       >
//         NothingPropsChild count up
//       </button>
//       <p>NothingPropsChild：{count}</p>
//     </div>
//   )
// }

const Parent: NextPage = () => {
  const [parentCount, setParentCount] = useState<number>(0)
  const [childCount1, setChildCount1] = useState<number>(0)
  // const [childCount2, setChildCount2] = useState<number>(0)

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Parentがレンダリングされたよ')
  })

  const handleClickCallback = useCallback(() => {
    // eslint-disable-next-line
    console.log(childCount1)
  }, [childCount1])

  // NOTE: useMemoの第二引数にはchildCount2が基本的には入ってるべきでeslint-plugin-react-hooks パッケージの exhaustive-deps ルール入れると多分はじかれる書き方
  const memoChild = useMemo(() => {
    return <Child count1={childCount1} handleClick={handleClickCallback} />
  }, [childCount1, handleClickCallback])

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
          setChildCount1(childCount1 + 1)
        }}
      >
        Child1 count up
      </button>
      {/* <button
        type="button"
        onClick={() => {
          setChildCount2(childCount2 + 1)
        }}
      >
        Child2 count up
      </button> */}
      <p>Parent：{parentCount}</p>
      {/* <ChildMemo count1={childCount1} handleClick={handleClickCallback} /> */}
      {memoChild}
      {/* <NothingPropsChild /> */}
    </div>
  )
}

export default Parent
