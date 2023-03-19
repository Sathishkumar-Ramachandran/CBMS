
import { useState } from "react";
import MyModalFilter from "./MyModalFilter";
import { IoFilterOutline } from "react-icons/io5";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1></h1>
      <div className="text-center">
        
          <IoFilterOutline  className="mybutton" onClick={() => {
            console.log("button click");
            setShowModal(!showModal);
          }}/>
       
      
        <MyModalFilter showModal={showModal} setShowModal={setShowModal} />

      </div>
    </div>
  );
}
