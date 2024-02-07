  import PropTypes from 'prop-types'

import { SearchIcon } from '@/shared/ui/Icon/Icon'
import { Input } from '@/shared/ui/Input/Input'

import styles from './Search.module.scss'

export const Search = (props) => {
  const { value, onChange, children } = props

  return (
    <form className={styles.form}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <div className={styles.input_inp}>
        <Input 
          type='search' 
          name='search' 
          placeholder='Search for anything...' 
          value={value}
          onChange={onChange}
        />
      </div>
      {children}
    </form>
  )
}

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
}