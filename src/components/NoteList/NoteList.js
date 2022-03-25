import React from "react";
import Note from "../Note/Note";
import notes from "./data/notes";


const NoteList = () => {
    return (
        notes.map(note => {
            return <Note key={note.key} note={note}/>
        })
    );
}

export default NoteList;
