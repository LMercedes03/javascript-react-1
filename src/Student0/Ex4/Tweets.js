import React from 'react'
import { Tweet } from './Tweet'
import { useState } from 'react'
import './Tweets.scss'

export const Tweets = () => {
  let [counter, setCounter] = useState(0);

  const onHandlePush = () => {
    setCounter(++counter)
  }

  return (
    <div className="Tweets">
        <div>Total Likes: {counter}</div>
        <Tweet message="It's payday!!!"             color="green"  onHandlePush={() => onHandlePush()}/>
        <Tweet message="I just bought a new car!"   color="yellow" onHandlePush={() => onHandlePush()}/>
        <Tweet message="I just smashed my new car." color="red"    onHandlePush={() => onHandlePush()}/>
    </div>
  )
}