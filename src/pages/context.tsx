import { createContext } from 'react'

import { ContextTemplate } from 'components/templates/context'
import { NextPage } from 'next'

// Contextは別ファイル化した方が良さそう
export const ThemeContext = createContext('light')

const ContextPage: NextPage = () => (
  <>
    <ThemeContext.Provider value="dark">
      <ContextTemplate />
    </ThemeContext.Provider>
    <ThemeContext.Consumer>
      {(theme) => <ContextTemplate themeProp={theme} />}
    </ThemeContext.Consumer>
  </>
)

export default ContextPage
