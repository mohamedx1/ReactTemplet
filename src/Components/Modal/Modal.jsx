import React from "react";

const Modal = (props) => {
  const { img } = props;
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body ">
                <img src={img} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
