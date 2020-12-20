import { ThemeContext } from 'pages/context'
import { useContext } from 'react'

export type ContextTemplateProps = {
  themeProp?: string
}

export const ContextTemplate = ({
  themeProp,
}: ContextTemplateProps): JSX.Element => {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <p>テーマ: {theme}</p>
      <p>テーマprop: {themeProp}</p>
    </div>
  )
}
