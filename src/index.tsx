import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: "Vova"},
    {id: 2, name: "Lesha"},
    {id: 3, name: "Ilya"},
    {id: 4, name: "Danil"},
]

let messages = [
    {id: 1, message: "hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Hello"},
    {id: 4, message: "How are you today?"},
]

let posts = [
    {message: "Hi, how are you?", likesCount: 23},
    {message: "It's my first post!!!", likesCount: 45},
    {message: "bla bla", likesCount: 4},
    {message: "dada", likesCount: 11}
]

ReactDOM.render(
    <App posts={posts} />,
    document.getElementById('root')
);