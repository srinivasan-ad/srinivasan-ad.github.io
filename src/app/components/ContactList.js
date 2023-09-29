'use client'
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  console.log(props)
  const renderContactList = props.contacts.map((conatct) => {
    return(
      <ContactCard contact = {conatct}></ContactCard>
    )
});
  
    return(
   
      <div className="pt-[540]  h-[500px] w-full bg-gradient-to-r from-pink-200 to-pink-400 ">
   
        <ul >{renderContactList}</ul>
      </div>
      
    );
  }
  