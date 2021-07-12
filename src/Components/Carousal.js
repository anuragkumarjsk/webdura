import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../Style/carousel.css'
import {increment,decrement} from '../Reducers/action'
import {carousel_data} from '../data/datacarousel'
function Carousal() {
    const counter =  useSelector(state =>state.counter)
    const dispatch = useDispatch()
    return (
        <div className="carousel">
                <div className = ".card">
                <img src={carousel_data[counter].image} height="45%" width="80%" alt="something"/>
                </div>
            <div className="controller">
                <div id="c1" onClick={()=>{dispatch(decrement())}}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg></div>
                <div id="c12">
                    <h1>{carousel_data[counter].title}</h1> 
                    <p >{carousel_data[counter].para}</p>
                </div>
                <div id="c2" onClick={()=>{dispatch(increment())}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg></div>    
            </div>
        </div>
    )
}

export default Carousal
