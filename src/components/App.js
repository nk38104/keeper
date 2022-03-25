import React from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NoteList from './NoteList/NoteList';
import CreateArea from "./CreateArea/CreateArea";
import './App.css';


const App = () => {
	return (
		<div>
			<Header />
			<CreateArea />
			<NoteList />
			<Footer />
		</div>
	);
}

export default App;
