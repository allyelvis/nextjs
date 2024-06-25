const initialState = {
  sales: [],
};

const posReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SALE':
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    default:
      return state;
  }
};

export default posReducer;
