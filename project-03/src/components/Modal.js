function Modal(props) {
  /*function cancelHandler() {
    props.onClick1();
  }*/
  function confirmHandler() {
    props.onClick2();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClick1}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
