import { GET, UPDATE_DATA } from './actionTypes';
import { CardsInterface, interfaceAction } from '../interface/interfaces';


const initialState: CardsInterface = {
  cards: []
}

export const reducerCard = (state: CardsInterface = initialState, action: interfaceAction) => {
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
    default:
      return state;
  }
};
