import React, { useState } from 'react'

export default function Footer() {
    let [set, useset] = useState(true)
    let toggle = set === true ? 'Hide image' : 'View image'

    let handlefunc = () => {
        useset(!set)
    }
    return (
        <div className="footer3">
            <div className="imagine">
                <div className="pick4" style={{ display: set === true ? 'block' : 'none' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzk_T-wBsYocrlVxV4YAESypdKpDrSyRTDaLzmDdOKICt93ZaPfRM_sVofcRbeBHRoRE&usqp=CAU" alt="" />
                </div>
                <button onClick={handlefunc} >{toggle}</button>
            </div>
            <div className='Footer2'>
                <div className="pick3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVzwhs8f46yC4nd36WzlLNcWXXJumByA0Qw&usqp=CAU" alt="Something went wrong" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla quaerat nobis ipsum eos repudiandae repellendus sint aliquam placeat. Doloremque molestias obcaecati ad porro impedit explicabo totam veritatis odio delectus.</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0VukMHvhweHpz1bQyMr5KOwAjeg3vTemiA&usqp=CAU" alt="Sometu=hing went wrong" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla quaerat nobis ipsum eos repudiandae repellendus sint aliquam placeat. Doloremque molestias obcaecati ad porro impedit explicabo totam veritatis odio delectus.</p>
                </div>
                <div className="Footer1">
                    <marquee behavior="" direction="right">These are links of Facebook and visit to out websites. </marquee>
                    <div className="Footer">
                        <div className="contectus">
                            <h1><i class="fa-brands fa-facebook"></i> Facebook</h1>
                            <p><b>Tel</b>: 0123-(456)-785-2</p>
                            <p><b>Address</b>: 1 Hacker Way Menlo Park, CA 94025</p>
                            <input type="email" name="" id="" placeholder='Enter email' /> <br />
                            <input type="password" name="" id="" placeholder='Enter your password' /> <br />
                            <button id='btn-contectus'>Submit</button>
                        </div>
                        <div className="useful">
                            <h2>Usefull links</h2>
                            <ul>
                                <li>ContectUs</li>
                                <li>AboutUs</li>
                                <li>Identify</li>
                                <li>Profile</li>
                                <li>Copyright Information</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="connect">
                            <h2>Connect with us</h2>
                            <ul>
                                <li><i class="fa-brands fa-facebook"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>
                                <li><i class="fa-brands fa-twitter"></i></li>
                                <li><i class="fa-brands fa-linkedin"></i></li>
                                <li><i class="fa-brands fa-youtube"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
