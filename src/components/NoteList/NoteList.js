import React from "react";
import Note from "../Note/Note";


const NoteList = ({ notes, onDelete }) => {
    return (
        notes.map((note, index) => {
            return <Note key={index} id={index} note={note} onDelete={onDelete} />
        })
    );
}

export default NoteList;
