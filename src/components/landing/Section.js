import React from 'react';
import step1 from '../../img/1.png';
import step2 from '../../img/2.png';
import step3 from '../../img/3.png';
import step4 from '../../img/4.png';



const Section = () => {
    return (
        <section className="row">

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <a href="https://facebook.github.io/react" target="_blank">
                        <img src={step1} className="card-img-top img-fluid" alt="step 1"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Step 1</h3>
                        <p>Sign contract with your local experience providers.</p>
                    </div>
                </div>
            </div>


            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <a href="https://github.com/facebookincubator/create-react-app" target="_blank">
                        <img src={step2} className="card-img-top img-fluid" alt="step 2"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Step 2</h3>
                        <p>Add them to your system.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <a href="https://reacttraining.com/react-router" target="_blank">
                        <img src={step3} className="card-img-top img-fluid" alt="step 3"/>
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Step 3</h3>
                        <p>Enable at least 3 of them in your system.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <a href="http://v4-alpha.getbootstrap.com" target="_blank">
                    <img src={step4} className="card-img-top img-fluid" alt="step 4" />
                    </a>
                    <div className="card-block">
                        <h3 className="card-title">Step 4</h3>
                        <p>Receive a commission fee for every click.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};



export default Section;
