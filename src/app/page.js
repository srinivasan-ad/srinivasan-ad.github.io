'use client'
import Header from "./components/Header";
import React, { useState,useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";


export default function Home() {
 
  const [contacts,setcontacts] = useState([]) ;
   const addContactHandler = (x) => {
    console.log(x);
    setcontacts([...contacts,x]);
  }
  useEffect(() =>{
   
    if(JSON.parse(localStorage.getItem("LSKEY"))) setcontacts(JSON.parse(localStorage.getItem("LSKEY")));
},[]);
 
  useEffect(() =>{
    localStorage.setItem("LSKEY",JSON.stringify(contacts))
},[contacts]);
  

  return (
    <>
  <Header />
  <AddContact addContactHandler = {addContactHandler} />
  <ContactList contacts = {contacts}/>
  </>



  );
}
