import React from "react";
import "./CreateArea.css";


const CreateArea = () => {
    return (
        <div>
            <form>
                <input name="title" placeholder="Enter note title here..." />
                <textarea name="content" placeholder="Enter note content here..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
