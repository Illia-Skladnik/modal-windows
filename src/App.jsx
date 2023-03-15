import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

import { Auth } from "./components/Auth/Auth";
import { AuthFree } from "./components/AuthFree/AuthFree";
import { Registration } from "./components/Registration/Registration";
import './App.scss'

const App = () => {
  

  const [showAuth, hideAuth] = useModal(() => (
    <ReactModal isOpen>
      <p>{<Auth/>}</p>
      <button onClick={hideAuth}>Hide modal</button>
    </ReactModal>
  ));

  const [showAuthFree, hideAuthFree] = useModal(() => (
    <ReactModal isOpen>
      <p>{<AuthFree/>}</p>
      <button onClick={hideAuthFree}>Hide modal</button>
    </ReactModal>
  ));

  return (
    <>
      {/* <Auth/> */}
      <button onClick={showAuth}>Show Auth</button>
      <button onClick={showAuthFree}>Show AuthFree</button>
  
      {/* <Registration
        operationType={operationType}
      /> */}
    </>
  );
};

export default App;
