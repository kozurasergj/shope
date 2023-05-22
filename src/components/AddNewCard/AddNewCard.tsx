import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'antd';
import { getRandomNumber, updateData } from '../../helpers/helpers';
import { Card, rootState } from '../../interface/interfaces';

const AddNewCard = () => {
  const products = useSelector((state: rootState) => state.reducerCard.cards);
  const dispatch = useDispatch<Dispatch<Card[]>>();

  const addCard = () => {
    if (products.length > 25) return
    const lastProduct = products[products.length - 1];
    const newId = products.length + 1;
    const randomNumber = getRandomNumber();
    const newProducts = [
      {
        ...lastProduct,
        id: newId,
        name: 'New T-short',
        imageUrl: `./${randomNumber}.jpg`,
        price: `$${randomNumber + 15}`,
        count: randomNumber,
      },
      ...products]
    dispatch(updateData(newProducts));
  };

  return (
    <Button
      type="primary"
      style={{ fontSize: '16px', width: "250px", background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./bg.jpg)" }}
      onClick={addCard}
    >
      Add New Card
    </Button>
  );
};

export default AddNewCard;
