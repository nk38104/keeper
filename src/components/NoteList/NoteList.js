import React from "react";
import Note from "../Note/Note";


const NoteList = ({ notes, deleteNote }) => {
    return (
        notes.map((note, index) => {
            return <Note key={index} id={index} note={note} deleteNote={deleteNote} />
        })
    );
}

export default NoteList;
