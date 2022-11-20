import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/MessageItem";

export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessageItemPropsType = {
    message: string
    id: number
}

export const Dialogs = () => {
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

    let dialogsElement = dialogs.map((el) => {
        return (
            <DialogItem id={el.id} name={el.name}/>
        )
    })

    let messagesElement = messages.map((el) => {
        return (
            <MessageItem message={el.message} id={el.id}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};