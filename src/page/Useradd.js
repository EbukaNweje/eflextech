import React, { useState } from 'react'
// import Img from "./asset/user.gif" 
import Logo from "../asset/Et.jpg" 
import FunctionService from "../services/Function";
import { Alert } from "react-bootstrap";
import { useNavigate  } from "react-router-dom"

const Useradd = ({ id, setFormId }) => {
    const hist = useNavigate();

    // const [val, setVal] = useState(Img)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [text, setText] = useState('')
    // const [avater, setAvater] = useState('')
    // const [check, setCheck] = useState(false)
    const [message, setMessage] = useState({ error: false, msg: "" });
    
    // const setval = (event)=> {
    //     const File = event.target.files[0]
    //     const Any = URL.createObjectURL(File)
    //     setVal(Any)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (name === "" || email === "" || phone === "" || address === "" || text === "") {
          setMessage({ error: true, msg: "All fields are mandatory!" });
          return;
        }
        const AllData = {
            // val,
            name,
            email,
            phone,
            address,
            text,
            avater: name.charAt(0)
        }
        console.log(AllData);
    
        try {
          if (id !== undefined && id !== "") {
            await FunctionService.updateForm(id, AllData);
            setFormId("");
            setMessage({ error: false, msg: "Updated successfully!" });
            console.log(message)
          } else {
            await FunctionService.addForm(AllData);
            setMessage({ error: false, msg: "Added successfully!" });
            console.log(message)
          }
        } catch (err) {
          setMessage({ error: true, msg: err.message });
          console.log(message)
        }
    
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setText("");
      };
    
    //   const editHandler = async () => {
    //     setMessage("");
    //     try {
    //       const docSnap = await FunctionService.getForm(id);
    //       console.log("the record is :", docSnap.data());
    //       setName(docSnap.data().name);
    //       setEmail(docSnap.data().email);
    //       setPhone(docSnap.data().phone);
    //       setAddress(docSnap.data().address);
    //       setText(docSnap.data().text);
    //     //   setVal(docSnap.data().val);
    //     } catch (err) {
    //       setMessage({ error: true, msg: err.message });
    //     }
    //   };
    
    //   useEffect(() => {
    //     console.log("The id here is : ", id);
    //     if (id !== undefined && id !== "") {
    //       editHandler();
    //     }
    //   }, [id]);




// const Register = () =>{
//   if(!name || !email || !phone || !address || !text || !val) {
//         setCheck(true)
//   } else {
//       setCheck(false)
//       console.log(AllData)
//   }
// }
  return (
    <div className='Form_container'>
        <section className='Form_Head'>
            <img src= {Logo} alt="Logo"/>
            <h3 onClick={() => hist('/Registeruser')}>Registration Form</h3>
            <h4>Please fill carefully:</h4>
        </section>
        {/* <section className='Form_Img'>
            <div>
                <img src={val} alt='a'/>
            </div>
            <label for='file'>
                <span className='Upload'>Upload your Image</span>
                <input type='file' id='file' onChange={ setval}   hidden />
            </label>

        </section> */}
        <div className='Form_Div'>
            <label>
                <p>Full Name<span className='Starspan'>*</span></p>
                <input className='Form_Field' type='text' onChange={(event)=> setName(event.target.value)} value={name} placeholder='Surname first' required/>
            </label>
            <label>
                <p>E-mail<span className='Starspan'>*</span></p>
                <input className='Form_Field' onChange={(event)=> setEmail(event.target.value)} value={email} type='email' placeholder='example@email.com ' required/>
            </label>
            <label>
                <p>Phone Number<span className='Starspan'>*</span></p>
                <input className='Form_Field' onChange={(event)=> setPhone(event.target.value)} value={phone} type='number' placeholder='phone Number ' required/>
            </label>
            <label>
                <p>Address<span className='Starspan'>*</span></p>
                <input className='Form_Field' value={address} onChange={(event)=> setAddress(event.target.value)} type='text' placeholder='Your House Address ' required/>
            </label>
        </div>
        <h2 className='Form_Text'>Why Do You Want To Become A Software Developer?</h2>
            <textarea placeholder='share your reason with us' value={text} onChange={(event)=> setText(event.target.value)} rows='10' cols='60'></textarea>
            {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
            <button onClick={handleSubmit} className=' Reg_btn'>Register</button>
            
    </div>
  )
}

export default Useradd