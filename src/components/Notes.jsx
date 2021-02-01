import React from "react";
import Note from "./Note";
import NoteAdd from "./NoteAdd";
import 'bootstrap/dist/css/bootstrap.css';

export default class Notes extends React.Component {
    state = {
        notes: [],
    }

    updateNotes = () => {
        fetch(process.env.REACT_APP_API_URL)
            .then(response => response.json())
            .then(data => this.setState({notes: [...data]}));
    }

    componentDidMount() {
        this.updateNotes();
    }

    onAddNote = (noteText) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id:0, content: noteText })
        };
        fetch(process.env.REACT_APP_API_URL, requestOptions)
            .then(response => response)
            .then(body => {
                console.log(body)
                this.updateNotes();
            });
    }

    onDelete = (id) => {
        const requestOptions = {
            method: 'DELETE',
        };
        fetch(`${process.env.REACT_APP_API_URL}/${id}`, requestOptions)
            .then(response => response)
            .then(body => {
                console.log(body)
                this.updateNotes();
            });
    }

    render() {
        return <div>
            <h1>Notes<button className="fa fa-times" onClick={() => this.updateNotes()}>Reload</button></h1>
            {this.state.notes.map((note) => <Note key={note.id} id={note.id} onDelete={this.onDelete}>{note.content}</Note>)}
            <NoteAdd onAdd={this.onAddNote}/>
        </div>
    }
}
