export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

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
export const removeItem = (ID) =>{
  return {
    type: REMOVE_ITEM,
    payload: ID,
  }
}
