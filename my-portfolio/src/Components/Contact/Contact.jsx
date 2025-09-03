import React from 'react'
import './Contact.css'


const Contact = () => {
     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ff65238d-73e4-461e-963e-e04aec32e09b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Success", res);
    }
  };
    return (
        <div>
            <div className="container-contact" id='contact'>
                <h2>Let's Talk</h2>
                <div className="contact">
                    <div className="contact-left">
                        <div className='text'>
                            <p>Excited to work on innovative projects and open to full-time opportunities—let’s build something amazing together.
                        </p>
                        </div>
                        <div className='ph-mail'>
                            <p><i className="fa-solid fa-phone"></i><b>6526562827</b></p>
                        </div>
                        <div className='ph-mail'>
                            <p><i className="fa-solid fa-envelope"></i><b>gayathri5611416@gmail.com</b></p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={onSubmit} className='field'>
                        
                            <label htmlFor="">Your Name</label>
                            <input type="text"  placeholder='Enter your name' />
                        
                            <label htmlFor="">Your Email</label>
                            <input type="email" placeholder='Enter your email' />
                       
                            <label htmlFor="">Write your message here</label>
                            <textarea name="message" rows={4} cols={30} placeholder='Type your message'></textarea>
                            <button type='submit'>Submit now</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact