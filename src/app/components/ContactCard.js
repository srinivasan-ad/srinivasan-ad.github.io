'use client'
export default function ContactCard(props) {
  const {id,name,number} = props.contact;
    return ( 
       <div className="  border-solid border-4 border-grey-400 ">
    <li key={id}>
      <p>
        
      <button className="h-[40px] w-12 bg-red-300 rounded-lg  translate-x-[400px] md:translate-x-[1400px]">del</button>
        <b>{name}</b>
         <br/>
         <br/>
        number : {number}
      </p> 
     
    </li></div>)
  }
  