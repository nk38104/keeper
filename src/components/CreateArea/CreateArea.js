import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./CreateArea.css";


const CreateArea = ({ addNote }) => {
    const initNoteState = {
        title: "",
        content: ""
    };

    const [isExpanded, setIsExpanded] = useState(false);
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
            setIsExpanded(false);
        }

        event.preventDefault();
    }

    return (
        <div>
            <form class="create-form">
                <input onChange={handleElementChange} onClick={() => setIsExpanded(true)} name="title" placeholder="Create new note..." value={note.title} />
                { isExpanded
                 ? <textarea 
                    onChange={handleElementChange}
                    name="content" 
                    placeholder="Add note content..." 
                    rows={isExpanded ? 3 : 1} 
                    value={note.content} />
                    : null
                }
                <Zoom in={isExpanded}>
                    <Fab onClick={handleSubmitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
