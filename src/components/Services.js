import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AllDevicesImage from '../img/all-devices.png';

class Services extends Component {
    render() {
        return (
            <div>
                {/*<div className="section black">
                    <div className="w-container">
                        <div className="title"><h1>our services</h1>
                            <div className="subtitle">What started as a dorm room project exploded into an internet
                                sensation!
                            </div>
                        </div>
                        <div className="w-row">
                            <div className="w-col w-col-4">
                                <div className="service-block"><h1 className="number">1.</h1><h3
                                    className="service-title">Service one</h3><p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse
                                    varius enim in eros elementum tristique.&nbsp;</p></div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="service-block"><h1 className="number">2.</h1><h3
                                    className="service-title">Service two</h3><p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse
                                    varius enim in eros elementum tristique.&nbsp;</p></div>
                            </div>
                            <div className="w-col w-col-4">
                                <div className="service-block"><h1 className="number">3.</h1><h3
                                    className="service-title">service three</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                                        in
                                        eros elementum tristique.&nbsp;</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section darkgrey">
                    <div className="w-container">
                        <div className="w-row">
                            <div className="w-col w-col-8"><h2>service one</h2><p>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                                quis
                                viverra ornare, eros dolor interdum nulla.</p>
                            </div>
                            <div className="center w-col w-col-4"><img src={AllDevicesImage}
                                                                       className="all-devices-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section darkestgrey">
                    <div className="w-container">
                        <div className="w-row">
                            <div className="w-col w-col-6">
                                <ul className="feature-list no-padding w-list-unstyled">
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis.</div>
                                    </li>
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis
                                            mollis,
                                            diam.
                                        </div>
                                    </li>
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis
                                            mollis.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-col w-col-6"><h2>Service two</h2><p>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                                quis
                                viverra ornare, eros dolor interdum nulla.</p><p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
                                quis
                                viverra ornare, eros dolor interdum nulla.</p></div>
                        </div>
                    </div>
                </div>
                <div className="section darkgrey">
                    <div className="w-container">
                        <div className="w-row">
                            <div className="w-col w-col-6"><h2>Service three</h2><p>Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing
                                elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                                ornare.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius
                                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p></div>
                            <div className="w-col w-col-6">
                                <ul className="feature-list no-padding w-list-unstyled">
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor sit amet</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis.</div>
                                    </li>
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor sit amet</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis
                                            mollis,
                                            diam.
                                        </div>
                                    </li>
                                    <li className="feature-item w-clearfix">
                                        <div className="feature-icon-wrapper"><img
                                            src=""
                                            width={30} className="feature-icon"/></div>
                                        <div className="feature-text title">Lorem ipsum dolor sit amet</div>
                                        <div className="feature-text">Vivamus sollicitudin, felis vitae facilisis
                                            mollis.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="no-pad-section">
                    <div className="w-row">
                        <div className="padded-column picture w-col w-col-6"/>
                        <div className="padded-column w-col w-col-6">
                            <div className="width-limiter"><h2>Also: Rockin' Support</h2><p>Our support is pretty cool.
                                Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum
                                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                                diam
                                libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                                ut
                                sem vitae risus tristique posuere.</p></div>
                            <Link to="/contacts"
                                  className="get-started-link simple">get support now</Link></div>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default Services;