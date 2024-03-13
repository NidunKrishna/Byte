import { useState,useEffect } from "react";
import{
    Button,
    Num,
    MainContainer
}from './styled'

const Inc=()=>{
    const [score,setScore]=useState(0);
    const onIncrement=()=>(
        setScore(prevScore=>prevScore+1)

    )
    const onDecrement=()=>(
        setScore(prevScore=>prevScore-1)
    )
    useEffect(()=>{
        document.title=`Score=${score}`
    })
    return(
        <MainContainer>
        <Num>{score}</Num>
        <Button onClick={onIncrement}>Increement</Button>
        <Button onClick={onDecrement}>Decrement</Button>
        </MainContainer>
    );
}
export default Inc;