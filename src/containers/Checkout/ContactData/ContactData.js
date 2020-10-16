import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: '',
    },
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.Input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail"
            className={styles.Input}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            className={styles.Input}
          />
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            className={styles.Input}
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData
