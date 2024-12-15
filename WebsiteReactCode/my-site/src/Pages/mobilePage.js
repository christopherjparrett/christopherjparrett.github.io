import '../Mobile.css';
import Sunset from '../SunSetMountains.jpg';
import LLLogo from '../LinkedInLogo.png';
import EmLogo from '../EmailLogo.png';
import PhLogo from '../PhoneIcon.png'
import SkillBar from 'react-skillbars';
import React, {useState,useEffect} from 'react';
import projects from '../Projects';
import { useNavigate } from 'react-router-dom';
const MobilePage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    // Remove the redirection flag so it doesn't redirect again
    navigate('/');
  };
  const skills = [
    { type: 'C', level: 80 },
    { type: 'Python', level: 70 },
    { type: 'Java', level: 60 },
    { type: 'React', level: 60 },
    { type: 'HTML', level: 40 },
  ];
  const [activeSection,setActiveSection] = useState('Home');
  const handleScroll = () => {
    const sections = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
    let currentSection = sections.find(section => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    if (currentSection) {
      setActiveSection(currentSection);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };
  /*This is for our sort feature for projects*/
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);  // New state to track hovered project

  // Function to handle language selection
  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    }
  };

  // Filter projects based on selected languages
  const filteredProjects = selectedLanguages.length === 0
    ? projects
    : projects.filter(project => selectedLanguages.includes(project.language));

  return (
    <>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div class = "overlay">
        <div class="buttons">
            <a
              href="#Home"
              className={activeSection === 'Home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('Home'); }}
            >
              Home
            </a>
            <a
            href="#About"
            className={activeSection === 'About' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('About'); }}
            >
              About
            </a> 
            <a
            href="#Experience"
            className={activeSection === 'Experience' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('Experience'); }}
            >
              Experience
            </a>
            <a
            href="#Projects"
            className={activeSection === 'Projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('Projects'); }}
            >
              Projects
            </a>
            <a
            href="#Contact"
            className={activeSection === 'Contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); }}
            >
              Contact
            </a>
        </div>
    </div>
        <img src={Sunset} class = "background-image" alt = "Picture of mountains during the sunset"></img>
        <div class = "content" id="Home">
                <h1><div class="header-name">
                    Christopher<br></br>
                    Parrett
                </div></h1>
                <h2><div class="Blue-Text">
                    Background image: Rocky Mountains by Christopher Parrett
                </div></h2>
        </div>
    <div id = "About">
        <br></br>
        <br></br>
        <h3>About</h3>
        <h4>Let Me Introduce Myself</h4>
        <body>
            <p class = "introduction">
                Hello! I’m Christopher Parrett, a Computer Science major with a passion for 
                software development and machine learning. 
                I’m excited to be nearing the end of my academic journey, 
                with graduation from the University of Central Florida just a year away.  
                My love for technology drives me to create innovative solutions and explore the endless possibilities of machine learning.
                 I look forward to applying my skills and knowledge in real-world projects and making a meaningful impact in the tech industry.
            </p>
            <div class="container">
            <p class="left-container">
                <div class="CenterText">About Me<br></br></div>
                Name: Christopher Parrett<br></br>
                Location: Florida<br></br>
                Email: christopher.parrett.work@gmail.com<br></br>
                Phone: (904) 829-7394 <br></br>
            </p>
            <p class="right-container">
            <div class="CenterText">Skills<br></br></div>
            <br></br>
            <SkillBar skills={skills}/>
            </p>
            </div>
        </body>
    </div>
    <div id = "Experience"> 
        <body>
            <div class="Region1"> 
              <br></br>
              <h3 style={{marginTop:'40px',color:'white'}}>Experience</h3>
              <div class="container" style={{display:'flex'}}>
              <p class="left-container" style={{height:'350px'}}>
              <h5>Education</h5>
              <ul>
                <li style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px',
                              fontSize: '20px'}}>Creekside High School
                    <p style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px',
                              color: 'white', 
                              fontSize: '20px',
                              textWrap: "normal"}}>
                              I attended Creekside from 2018 to 2022,
                              where I was enrolled in their Cybersecurity
                              program throughout the entire duration 
                              of my studies.</p>
                </li>
                <li style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px', 
                              fontSize: '20px'}}>University of Central Florida
                    <p style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px',
                              color: 'white', 
                              fontSize: '20px',
                              textWrap: "normal"}}>
                              I am currently attending UCF expecting 
                              to get my Computer Science degree two 
                              semesters early at the end of
                              Summer 2025.</p>
                </li>
              </ul>
              </p>
              <p class="right-container">
              <h5>Work Experience</h5>
              <ul> {/*This section is a list for ease of change when I have more positions to list */} 
                <li style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px',
                              fontSize: '20px'}}>Cashier (2021-2022)
                    <p style={{lineHeight: '20px',
                              borderRadius: '0px', 
                              padding: '0px',
                              color: 'white', 
                              fontSize: '20px',
                              textWrap: "normal"}}>
                              I was employed at The Fresh Market as a 
                              cashier where I worked with other team 
                              members to provide the best customer 
                              experience possible. I also collaborated 
                              with other departments during critical 
                              times to help manage workloads and 
                              maintain productivity.</p>
                </li>
              </ul>
              </p>
              </div>

            </div>
        </body>
    </div>
    <div id = "Projects">
        <body>
        <br></br>
        <h3 style={{marginTop:'20px'}}>Projects</h3>
        <div>
      <h2>Filter Projects by Language</h2>
      
      {/* Language Selection (Checkboxes) */}
      <div style={{textAlign:'center',marginBottom:'30px',}}>
        <label>
          <input 
            type="checkbox" 
            value="C" 
            onChange={handleLanguageChange}
          />
          C
        </label>
        <label>
          <input 
            type="checkbox" 
            value="Python" 
            onChange={handleLanguageChange}
          />
          Python
        </label>
        <label>
          <input 
            type="checkbox" 
            value="Java" 
            onChange={handleLanguageChange}
          />
          Java
        </label>
      </div>

      {/* Display filtered projects */}
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            gap: "30px", // Add spacing between items
            justifyContent: "center", // Align to the center
            marginBottom:'50px',
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              return (
                <a
                  key={project.id}
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttons"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "300px", 
                    height: "300px", 
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "inherit",
                    background: "#f0f0f0",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    textAlign: "center",  // Center the text
                    position: "relative", // For positioning the tooltip
                    overflow: "hidden", // Hide anything outside the button
                  }}
                  onMouseEnter={() => setHoveredProjectId(project.id)}  // Set the hovered project id
                  onMouseLeave={() => setHoveredProjectId(null)} // Reset hover on mouse leave
                >
                  <span style={{ fontSize: "24px" }}>
                    {project.icon} {/* Display the project icon */}
                  </span>
                  <div style={{ fontSize: "30px", marginTop: "5px",color:'black' }}>
                    {project.name}
                  </div>

                  {/* Description Tooltip */}
                  {hoveredProjectId === project.id && (
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(0, 0, 0, .9)",
                        color: "white",
                        padding: "5px",
                        width: "100%",  // Fixed width for each button
                        height: "100%", // Fixed height for each button
                        borderRadius: "4px", // Prevent the description from wrapping
                        zIndex: 10, // Ensure the tooltip is above the button
                        opacity: hoveredProjectId === project.id ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        display: 'flex',            /* Enable Flexbox */
                        alignItems: 'center',      /* Vertically center content */
                        justifyContent: 'center',
                      }}
                    >
                      {project.description}
                    </div>
                  )}
                </a>
              );
            })
          ) : (
            <div>No projects found for the selected languages.</div>
          )}
        </div>
      </div>
    </div>
        </body>
    </div>
    <div id = "Contact">
        <body class="Region1" style={{justifyContent: 'center'}}>
            <br></br>
            <h3 style={{marginTop:'30px',color:'white',marginBottom:'30px'}}>Contact</h3>
            <h5>Contact Me Here</h5>
            <div class='container' style={{justifyContent: 'center',alignItems:'center',padding:'0px',display:'flex',flexDirection:'column'}}>
              <div style={{width: '100%', 
                          backgroundColor: '#5b646e',
                          height: '200px',
                          justifyContent: 'center',
                          textAlign: 'center',
                          alignItems:'center'}}>
                          <img src={PhLogo} alt="Logo" style={{maxWidth: '100px',borderRadius:'40px', height: 'auto', display: 'inline-block' }} ></img>
                          <h6 style={{justifyContent:'center'}}>Phone Number</h6>
                          <p style={{textAlign:'center'}}>+1 (904) 829-7394</p>
                          </div>
              <div style={{width: '100%', 
                          backgroundColor: '#5b646e', 
                          height: '200px',
                          justifyContent: 'center',
                          textAlign: 'center',
                          alignItems:'center'}}>
                          <img src={EmLogo} alt="Logo" style={{ maxWidth: '100px',borderRadius: '20px', height: 'auto', display: 'inline-block' }} ></img>
                          <h6 style={{justifyContent:'center'}}>Email Me At</h6>
                          <p style={{textAlign:'center'}}>Christopher.Parrett.work@gmail.com</p>
                          </div>
              <div style={{width: '100%', 
                          backgroundColor: '#5b646e', 
                          height: '200px',
                          justifyContent: 'center',
                          textAlign: 'center',
                          alignItems:'center'}}>
                          <img src={LLLogo} alt="Logo" style={{ maxWidth: '100px',borderRadius: '20px', height: 'auto', display: 'inline-block' }} ></img>
                          <h6 style={{justifyContent:'center'}}>Lets Connect</h6>
                          <p style={{justifyContent:'center',textAlign:'center'}}><a target="_blank" rel="noopener noreferrer" href={'http://www.linkedin.com/in/christopher-parrett-4591452ba'}>My LinkedIn Profile</a></p>
                          </div>
            </div>
             
        </body>
    </div>
</>
  );
};

export default MobilePage;