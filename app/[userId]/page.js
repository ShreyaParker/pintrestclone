"use client";
import React, {useEffect, useState} from 'react';
import {doc,getDoc, getFirestore} from "firebase/firestore";
import app from "../firebase/firebaseConfig";
import UserInfo from "@/app/components/userInfo";
const Profile = ({params}) => {
    const [userInfo,setUserInfo] = useState(null);

    const db = getFirestore(app);
    useEffect(()=>{
       if(params){
           getUserInfo(params.userId.replace(/%40/g,'@'))
       }
    },[[params]])

    const getUserInfo = async (email) => {
        const docRef = doc(db,'user',email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){

            setUserInfo(docSnap.data())
        }
        else {
            console.log('No such document')
        }
    }

    return (
        <div>
            {
                userInfo ?
                    <UserInfo userInfo={userInfo}/>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

export default Profile;