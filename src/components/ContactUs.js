import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className="section contact-us">
                <div className="w-container"><h1>Getting in touch is easy</h1>
                    <div className="subtitle">We'll get back to you ASAP. No worries.</div>
                    <div className="w-form">
                        <form name="email-form" data-name="Email Form" className="w-clearfix">
                            <input type="text" name="first-name" data-name="First Name" placeholder="First Name"
                                   maxLength={256} required className="field left w-input"/>
                            <input type="text" name="last-name" data-name="Last Name" placeholder="Last Name"
                                   maxLength={256} className="field right w-input"/>
                            <input type="email" name="email" data-name="Email" placeholder="Email Address"
                                   maxLength={256} required className="field w-input"/>
                            <textarea placeholder="What do you need help with?" maxLength={5000} name="comments"
                                      data-name="Comments" required className="field w-input"
                                      defaultValue={""}/>
                            <input type="submit" defaultValue="Send email" data-wait="Please wait..."
                                   className="button contact w-button"/>
                        </form>
                        <div className="success-message big w-form-done"><h2>Thank you for contacting us!</h2>
                            <p>Your
                                submission has been received and we will reply shortly.&nbsp;</p></div>
                        <div className="w-form-fail"><p>Oops! Something went wrong while submitting the form
                            :(</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
