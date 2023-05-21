import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'antd';
import { updateData } from '../../helpers/helpers';

const AddNewCard = () => {
  const products = useSelector((state: any) => state.reducerCard.cards);
  const dispatch = useDispatch<Dispatch<any>>();

  const addCard = () => {
    if (products.length > 25) return
    const lastProduct = products[products.length - 1];
    const newId = String(products.length + 1);
    const newImg = `./${newId[1]}.jpg`;
    const newProducts = [
      {
        ...lastProduct, id: newId,
        imageUrl: newImg,
        price: `$${products.length}`,
        count: products.length - 10,
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
