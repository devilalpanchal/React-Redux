import { ADD_TO_CART } from "../Constant";
const initialState = {
  cardData: [],
};
export default function cardItems( state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [

 ...StaticRange,
       { cardData: action.data}
      ]
       
      break;
      default:
        return state
  }
}
