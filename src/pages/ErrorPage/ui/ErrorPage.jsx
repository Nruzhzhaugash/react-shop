import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.scss'
import { ROUTES } from '../../../app/appRouter'

export const ErrorPage = () => {
  return (
    <div className={styles.error_container}>
      <h1>Page not found</h1>
      <Link to={ROUTES.HOME}>
        Back to Home
      </Link>
    </div>
  )
}