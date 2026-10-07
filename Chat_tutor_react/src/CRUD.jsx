import { useEffect, useState } from "react";
import ContactsShow from './Contacts'

export default function FormFn() {
    const [showPassword, setshowPassword] = useState(false);
    const [CnfshowPassword, setCnfshowPassword] = useState(false);
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email:"",
        password:"",
        cnf_password:""
    })
    const [contact, setContact] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault()
        // setContact(e)
    }

  return (
    <>
        <form onSubmit={formSubmit}>
           <div className="form">
                <div className="row">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" value={form.first_name} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}/>
                </div>
                <div className="row">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" value={form.last_name} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}/>
                </div>
                <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} />
                </div>
                <div className="row">
                <label htmlFor="password">Password</label>
                <div>
                    <div className="password-div"> 
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={form.password} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} />
                        <span onClick={() => setshowPassword(prev => !prev)}> 
                            {
                                showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                    <line x1="2" x2="22" y1="2" y2="22"/>
                                    </svg>
                                ) : (                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                )
                            }
                        </span> 
                    </div>
                </div>
                </div>
                <div className="row">
                <label htmlFor="cnf_password">Confirm Password</label>
                <div>
                    <div className="password-div">
                        <input type={CnfshowPassword ? 'text' : 'password'} id="cnf_password" name="cnf_password" value={form.cnf_password} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}  />
                        <span onClick={() => setCnfshowPassword(prev => !prev)}> 
                            {
                                CnfshowPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                                    <line x1="2" x2="22" y1="2" y2="22"/>
                                    </svg>
                                ) : (                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                )
                            }
                        </span> 
                    </div>
                </div>
                </div>
                <div className="row">
                    <button className="save_btn" type="submit">Save</button>
                    <button className="cncl_btn">Cancel</button>
                </div>
            </div>
        </form>
        <ContactsShow contact={contact}/>
    </>
  );
}
