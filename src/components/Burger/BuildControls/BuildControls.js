import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.module.css'

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <BuildControl label="Cuba" />
    </div>
  )
}

export default BuildControls
