import { createContext } from 'react'

import { ContextTemplate } from 'components/templates/context'

export const ThemeContext = createContext('light')

const ContextPage = (): JSX.Element => (
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
