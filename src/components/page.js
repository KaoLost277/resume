import '..//styles/page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown, faUserGraduate, faUser, faIdCard, faBriefcase, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Page() {
    const navigate = useNavigate();
    const iconemail = <FontAwesomeIcon icon={faEnvelope} />
    const iconArrowDown = <FontAwesomeIcon className='icon' icon={faArrowDown} />
    const iconEducation = <FontAwesomeIcon className='icon' icon={faUserGraduate} />
    const iconfaIdCard = <FontAwesomeIcon className='icon' icon={faIdCard} />
    const iconfabriefcase = <FontAwesomeIcon className='icon' icon={faBriefcase} />
    const iconfaLanguage = <FontAwesomeIcon className='icon' icon={faLanguage} />
    return (
        <div>

            <div className='containers'>
                <div className='part1'>
                    <div className="photoprofix" />
                    <div >
                        <h1 className="text1">Hi,my <br /> name is Kao</h1>
                        <span className="text2">I like to learn new things and <br />develop myrself to have more knowledge.</span>
                    </div>

                </div>
                <button className='buttonemail' id='buttonemail' onClick={() => navigate("/sendemail")}>{iconemail}Hi,kao@gmail.com</button>
                <div className='about'>
                    <span>{iconArrowDown} About</span>
                </div>
                <div className='portfolio'>
                    <div className='introduction'>
                        <p>Portfollio  website is made to present my information.
                            personal record Educational history, academic results, participation in activities and various honor certificates
                            I am very pleased to present <br /> my portfolio.
                            for you to read and saw my abilities
                            thank you  All teachers and all friends who are there to help.
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
                                    <td>Sep 9, 1999 (22 Yrs.)</td>
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
                <div className='WorkExperience'>
                    <span className='spanwork'>{iconfabriefcase} Work Experience/Trainee</span>
                    <br /><br />
                    <div className='work2020'>
                        <p>2020 </p>
                        <p><span>Company in position :</span> &nbsp;&nbsp;THAI ECOTRADE CO.,LTD.</p>
                        <p><span>Last Position :</span> &nbsp;&nbsp;Computer technician</p>
                        <p><span>Period :</span> &nbsp;&nbsp;March 2020 to December 2021</p>
                        <p><span>Salary :</span> &nbsp;&nbsp;15,280 THB</p>
                        <p><span>Address :</span> &nbsp;&nbsp; 37 Soi Thiantalay 24, Bang Khun Thian-Chai Thalay Road,<br /> Thakam, Bangkhunthian, Bangkok, 10150, Thailand</p>
                        <p><span>Job Description :</span> &nbsp;&nbsp;1.Data destruction and wipeing data 100 percent. <br />for example laptop,desktop,server,harddisk and get report as in wiping <br />finish. and then save report data into system ERP.
                            <br />2.Repair laptop,desktop and installOs,software</p>
                    </div>
                    <div className='work2019'>
                        <p>2019 </p>
                        <p><span>Company in position :</span> &nbsp;&nbsp;Index Living Mall Rama 2</p>
                        <p><span>Last Position :</span> &nbsp;&nbsp;Part time</p>
                        <p><span>Period :</span> &nbsp;&nbsp;March 2019 to May 2019</p>
                        <p><span>Salary :</span> &nbsp;&nbsp;13,000 THB</p>
                        <p><span>Address :</span> &nbsp;&nbsp;120/1 Rama 2 Road, Samea Dam, Bang Khun Thian, Bangkok,10150,Thaiand</p>
                        <p><span>Job Description :</span> &nbsp;&nbsp;Sort products and help customers find products.</p>
                    </div>
                    <div className='work2017'>
                        <p>2017</p>
                        <p><span>Company in position :</span> &nbsp;&nbsp;TOT Customer Service Center</p>
                        <p><span>Last Position :</span> &nbsp;&nbsp;Apprentice</p>
                        <p><span>Period :</span> &nbsp;&nbsp;October 2017 to January 2018</p>
                        <p><span>Salary :</span> &nbsp;&nbsp;0 THB</p>
                        <p><span>Address :</span> &nbsp;&nbsp;1691 Suksawat road, Bang Pakok, Rat Burana<br /> Bangkok, 10140.</p>
                        <p><span>Job Description :</span> &nbsp;&nbsp;Onsite set router,switch-hub,ip-phone,mikrotik <br />connect to internet and solve problems for customers to be able <br /> to use the Internet.</p>
                    </div>
                </div>
                <div className='skillsLanguages'>
                    <span>{iconfaLanguage}Skills & Languages</span><br /><br />
                    <table class="center">
                        <tr>
                            <th>Languages</th>
                            <th>Speaking</th>
                            <th>Listening</th>
                            <th>Reading</th>
                            <th>Writing</th>
                        </tr>
                        <tr>
                            <td>Thai</td>
                            <td>Good</td>
                            <td>Excellent</td>
                            <td>Good</td>
                            <td>Good</td>
                        </tr>
                        <tr>
                            <td>English	</td>
                            <td>Medium</td>
                            <td>Medium</td>
                            <td>Medium</td>
                            <td>Medium</td>
                        </tr>
                    </table>
                </div>



            </div>
        </div>
    );
}

export default Page;