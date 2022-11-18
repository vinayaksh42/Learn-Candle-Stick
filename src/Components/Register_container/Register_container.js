import React from 'react'
import { useState } from 'react'



const RegisterContainer = () => {

    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
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
        setuserRegistration({ username:"", email:"", phone:"",password:""})
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Fullname</label>
                    <input type="text"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username" />
                </div>

                <div>
                    <label htmlFor='email'>email</label>
                    <input type="text"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email" />
                </div>

                <div>
                    <label htmlFor='phone'>Phone</label>
                    <input type="text"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        name="phone" id="phone" />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="text"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" />
                </div>

                <button type='submit'>Register</button>
            </form>

            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div className='showDataStyle' key={curElem.id}>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone}</p>
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