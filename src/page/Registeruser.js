import React, {useEffect, useState} from 'react'
import "../CSS/Form.css"
import FunctionService from "../services/Function";
import Logo from "../asset/Et.jpg" 
import { useNavigate  } from "react-router-dom"

const Registeruser = () => {
  const [user, setUser] = useState([]);
  const hist = useNavigate();

  const getUser = async () => {
    const data = await FunctionService.getAllForm();
    console.log(data.docs);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await FunctionService.deleteForm(id);
    getUser();
    window.location.reload()
  };

  console.log(user)
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='RgU'>
      <section className='Form_Head Rgu'>
            <img src= {Logo} alt="Logo" onClick={() => hist('/')}/>
            <h1>Registration User</h1>
        </section>
      <div className='Userd'>
       {
        user.map((props)=>( 
        <div className='CardUSer' key={props.id}>
          <div className='avater'>{props.avater}</div>
          <h4>{props.name}</h4>
          <span>{props.email}</span>
          <span>{props.phone}</span>
          <span>{props.address}</span>
          <span>{props.text}</span>
          <button className='Del'
           onClick={(e) => deleteHandler(props.id)}
          >Delete</button>
      </div>
        ))
       }
      </div>
    </div>
  )
}

export default Registeruser