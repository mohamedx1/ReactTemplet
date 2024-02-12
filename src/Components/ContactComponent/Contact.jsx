import React from 'react';
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <div className="contact">
                <form className="w-50 p-3 mx-auto mt-5 my-form ">
                    <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                    <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                    <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                    <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" />
                    <button className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button></form>
            </div>
        </>

    );
}

export default Contact;
