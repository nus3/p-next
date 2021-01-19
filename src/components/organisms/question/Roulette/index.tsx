// import classnames from 'classnames'
import styles from './style.module.scss'

export type RouletteProps = {
  questions: string[]
}

export const Roulette = ({ questions }: RouletteProps): JSX.Element => (
  <ul className={styles.wrap}>
    <div className={styles['item-wrap']}>
      {questions.map((q) => (
        <li key={q} className={styles.item}>
          {q}
        </li>
      ))}
    </div>
  </ul>
)
