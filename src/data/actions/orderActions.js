export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const RESET_CLIENT_STATE = "RESET_CLIENT_STATE";
export const UPDATE_PAYMENT_METHOD = "UPDATE_PAYMENT_METHOD";
export const RESET_ORDER = "RESET_ORDER";

export const addItem = (selectedPizza, selectedDrinks) => {
  return {
    type: ADD_ITEM,
    payload: [
      {
        produtoId: selectedPizza.id,
        quantidade: 1,
        precoUnitario: selectedPizza.preco,
        nomeProduto: selectedPizza.nome,
        descricao: selectedPizza.descricao,
      },
      ...selectedDrinks.map((item) => ({
        produtoId: item.id,
        quantidade: 1,
        precoUnitario: item.preco,
        nomeProduto: item.nome,
      })),
    ],
  };
};
export const removeItem = (ID) => {
  return {
    type: REMOVE_ITEM,
    payload: ID,
  }
}
export const increaseQuantity = (ID) => {
  return {
    type: INCREASE_QUANTITY,
    payload: ID,
  }
}
export const decreaseQuantity = (ID) => {
  return {
    type: DECREASE_QUANTITY,
    payload: ID,
  }
}
export const updateClient = (clientData) => ({
  type: UPDATE_CLIENT,
  payload: clientData,
});
export const resetClientState = () => ({
  type: RESET_CLIENT_STATE,
  payload: {},
});
export const updatePaymenteMetod = (paymentMethod) => ({
  type: UPDATE_PAYMENT_METHOD,
  payload: paymentMethod,
});
export const resetOrder = () => {
  return {
    type: RESET_ORDER,
  };
};
