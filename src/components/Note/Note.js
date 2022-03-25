import React from "react";
import "./Note.css";

const Note = ({ note }) => {    
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button>Delete</button>
        </div>
    );
};

export default Note;