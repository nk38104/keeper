import React, { useState } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NoteList from './NoteList/NoteList';
import CreateArea from "./CreateArea/CreateArea";
import './App.css';


const App = () => {
	debugger;
	const [notes, setNotes] = useState([]);

	function onNoteAdd(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={onNoteAdd} />
			<NoteList notes={notes} />
			<Footer />
		</div>
	);
}

export default App;
