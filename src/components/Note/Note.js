import React from "react";
import "./Note.css";

const Note = ({ id, note, onDelete }) => {    
    function handleOnDelete() {
        onDelete(id);
    }

    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={handleOnDelete}>Delete</button>
        </div>
    );
};

export default Note;
