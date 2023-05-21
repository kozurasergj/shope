import { DELETE, GET, UPDATE_DATA } from './actionTypes';
import { Card, GetCardAction } from '@/interface/interfaces';

interface CardInterface {
  cards: Card[] | []
}

const initialState: CardInterface = {
  cards: []
}

export const reducerCard = (state: CardInterface = initialState, action: any) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        cards: action.payload
      };
    case UPDATE_DATA:
      return {
        ...state,
        cards: action.payload
      };
    case DELETE:
      state.cards.filter((_, index) => index !== action.payload)
      console.log(state);
      return {
        ...state,
        cards: state.cards.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
