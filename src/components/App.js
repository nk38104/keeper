import React, { useState } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NoteList from './NoteList/NoteList';
import CreateArea from "./CreateArea/CreateArea";
import './App.css';


const App = () => {
	const [notes, setNotes] = useState([]);

	function onAddNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function onDeleteNote(noteId) {
		setNotes((prevNotes) => {
			return prevNotes.filter((_, index) => index !== noteId);
		});
	}

	return (
		<div>
			<Header />
			<CreateArea addNote={onAddNote} />
			<NoteList notes={notes} deleteNote={onDeleteNote} />
			<Footer />
		</div>
	);
}

export default App;
