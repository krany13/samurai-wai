import s from "../Dialogs.module.css";
import React from "react";
import {MessageItemPropsType} from "../Dialog";

export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}