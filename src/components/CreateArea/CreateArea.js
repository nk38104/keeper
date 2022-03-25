import React, { useState } from "react";
import "./CreateArea.css";


const CreateArea = ({ onAdd }) => {
    const initNoteState = {
        title: "",
        content: ""
    };

    const [note, setNote] = useState(initNoteState);

    const handleElementChange = (event) => {
        const elementContent = event.target.value;
        const elementName = event.target.name;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [elementName]: elementContent
            }
        });
    }

    const handleNoteAdd = (event) => {
        onAdd(note);

        event.preventDefault();
        setNote(initNoteState);
    }

    return (
        <div>
            <form>
                <input onChange={handleElementChange} name="title" placeholder="Enter note title here..." value={note.title}/>
                <textarea onChange={handleElementChange} name="content" placeholder="Enter note content here..." rows="3" value={note.content}/>
                <button onClick={handleNoteAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
