import { Button } from './index'

export default {
  title: 'atoms/button/Button',
}

export const Default = (): JSX.Element => <Button />
export const IsError = (): JSX.Element => <Button isError={true} />
