
import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import {addFruit,viderFruit,annuler} from './Actions/actionsFruit'
import './App.css'
import ListFruits2 from './ListFruits2'
export default function App2(props){
    const dispatch=useDispatch()
    const [nomFruit,setNonFruit]=useState('')
    return(<div className='container'>
        <h2>Fruit Manager App</h2>
        <label htmlFor='fruit'>
         <h2><b> Fruit</b></h2></label>
         <input onChange={(e)=>setNonFruit(e.target.value) } id='fruit' value={nomFruit} />
        <button onClick={()=>{dispatch(addFruit(nomFruit));setNonFruit('')}}>Add</button>
        <button onClick={()=>dispatch(annuler())}>Remove</button>
        <ListFruits2/>
        <button onClick={()=>dispatch(viderFruit())}> Clear List</button>
    </div>
    )
}

