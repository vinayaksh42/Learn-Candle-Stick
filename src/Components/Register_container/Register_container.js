import React from 'react';
import { useState } from 'react';
import "./Register_container.css";



const RegisterContainer = () => {

    const [userRegistration, setuserRegistration] = useState({
        name: "",
        age: "",
        Gender: "",
        Email: "",
        password:""
    });
    const [records, setRecords] = useState([])
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setuserRegistration({ ...userRegistration, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id : new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
        setuserRegistration({ name:"", age:"", Gender:"", Email:"", password:""})
    }
    return (
        <>
            <form className="form-box" method='POST' onSubmit={handleSubmit}>
                <div className='field1'>
                    <label htmlFor='name'>Full name</label>
                    <input type="text"
                        value={userRegistration.name}
                        onChange={handleInput}
                        name="name" id="name" />
                </div>

                <div className='field2'>
                    <label htmlFor='age'>age</label>
                    <input type="text"
                        value={userRegistration.age}
                        onChange={handleInput}
                        name="age" id="age" />
                </div>

                <div className='field3'>
                    <label htmlFor='Gender'>Gender</label>
                    <input type="text"
                        value={userRegistration.Gender}
                        onChange={handleInput}
                        name="Gender" id="Gender" />
                </div>

                <div className='field4'>
                    <label htmlFor='Email'>Email</label>
                    <input type="text"
                        value={userRegistration.Email}
                        onChange={handleInput}
                        name="Email" id="Email" />
                </div>

                <div className='field5'>
                    <label htmlFor='password'>password</label>
                    <input type="text"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" />
                </div>

                <button type='submit' className='submitbtn'>Register</button>
            </form>

            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div className='showDataStyle' key={curElem.id}>
                                <p>{curElem.name}</p>
                                <p>{curElem.age}</p>
                                <p>{curElem.Gender}</p>
                                <p>{curElem.Email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RegisterContainer