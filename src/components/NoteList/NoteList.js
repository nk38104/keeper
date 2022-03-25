import React from "react";
import Note from "../Note/Note";


const NoteList = ({ notes, onDelete }) => {
    return (
        notes.map(note => {
            return <Note key={note.key} note={note} onDelete={onDelete} />
        })
    );
}

export default NoteList;
