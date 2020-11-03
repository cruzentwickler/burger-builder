import React, { useState, useEffect, useCallback } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axios-order'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/index'

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false)

  const dispatch = useDispatch()
  const ings = useSelector((state) => state.burgerBuilder.ingredients)
  const price = useSelector((state) => state.burgerBuilder.totalPrice)
  const error = useSelector((state) => state.burgerBuilder.error)
  const isAuthenticated = useSelector((state) => state.auth.token !== null)

  const onIngredientAdded = (ingName) =>
    dispatch(actions.addIngredient(ingName))
  const onIngredientRemoved = (ingName) =>
    dispatch(actions.removeIngredient(ingName))
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  )
  const onInitPurchase = () => dispatch(actions.purchaseInit())
  const onSetAuthRedirectPath = (path) =>
    dispatch(actions.setAuthRedirectPath(path))

  useEffect(() => {
    onInitIngredients()
  }, [onInitIngredients])

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    return sum > 0
  }

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true)
    } else {
      onSetAuthRedirectPath('/checkout')
      props.history.push('/auth')
    }
  }

  const pusrchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    onInitPurchase()
    props.history.push('/checkout')
  }

  const disabledInfo = {
    ...ings,
  }

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  let orderSummary = null
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />

  if (ings) {
    burger = (
      <>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded} // *  I alrady passt the Ingredient in the child component, for that reason i dont convert the component in a arrow function
          ingredientRemove={onIngredientRemoved} // * I alrady passt the Ingredient in the child component, for that reason i dont convert the component in a arrow function
          disabled={disabledInfo}
          price={price}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
        />
      </>
    )

    orderSummary = (
      <OrderSummary
        ingredients={ings}
        purchaseCancelled={pusrchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        price={price}
      />
    )
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={pusrchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  )
}

export default withErrorHandler(BurgerBuilder, axios)
