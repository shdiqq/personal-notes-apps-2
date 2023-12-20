import { addActiveNote } from "../../utils";
import CreateNote from "../../contents/dashboard/createNote";
import { useNavigate } from "react-router-dom";

function CreateNotePage() {
  const navigate = useNavigate();

  function onCreateNoteHandler(note) {
    addActiveNote(note);
    navigate('/');
  }

  return(
    <>
      <div className="create-notes" id="buat-catatan">
        <CreateNote createNote={onCreateNoteHandler}/>
      </div>
    </>
  )
}

export default CreateNotePage;