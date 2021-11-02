import React from 'react';
import s from './Music.module.css';

const Music =(props)=> {
    let name = ['Igor', 'Kolya','Mark'];
    let newName=name.map((el)=>{
return <div>Gena{el}</div>;
    });
    return (
<div>
    <span>Hello<br/>world</span>
    {newName}
    </div>
    );
}
export default Music;