import React, { Component } from 'react'
import axios from '../../../axios-order'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    console.log(this.props.ingredients, this.props.price)

    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Willim Cruz',
        address: {
          street: 'Missionsstrasse 61',
          zipCode: '4055',
          country: 'Switzerland',
        },
        email: 'test@test.com',
      },
      deleveryMethod: 'fastest',
    }

    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({ loading: false })
      })
  }

  render() {
    let form = (
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
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
