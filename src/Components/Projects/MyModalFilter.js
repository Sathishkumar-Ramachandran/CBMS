import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import '../../styles/Workspace.css'
export default function MyModal(props) {
  const { showModal, setShowModal, content } = props;

  useEffect(() => {
    // call click outside
  }, []);

  return (
    <div
      className={showModal ? "modal-dialog show" : "modal-dialog"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          
            <IoCloseOutline   className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowModal(false);
            }}/>
          <h4 className="modal-title" id="myModalLabel">
           Project
          </h4>
          
        </div>

        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
