// import React from 'react'
// import { render } from '../testUtils'
// import Home from 'pages/index'

// describe('Home page', () => {
//   it('matches snapshot', () => {
//     const { asFragment } = render(<Home />, {})
//     expect(asFragment()).toMatchSnapshot()
//   })
// })

import '@jest/globals'

describe('jest 動作確認', () => {
  test('true toBeTruthy', () => {
    expect(true).toBeTruthy()
  })
})
