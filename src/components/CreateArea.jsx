import React, { useState } from "react";
import {AddComment as AddCommentIcon} from "@material-ui/icons";
// import AddCommentIcon from '@mui/icons-material/AddComment';
// import {Zoom as ZoomIcon} from "@material-ui/icons";
import Zoom from '@material-ui/core/Zoom';
// import {Fab as defau} from "@material-ui/icons";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        
        <Zoom in ={isExpanded}><button onClick={submitNote}>
          <AddCommentIcon/>
        </button></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
