import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function NoteAdd(props) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        props.onAdd(text);
    }

    return <form>
        <textarea onChange={handleChange}>{text}</textarea>
        <button onClick={onAdd}>Add</button>
    </form>
}
