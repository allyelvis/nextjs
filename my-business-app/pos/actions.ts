import axios from 'axios';

export const addSale = (sale) => async (dispatch) => {
  try {
    const res = await axios.post('/api/transactions', sale);
    dispatch({
      type: 'ADD_SALE',
      payload: res.data.data,
    });
  } catch (error) {
    console.error('Error adding sale:', error);
  }
};
