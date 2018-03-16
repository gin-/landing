import React, {Component} from 'react';
import ContactUs from "./ContactUs";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="section hero">
                    <div className="w-container"><h1 className="huge-heading">Blackbird Lab</h1><p
                        className="subtitle">Company
                        description here</p></div>
                </div>
                <div className="section black">
                    <div className="w-container">
                        <div className="title"><h2>Our team</h2><p>The team of young and ambitious professionals at
                            your
                            service</p></div>
                        <div className="team-row w-row">
                            <div className="w-col w-col-4">
                                <div className="team"><img src={placeholder}/>
                                    <div className="text-block team-name">Serhii Ziniuk</div>
                                    <div className="text-block-2 team-position">Developer</div>
                                </div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="team"><img src={placeholder}/>
                                    <div className="text-block team-name">Iurii Drozd</div>
                                    <div className="text-block-2 team-position">PM</div>
                                </div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="team"><img src={placeholder}/>
                                    <div className="text-block team-name">Olena Portnova</div>
                                    <div className="text-block-2 team-position">Quality assurance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section press">
                    <div className="w-container"><h3 className="heading">Our significant partners</h3></div>
                    <div className="container w-container">
                        <div className="press-image-wrapper"/>
                        <div className="press-image-wrapper"><img src={FlippImage} className="press-logo"/></div>
                        <div className="press-image-wrapper"/>
                    </div>
                </div>
                <ContactUs/>
        );
    }
}

export default Footer;