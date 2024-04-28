import * as TodoConstants from "../actions/orderActions";

const initialState = {
  items: [] // Estado inicial com a propriedade 'items' como um array vazio
};

const orderReducer = (state = initialState, action) => {
  let newItems = null;
  switch (action.type) {
    case TodoConstants.ADD_ITEM:
      newItems = action.payload;

      // Para cada novo item no payload
      newItems.forEach(newItem => {
        // Verifica se o item já está no estado atual
        const existingItemIndex = state.items.findIndex(item => item.produtoId === newItem.produtoId);

        if (existingItemIndex !== -1) {
          // Se o item já estiver no estado, aumenta a quantidade
          state.items[existingItemIndex].quantidade += 1;
        } else {
          // Se o item não estiver no estado, adiciona-o
          state.items.push(newItem);
        }
      });

      // Retorna o novo estado
      return { ...state };
    case TodoConstants.REMOVE_ITEM:
      return { ...state, items: state.items.filter((item) => item.produtoId !== action.payload) };

    case TodoConstants.INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.produtoId === action.payload) {
            return {
              ...item,
              quantidade: item.quantidade + 1
            };
          } else {
            return item; // Retorna o item sem modificação se não for o item a ser atualizado
          }
        })
      };
    case TodoConstants.DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.produtoId === action.payload) {
            return {
              ...item,
              quantidade: item.quantidade - 1
            };
          } else {
            return item; // Retorna o item sem modificação se não for o item a ser atualizado
          }
        })
      };
    default:
      return state;
  }
};
export default orderReducer;
// const pedido1 = {
//     id: "id_do_pedido_1", // ID do documento no Firestore (pode ser gerado automaticamente)
//     cliente: {
//       nome: "João",
//       endereco: "Rua XYZ",
//       telefone: "123456789"
//     },
//     items: [
//       { produtoId: "id_da_pizza", quantidade: 1, precoUnitario: 25.00 },
//       { produtoId: "id_da_bebida", quantidade: 2, precoUnitario: 5.00 }
//     ],
//     status: "em processamento",
//     dataHora: new Date() // Timestamp representando a data e hora do pedido
//   };