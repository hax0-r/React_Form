import React, { useState } from 'react'

export default function Form() {

    const [fn,setFn] = useState("")
    const [ln,setLn] = useState("")
    const [email,setEmail] = useState("")
    const [num,setNum] = useState("")
    const [contact,setContact] = useState("")
    const [additionalContact,setAdditionalContact] = useState("")
    const [info,setInfo] = useState("")

    const form = (e) =>{
        console.log("Name :"  + fn +" "+ ln);
        console.log("Email :"  + email);
        console.log("Phone Number :"  + num);
        console.log("Contact us :"  + contact);
        console.log("Other Number :"  + additionalContact);
        console.log("Information :"  + info);
        e.preventDefault()
    }
    return (
        <>
            <nav>
                <div className="left">
                    <h1>DataHub</h1>
                    <ul>
                        <li><a href="">Solution</a></li>
                        <li><a href="">Resources</a></li>
                        <li><a href="">Company</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                </div>
                <div className="right">
                    <a href="">Connect Us</a>
                    <button>Get a Quote</button>
                </div>
            </nav>

            <section>
                <div className="headData">
                    <p>Contact Us</p>
                    <h1>Work For yourself, not by yourself, with gaspar insurance </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit saepe accusamus dicta aliquid necessitatibus.</p>
                    <div className="btn">
                        <button>Read Me Now</button>
                        <a href="">+92 152345263</a>
                    </div>
                </div>
                <form onSubmit={form}>
                    <div>
                        <input value={fn} type="text" placeholder='First name*' required onChange={(e)=>{
                            setFn(e.target.value)
                        }} />
                        <input value={ln} type="text" placeholder='Last name*' required onChange={(e)=>{
                            setLn(e.target.value)
                        }} />
                        <input value={email} type="email" placeholder='Email address*' required onChange={(e)=>{
                            setEmail(e.target.value)
                        }} />
                        <input value={num} type="number" placeholder='Phone number*' required onChange={(e)=>{
                            setNum(e.target.value)
                        }} />
                        <input value={contact} type="text" placeholder='Best time to contact you?' onChange={(e)=>{
                            setContact(e.target.value)
                        }} />
                        <input value={additionalContact} type="text" placeholder="What's your preferred method of contact? " onChange={(e)=>{
                            setAdditionalContact(e.target.value)
                        }} />
                        <input value={info} type="text" placeholder="Do you have any additional information? " onChange={(e)=>{
                            setInfo(e.target.value)
                        }} />
                        <button>Submit your message</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex similique libero inventore voluptatum quae quia quibusdam voluptatibus labore <a href="">Read more</a></p>
                    </div>
                </form>
            </section>

            
        </>
    )
}
