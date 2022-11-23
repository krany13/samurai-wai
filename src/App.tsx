import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType} from "./components/Dialogs/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./components/Profile/MyPosts/MyPosts";

const App = (props: PostType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                    {/*<Route path={"/profile"} component={Profile}/>*/}

                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.dialogs}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    {/*<Route path={"/news"} component={News}/>*/}
                    {/*<Route path={"/music"} component={Music}/>*/}
                    {/*<Route path={"/settings"} component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
