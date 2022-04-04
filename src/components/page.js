import '..//styles/page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown, faUserGraduate, faUser, faIdCard, faBriefcase, faLanguage, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';

import { useNavigate } from 'react-router-dom';

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function Page() {
    const navigate = useNavigate();
    const iconemail = <FontAwesomeIcon icon={faEnvelope} />
    const iconArrowDown = <FontAwesomeIcon className='icon' icon={faArrowDown} />
    const iconEducation = <FontAwesomeIcon className='icon' icon={faUserGraduate} />
    const iconfaIdCard = <FontAwesomeIcon className='icon' icon={faIdCard} />
    const iconfabriefcase = <FontAwesomeIcon className='icon' icon={faBriefcase} />
    const iconfaLanguage = <FontAwesomeIcon className='icon' icon={faLanguage} />
    const iconfaFolder = <FontAwesomeIcon className='icon' icon={faFolder} />
    const icongithub = <FontAwesomeIcon className='bicon' icon={faGithub} />
    const iconig = <FontAwesomeIcon className='bicon' icon={faInstagram} />
    const iconline = <FontAwesomeIcon className='bicon' icon={faLine} />

    const date = new Date();
    let year = date.getFullYear();
    const HBD = year - 1999;
    return (
        <div>

            <div className='containers'>
                <section >
                    <div className='part1' >
                        <div className="photoprofix" />
                        <div className='boxtext1'>
                            <h1 className="text1">Hi,my <br /> name is Kao.</h1>
                            <span className="text2"><p>I like to learn new things and develop myrself to have more knowledge.</p></span>
                        </div>

                    </div>
                    <div className='conbutton'><button className='buttonemail' id='buttonemail' onClick={() => navigate("/sendemail")}>{iconemail}Hi,kao@gmail.com</button></div>
                </section>
                <section className='container reveal'>
                    <div className='about'>
                        <span>{iconArrowDown} About</span>
                    </div>
                    <div className='portfolio'>
                        <div className='introduction'>
                            <p>Portfollio website is made to present my information.
                                personal record Educational history,results,
                                I am very pleased to present my portfolio.
                                for you to read and saw my abilities
                                Provide advice, support and encouragement for me. until this complete collection of works</p>
                        </div>
                        <div className='part2'>
                            <div className='profile'>
                                <table class="center">
                                    <tr>
                                        <th className='bordertable'><span>{iconfaIdCard} Profile</span></th>
                                    </tr>
                                    <tr>
                                        <td>Name </td>
                                        <td>Sutiipong Surasing</td>
                                    </tr>
                                    <tr>
                                        <td>Nickname</td>
                                        <td>Kao</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td>Birthday</td>
                                        <td>Sep 9, 1999 ({HBD} Yrs.)</td>
                                    </tr>
                                    <tr>
                                        <td>Religion</td>
                                        <td>Buddhism</td>
                                    </tr>
                                    <tr>
                                        <td>Relationships</td>
                                        <td>Single</td>
                                    </tr>
                                    <tr>
                                        <td>Military Status</td>
                                        <td>Completed</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicles with</td>
                                        <td>Motor</td>
                                    </tr>
                                    <tr>
                                        <td>Driver's license</td>
                                        <td>Motor</td>
                                    </tr>
                                    <tr>
                                        <td>Driving Skills</td>
                                        <td>Motor</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='Education'>
                                <table class="center">
                                    <tr>
                                        <th className='bordertable'><span>{iconEducation}Education</span></th>
                                    </tr>
                                    <tr>
                                        <td>Chetupon Commercial College</td>
                                    </tr>
                                    <tr>
                                        <td>Graduation year</td>
                                        <td>2021</td>
                                    </tr>
                                    <tr>
                                        <td>Certificate</td>
                                        <td>High Vocational</td>
                                    </tr>
                                    <tr>
                                        <td>Faculty</td>
                                        <td>Business administration</td>
                                    </tr>
                                    <tr>
                                        <td>Major</td>
                                        <td>Business computer</td>
                                    </tr>
                                    <tr>
                                        <td>GPA</td>
                                        <td>2.77</td>
                                    </tr>
                                    <tr>
                                        <td>Chetupon Commercial College</td>
                                    </tr>
                                    <tr>
                                        <td>Graduation year</td>
                                        <td>2018</td>
                                    </tr>
                                    <tr>
                                        <td>Certificate</td>
                                        <td>Vocational</td>
                                    </tr>
                                    <tr>
                                        <td>Faculty</td>
                                        <td>Business administration</td>
                                    </tr>
                                    <tr>
                                        <td>Major</td>
                                        <td>Business computer</td>
                                    </tr>
                                    <tr>
                                        <td>GPA</td>
                                        <td>2.27</td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
                <section className='container reveal'>
                    <span className='spanwork'>{iconfabriefcase} Work Experience/Trainee</span>
                    <div className='WorkExperience'>

                        <br /><br />
                        <div className='work2020'>
                            <p className='pf'>2020</p>
                            <p><span>Company in position :</span>&nbsp;THAI ECOTRADE CO.,LTD.</p>
                            <p><span>Last Position :</span>&nbsp;Computer technician</p>
                            <p><span>Period :</span>&nbsp;March 2020 to December 2021</p>
                            <p><span>Salary :</span>&nbsp;15,280 THB</p>
                            <p><span>Address :</span>&nbsp;37 Soi Thiantalay 24,Bang Khun Thian-Chai Thalay Road,Thakam, Bangkhunthian, Bangkok, 10150, Thailand</p>
                            <p><span>Job Description :&nbsp;</span>1.Data destruction and wipeing data 100 percent.for example laptop,desktop,server,harddisk and get report as in wiping finish. and then save report data into system ERP.
                                2.Repair laptop,desktop and installOs,software</p>
                        </div>
                        <div className='work2019'>
                            <p>2019 </p>
                            <p><span>Company in position :</span>&nbsp;Index Living Mall Rama 2</p>
                            <p><span>Last Position :</span>&nbsp;Part time</p>
                            <p><span>Period :</span>&nbsp;March 2019 to May 2019</p>
                            <p><span>Salary :</span>&nbsp;13,000 THB</p>
                            <p><span>Address :</span>&nbsp;120/1 Rama 2 Road, Samea Dam, Bang Khun Thian, Bangkok,10150,Thaiand</p>
                            <p><span>Job Description :</span>&nbsp;Sort products and help customers find products.</p>
                        </div>
                        <div className='work2017'>
                            <p>2017</p>
                            <p><span>Company in position :</span>&nbsp;TOT Customer Service Center</p>
                            <p><span>Last Position :</span>&nbsp;Apprentice</p>
                            <p><span>Period :</span>&nbsp;October 2017 to January 2018</p>
                            <p><span>Salary :</span>&nbsp;0 THB</p>
                            <p><span>Address :</span>&nbsp;1691 Suksawat road, Bang Pakok, Rat Burana Bangkok, 10140.</p>
                            <p><span>Job Description :</span>&nbsp;Onsite set router,switch-hub,ip-phone,mikrotik connect to internet and solve problems for customers to be able to use the Internet.</p>
                        </div>
                    </div>


                    <span >{iconfaLanguage} Skills & Languages</span><br /><br />
                    <div className='skillsLanguages'>
                        <table class="tableskill">
                            <tr>
                                <th className='thskill'>Languages</th>
                                <th className='thskill'>Speaking</th>
                                <th className='thskill'>Listening</th>
                                <th className='thskill'>Reading</th>
                                <th className='thskill'>Writing</th>
                            </tr>
                            <tr>
                                <td className='tdskill'>Thai</td>
                                <td className='tdskill'>Good</td>
                                <td className='tdskill'>Excellent</td>
                                <td className='tdskill'>Good</td>
                                <td className='tdskill'>Good</td>
                            </tr>
                            <tr>
                                <td className='tdskill'>English</td>
                                <td className='tdskill'>Medium</td>
                                <td className='tdskill'>Medium</td>
                                <td className='tdskill'>Medium</td>
                                <td className='tdskill'>Medium</td>
                            </tr>
                        </table>
                        <div className='programskill'>

                            <table class="tableskill">
                                <tr>
                                    <th className='thskill'>Programming language</th>
                                    <th className='thskill'>Framework</th>

                                </tr>
                                <tr>
                                    <td className='tdskill'>HTML</td>
                                    <td className='tdskill'>react js</td>
                                </tr>
                                <tr>
                                    <td className='tdskill'>CSS</td>
                                    <td className='tdskill'>node js</td>
                                </tr>
                                <tr>
                                    <td className='tdskill'>javascript</td>
                                    <td className='tdskill'>chakra-ui</td>
                                </tr>
                                <tr>
                                    <td className='tdskill'>SQL</td>
                                    <td className='tdskill'>bootstrap</td>
                                </tr>
                            </table>
                        </div>

                    </div >
                </section>
                <section className='container reveal' >
                    <div></div>
                    <div className='Project' >
                        <a  href='https://positionsimulate.netlify.app/?fbclid=IwAR1aTSK2aJEFdJi88YXnfagS0UT0qB7WmCqJ3MRasmMihaO8nQbgoEXavxo' target="_blank" title='Go to websize'>My website</a>

                        <p> It's a  website to find position size trade future and test position size trade <a href='https://positionsimulate.netlify.app/?fbclid=IwAR1aTSK2aJEFdJi88YXnfagS0UT0qB7WmCqJ3MRasmMihaO8nQbgoEXavxo' target="_blank" title='Go to websize'>web</a></p>

                        <iframe frameborder="0" scrolling="no" src="https://positionsimulate.netlify.app/?fbclid=IwAR2fjJrtLInCmS9Cta-2O59l5wxaUFIz-JrrSvamQ_Fh9YJZ5oYklHFHEcE"></iframe>


                    </div>
                </section>
                <section className='container reveal' id='ct'>
                    <div className='ct'>
                        <h1>Contact Me</h1>
                        <p>If you are looking to hire a product  web developer,
                            <br />i available for work.</p>
                        <button className='bm' id='buttonemail' onClick={() => navigate("/sendemail")}>{iconemail}Hi,kao@gmail.com</button>
                    </div>
                </section>

            </div>
            <div className='footer'>
                <p>Made by kao — Copyright 2022</p>
                <div className='icons'>
                    <a href='https://www.instagram.com/kaollkaol/' target="_blank">{iconig}</a>
                    <a href='https://github.com/KaoLost277' target="_blank">{icongithub}</a>
                    <a href='https://line.me/ti/p/nHk_auKF_F?fbclid=IwAR1hwcuhLtXmBmM8bE0KhBmIHqY3BN5QRoBwVpzCXGy_SYgsCUAWd-s_fFI' target="_blank">{iconline}</a>
                </div>

            </div>
        </div>
    );
}

export default Page;