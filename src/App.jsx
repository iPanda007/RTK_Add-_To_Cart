import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotals } from "./store/reducers/cart";
import View from "./view";


function App() {
  
  const {cartItems} = useSelector((state)=> state.cart)

 const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(calculateTotals())

  },[cartItems])


  return <>
      <View/> 
  </>
}
export default App;
