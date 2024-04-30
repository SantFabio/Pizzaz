import * as TodoConstants from "../actions/orderActions";

const initialState = {
  client: {},
  items: [],
  status: "processing",
  paymentMethod: "",
  total: 0, // Total do pedido
  paymentStatus: "pending", // estatus do pagamento
  deliveryMethod: "home delivery", // entrega a domicilio
  deliveryInfo: {
    address: {},
  },
  customerNotes: "", // Customer notes
  paymentDetails: {
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    pixKey: "",
  },
};
const addItemReducer = (state, newItems) => {
  const updatedItems = [...state.items];

  // Itera sobre cada novo item
  newItems.forEach(newItem => {
    // Verifica se o item já existe no estado atual
    const existingItemIndex = state.items.findIndex(item => item.produtoId === newItem.produtoId);

    if (existingItemIndex !== -1) {
      // Se o item já existe, atualiza a quantidade
      updatedItems[existingItemIndex].quantidade += newItem.quantidade;
    } else {
      // Se o item não existe, adiciona-o à lista de itens
      updatedItems.push(newItem);
    }
  });
  // Retorna o novo estado
  return {
    ...state,
    items: updatedItems,
    total: calcTotal(updatedItems),
  };
};
const calcTotal = (updatedItems) => {
  // Verifica se o array de itens está vazio
  if (updatedItems.length === 0) {
    return 0; // Retorna 0 se o array estiver vazio
  }

  // Calcula o total normalmente se houver itens no array
  const prices = updatedItems.map((item) => item.precoUnitario * item.quantidade);
  const totalPrice = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
  return totalPrice;
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoConstants.ADD_ITEM:
      return addItemReducer(state, action.payload);
    case TodoConstants.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.produtoId !== action.payload),
        total: calcTotal(state.items.filter((item) => item.produtoId !== action.payload))
      };
    case TodoConstants.INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.produtoId === action.payload
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        ),
        total: calcTotal(state.items.map((item) =>
          item.produtoId === action.payload
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )),
      };
    case TodoConstants.DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.produtoId === action.payload
            ? { ...item, quantidade: Math.max(0, item.quantidade - 1) }
            : item
        ),
        total: calcTotal(state.items.map((item) =>
          item.produtoId === action.payload
            ? { ...item, quantidade: Math.max(0, item.quantidade - 1) }
            : item
        )),
      };
    case TodoConstants.UPDATE_CLIENT:
      return {
        ...state,
        client: action.payload,
        deliveryInfo: {
          address: action.payload.address,
        }
      };
    case TodoConstants.RESET_CLIENT_STATE:
      return {
        ...state,
        client: action.payload,
        deliveryInfo: {
          address: action.payload,
        }
      };
    case TodoConstants.UPDATE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
