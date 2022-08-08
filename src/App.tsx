import React from 'react';
import {SelectCompanyRelation} from "./components/SelectCompanyRelation";
import {SelectCompanyPosition} from "./components/SelectCompanyPosition";
import style from "./App.module.css"
import {TextInput} from "./components/TextInput";
import {TextArea} from './components/TextArea';
import {Form} from "antd";

function App() {

    return (
        <Form>
            <div className={style.App}>
                <SelectCompanyRelation/>
                <SelectCompanyPosition/>
                <TextInput/>
                <TextArea/>
            </div>
        </Form>
    )
}

export default App;
