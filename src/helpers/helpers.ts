import { Card, interfaceAction } from '../interface/interfaces';

export const updateData = (newData:Card[]) => {
  return {
    type: 'UPDATE_DATA',
    payload: newData,
  };
};

export const paginationConfig = {
  pageSize: 5,
};

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 10) + 1;
}
