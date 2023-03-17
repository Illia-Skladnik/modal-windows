import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { Auth } from "./components/Auth/Auth";
import { AuthFree } from "./components/AuthFree/AuthFree";
import { Confirmation } from "./components/Confirmation/Confirmation";
import './App.scss'

const App = () => {
  const [showAuth, hideAuth] = useModal(() => (
    <ReactModal
    	isOpen
      className="App__modal-content"
      ariaHideApp={false}
    >
      <Auth/>
      <button onClick={hideAuth}>Hide modal</button>
    </ReactModal>
  ));

  const [showAuthFree, hideAuthFree] = useModal(() => (
    <ReactModal
      isOpen
      className="App__modal-content"
      ariaHideApp={false}
    >
			<AuthFree/>
      <button onClick={hideAuthFree}>Hide modal</button>
    </ReactModal>
  ));

  const [showConfirmation, hideConfirmation] = useModal(() => (
    <ReactModal
      isOpen
      className="App__modal-content"
      ariaHideApp={false}
    >
			<Confirmation/>
      <button onClick={hideConfirmation}>Hide Confirmation</button>
    </ReactModal>
  ));

  return (
    <>
			<button onClick={showAuth}>Show Auth</button>
      <button onClick={showAuthFree}>Show AuthFree</button>
      <button onClick={showConfirmation}>Show Confirmation</button>
    </>
  );
};

export default App;
