import React, { Component } from 'react'
import axios from '../../../axios-order'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.module.css'
import Input from '../../../components/UI/Input/Input'

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
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
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
