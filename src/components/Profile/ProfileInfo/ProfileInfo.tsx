import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://static.tildacdn.com/tild3939-3635-4064-a335-386461613361/social-network-app.png"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src="src/components/Profile/Profile" alt=""/>
                ava + descr
            </div>
        </div>
    );
};