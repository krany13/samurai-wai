import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export type MessageItemPropsType = {
    message: string
    id: number
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Vova"},
        {id: 2, name: "Lesha"},
        {id: 3, name: "Ilya"},
        {id: 4, name: "Danil"},
    ]

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you today?"},
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Vova"}/>
                {/*<DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>*/}
                {/*<DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>*/}
                <DialogItem id={2} name={"Lesha"}/>
                <DialogItem id={3} name={"Ilya"}/>
                <DialogItem id={4} name={"Danil"}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message} id={messagesData[0].id}/>
                <MessageItem message={messagesData[1].message} id={messagesData[1].id}/>
                <MessageItem message={messagesData[2].message} id={messagesData[2].id}/>
                <MessageItem message={messagesData[3].message} id={messagesData[3].id}/>
            </div>
        </div>
    );
};