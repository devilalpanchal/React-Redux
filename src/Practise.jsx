import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./Services/Action/Action";
const Practise = () =>  {
  const conataint = useSelector(state => state.data)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h2>Practise Redux</h2>
        <h2>Hello add cart    {conataint}   </h2>
        <button onClick={()=>(dispatch(addCart()))}>add cart</button>
      </div>
    </>
  );
};

export default Practise;
