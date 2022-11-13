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
}

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Vova"}/>
                <DialogItem id={2} name={"Lesha"}/>
                <DialogItem id={3} name={"Ilya"}/>
                <DialogItem id={4} name={"Danil"}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={"hi"}/>
                <MessageItem message={"How are you?"}/>
                <MessageItem message={"Hello"}/>
                <MessageItem message={"How are you today?"}/>
            </div>
        </div>
    );
};