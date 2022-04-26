export const getData = (lists) => {
    return {
      type: 'GET_DATA',
      payload: lists,
    };
  };