import React,{useState,useEffect} from 'react';

import Axios from 'axios';

function Form(){

  //For Insert
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const insert=()=>{
    //console.log(foodName + days);
    Axios.post("http://localhost:8000/insert",{
      name:name,
      email:email,
    
    });
  };
  //Getting data from the database code is here
  const [studentDetails,setStudentDetails]=useState([]);
  useEffect(()=>{
   Axios.get("http://localhost:8000/read").then((response)=>{
    setStudentDetails(response.data);
   })
  },[]);
  //Here i have written the update code for this project
  const [newName,setNewName]=useState("");
  const [newEmail,setNewEmail]=useState("");
  //
 const updatedStudent=(id)=>{
  Axios.put("http://localhost:8000/update",{
    id:id,
    newName:newName,
    newEmail:newEmail,
  });
 };
//Delete  Code is given below
const deleteStudent=(id)=>{
  Axios.delete(`http://localhost:8000/delete/${id}`,{
    id:id,
    newName:newName,
    newEmail:newEmail,
  });

 };
// the search result
   const [foundUsers, setFoundUsers] = useState(studentDetails);

   const filter = (e) => {
     const keyword = e.target.value;
 
     if (keyword !== '') {
       const results = studentDetails.filter((user) => {
         return user.name.toLowerCase().startsWith(keyword.toLowerCase()) || user.email.toLowerCase().startsWith(keyword.toLowerCase());
         // Use the toLowerCase() method to make it case-insensitive
       });
       setFoundUsers(results);
     } else {
       setFoundUsers(studentDetails);
       // If the text field is empty, show all users
     }
 
     setName(keyword);
   };
 
  

  //

  
  return(
     <div>
     
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
           
              <span className="user-name">{user.name}</span>
              <span className="user-name">{user.email}</span>
       
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
  
    
<form>
  <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
  <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
  <input type="submit" name="submit" onClick={insert} />
</form>
<h1>student details</h1>
{studentDetails.map((val,key)=>{
  return(
    <div key={key} className="food">
      {/* <h5>{val.name}</h5>
      <h5>{val.email}</h5> */}
      <form>
  <input type="text" name="name" placeholder={val.name} onChange={(e)=>setNewName(e.target.value)}/>
  <input type="text" name="email" placeholder={val.email} onChange={(e)=>setNewEmail(e.target.value)}/>
  <button onClick={()=>updatedStudent(val._id)}>Update</button>
  <button onClick={()=>deleteStudent(val._id)}>Delete</button>
       
</form>

    </div>
  )
})}
    </div>
  );
}
export default Form;