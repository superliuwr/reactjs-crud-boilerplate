import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Partners</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#h" data-toggle="tab">Wake Up! Sydney</a>
                <a className="nav-link" href="#sm" data-toggle="tab">SiteMinder</a>
                <a className="nav-link" href="#tbb" data-toggle="tab">The Booking Button</a>
                <a className="nav-link" href="#em" data-toggle="tab">ExperienceMinder</a>
            </nav>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="h">
                    <h3>Wake Up! Sydney</h3>
                    <p>Best accomadation for backpackers.</p>
                </div>

                <div className="tab-pane" id="sm">
                    <h3>SiteMinder</h3>
                    <p>Attract, Reach and Convert guests with the leading cloud platform for hotels.</p>
                </div>

                <div className="tab-pane" id="tbb">
                    <h3>The Booking Button</h3>
                    <ul>
                        <li>Quick</li>
                        <li>Easy</li>
                        <li>Seamless</li>
                        <li>No Commitment</li>
                    </ul>
                </div>

                <div className="tab-pane" id="em">
                    <h3>ExperienceMinder</h3>
                    <ul>
                        <li>Quick</li>
                        <li>Easy</li>
                        <li>Seamless</li>
                        <li>No Commitment</li>
                    </ul>
                </div>                
            </div>
        </footer>
    );
};



export default Footer;
