import React from "react";


const CreateArea = () => {
    return (
        <div>
            <form>
                <input name="title" placeholder="Enter note title here..." />
                <textarea name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;