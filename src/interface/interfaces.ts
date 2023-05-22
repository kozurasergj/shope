export interface rootState {
  reducerCard: {
    cards: Card[];
  }
}
export interface Card {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  count: number;
  size: {
    width: number;
    height: number;
  },
  weight: string,
  comments: Comment[];
}

export interface EditableCellProps<T> {
  editing: boolean;
  dataIndex: number | string;
  title: string;
  inputType: 'text' | 'number';
  record: T;
  index: number;
  children: React.ReactNode;
}
export interface Comment {
  id: number;
  productId: number;
  description: string;
  date: string;
}

export interface GetCardAction {
  type: string;
  payload: Card[] | [];
}

export interface CardsInterface {
  cards: Card[] | []
}

export interface interfaceAction {
  type: string,
  payload: Card[],
}

export type CardAction = GetCardAction;
