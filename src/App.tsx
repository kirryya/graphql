import React from 'react';
import style from './App.module.css';
import {SelectCompanyPosition} from "./components/SelectCompanyPosition";
import {SelectCompanyRelation} from "./components/SelectCompanyRelation";
import {BasicTextFields} from "./components/BasicTextField";
import {Multiline} from "./components/Multiline";

function App() {
    return (
        <div className={style.App}>
            <SelectCompanyRelation/>
            <SelectCompanyPosition/>
            <BasicTextFields/>
            <Multiline/>
        </div>
    );
}

export default App;
