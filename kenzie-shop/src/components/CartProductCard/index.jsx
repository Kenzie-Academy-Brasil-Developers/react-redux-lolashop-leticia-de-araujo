import { useDispatch } from "react-redux";
import { removeCartThunk } from "../../store/modules/cart/thunk";
import { StyledBox, StyledButton } from "./style";

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickRemoveCart = () => {
    return dispatch(removeCartThunk(product.id));
  };
  return (
    <StyledBox>
      <img src={product.src} alt={product.alt} />
      <div className="CartProductCard-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div className="CartProductCard-price">
        <span className="price">${product.price}</span>
        <StyledButton
          color="primary"
          variant="text"
          size="small"
          onClick={handleClickRemoveCart}
        >
          Remove from cart
        </StyledButton>
      </div>
    </StyledBox>
  );
};

export default CartProductCard;
