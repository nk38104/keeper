import React from "react";
import "./Note.css";

const Note = ({ id, note, deleteNote }) => {    
    function handleDeleteNote() {
        deleteNote(id);
    }

    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={handleDeleteNote}>DELETE</button>
        </div>
    );
};

export default Note;
