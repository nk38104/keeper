import React, { useState } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NoteList from './NoteList/NoteList';
import CreateArea from "./CreateArea/CreateArea";
import './App.css';


const App = () => {
	const [notes, setNotes] = useState([]);

	function onNoteAdd(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function onNoteDelete(noteId) {
		setNotes((prevNotes) => {
			return prevNotes.filter((_, index) => index !== noteId);
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={onNoteAdd} />
			<NoteList notes={notes} onDelete={onNoteDelete} />
			<Footer />
		</div>
	);
}

export default App;
