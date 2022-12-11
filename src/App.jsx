import { useEffect } from "react";
import { useSelector } from "react-redux";
import View from "./view";


function App() {
  
  const {cartItems} = useSelector((state)=> state.cart)

  

  return <>
      <View/> 
  </>
}
export default App;
