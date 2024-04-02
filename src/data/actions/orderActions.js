export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = (selectedPizza, selectedDrinks) => {
  return {
    type: ADD_ITEM,
    payload: [
              { produtoId: selectedPizza.id, quantidade: 1, precoUnitario: selectedPizza.preco },
               ...selectedDrinks.map(item =>  ({produtoId: item.id, quantidade: 1, precoUnitario: item.preco})) 
            ],
    }
};

