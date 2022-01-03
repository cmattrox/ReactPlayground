import { send, init }from 'emailjs-com';
import { useState } from 'react';
import apiKey from '../emailkey';
import '../App.css';

function ContactBody() {
    init(apiKey.USER_ID);
    
    const [toSend, setToSend] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            apiKey.SERVICE_ID,
            apiKey.TEMPLATE_ID,
            toSend,
            apiKey.USER_ID
        )
        .then((response) => {
            alert("Message sent, I will get back to you as soon as I can!");
        })
        .catch((err) => {
            alert("An error occurred, please try again.", err);
        });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value });
    };


    return (
        <main>
            <div className="bg-gray-darker relative w-full h-screen overflow-hidden pt-5 flex justify-center pb-5" id="body">
                <div className="bg-gray-lightest w-4/5 h-full pt-5 rounded">
                    <h1 className="text-gray-darkest text-center text-7xl">Contact Me</h1>
                    <div className="border-gray-darkest border-4 rounded-lg mt-10 mx-20">
                        <form id="contact">
                            <div className="pt-5 grid grid-cols-6 pr-5">
                                <label for="fname" className="col-span-1 text-gray-darkest text-2xl pl-5">First Name: </label>
                                <input type="text" name="fname" id="fname" className="text-gray-darkest text-2xl rounded w-full col-span-5" required/><br/>
                            </div>
                            <div className="pt-5 grid grid-cols-6 pr-5">
                                <label for="lname" className="col-span-1 text-gray-darkest text-2xl pl-5">Last Name: </label>
                                <input type="text" name="lname" id="lname" className="text-gray-darkest text-2xl rounded w-full col-span-5" required/><br/>
                            </div>
                            <div className="pt-5 grid grid-cols-6 pr-5">
                                <label for="phone" className="col-span-1 text-gray-darkest text-2xl pl-5">Phone: </label>
                                <input type="tel" name="phone" id="phone" placeholder="Format: 123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="text-gray-darkest text-2xl rounded w-full col-span-5"/><br/>
                            </div>
                            <div className="grid grid-cols-6 pt-5 pr-5">
                                <label for="email" className="col-span-1 text-gray-darkest text-2xl pl-5">Email: </label>
                                <input type="email" name="email" id="email" className="text-gray-darkest text-2xl rounded w-full col-span-5" required/><br/>
                            </div>
                            <div className="grid grid-cols-6 pt-5 pb-5 h-32 pr-5">
                                <label for="message" className="col-span-1 text-gray-darkest text-2xl pl-5">Message: </label>
                                <textarea type="text" name="message" id="message" className="text-gray-darkest text-2xl rounded w-full col-span-5 p-1" required></textarea><br/>
                            </div>
                            <div className="grid justify-items-end">
                                {/* <input type="submit" value="Submit" className="bg-gray-darker col-span-1 text-gray-lightest rounded p-2 m-5"/> */}
                                <button className="bg-gray-darker col-span-1 text-gray-lightest rounded p-2 m-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default ContactBody;