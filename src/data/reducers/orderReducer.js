import * as TodoConstants from "../actions/orderActions";

const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoConstants.ADD_ITEM:
      if (state) {
        return [...state, ...action.payload];
      } else {
        return [...state, action.payload];
      }

    case TodoConstants.REMOVE_ITEM:
      return state.filter((item) => item.produtoId !== action.payload);

    case TodoConstants.INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.produtoId == action.payload) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          };
        } else {
          return item; // Retorna o item sem modificação se não for o item a ser atualizado
        }
      });
    case TodoConstants.DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.produtoId == action.payload) {
          return {
            ...item,
            quantidade: item.quantidade - 1
          };
        } else {
          return item; // Retorna o item sem modificação se não for o item a ser atualizado
        }
      });
    default:
      return state;
  }
};
export default orderReducer;

// export default pedidoReducer;
// const pedido1 = {
//     id: "id_do_pedido_1", // ID do documento no Firestore (pode ser gerado automaticamente)
//     cliente: {
//       nome: "João",
//       endereco: "Rua XYZ",
//       telefone: "123456789"
//     },
//     itens: [
//       { produtoId: "id_da_pizza", quantidade: 1, precoUnitario: 25.00 },
//       { produtoId: "id_da_bebida", quantidade: 2, precoUnitario: 5.00 }
//     ],
//     status: "em processamento",
//     dataHora: new Date() // Timestamp representando a data e hora do pedido
//   };
