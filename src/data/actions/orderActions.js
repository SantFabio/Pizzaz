export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = (selectedPizzaID, selectedDrinksIDs) => {
  return {
    type: ADD_ITEM,
    payload: [
              { produtoId: selectedPizzaID, quantidade: 1, precoUnitario: 25.00 },
               ...selectedDrinksIDs.map(item =>  ({produtoId: item, quantidade: 1, precoUnitario: 25.00})) 
            ],
    }
};

