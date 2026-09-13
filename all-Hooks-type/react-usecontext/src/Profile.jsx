 import React from 'react'
import {Data,Data1} from './App';
import { useContext } from 'react';
const Profile = () => {

  const namee = useContext(Data);
  const agee = useContext(Data1);

  return (

    <h1>My name is {namee} and my age is {agee }</h1>

  )
}

export default Profile
