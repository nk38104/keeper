import React, { useState } from "react";
import "./CreateArea.css";


const CreateArea = ({ addNote }) => {
    const initNoteState = {
        title: "",
        content: ""
    };

    const [note, setNote] = useState(initNoteState);

    const handleElementChange = (event) => {
        const { name, value } = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    const handleSubmitNote = (event) => {
        if(note.title.length && note.content.length) {
            addNote(note);
            setNote(initNoteState);
        }
        
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleElementChange} name="title" placeholder="Enter note title here..." value={note.title}/>
                <textarea onChange={handleElementChange} name="content" placeholder="Enter note content here..." rows="3" value={note.content}/>
                <button onClick={handleSubmitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
