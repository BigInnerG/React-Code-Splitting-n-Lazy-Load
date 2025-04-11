import React from 'react'

function ContactPage(){
    
    return(

        <>
        <div id="contactInfo">
            <h2>Contact Info</h2>
            <img 
            src= "images\profilepic.jpg"
            className="contactImg" 
            alt="profile pic" 
            width={220} 
            height={250}
            />
            <ul id="contactList">
                <li>Name: Ka'Den Brown</li>
                <li>Location: Jackson, MS</li>
                <li>Email: kaden.brown@mscodingacademies.org</li>
                <li>Phone number: 601-555-6374</li>
            </ul>


        </div>
        
        </>

    )

}
export default ContactPage