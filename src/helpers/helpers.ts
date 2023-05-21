export const updateData = (newData: any) => {
  return {
    type: 'UPDATE_DATA',
    payload: newData,
  };
};

export const paginationConfig = {
  pageSize: 5,
};
