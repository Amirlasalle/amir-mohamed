import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
  return (<>
    <h3 className="text-center section-title">About Me</h3>
    <Container id="aboutme">
      <Row>

        <Col xs={5} md={5}>
          <Image src={process.env.PUBLIC_URL + "/images/ProPic.png"} className="img-fluid proPic" roundedCircle />
        </Col>
        <Col xs={9} md={5}>
          {/* <p className='abouttext'>Hello! I'm Amir Mohamed, a passionate software developer with bootcamp experience in both front-end and back-end development. With a strong foundation in programming and a desire to create impactful solutions, I thrive in the dynamic world of software development.

            During my bootcamp journey, I immersed myself in learning the latest front-end technologies, such as HTML, CSS, and JavaScript. I became proficient in building intuitive user interfaces, crafting engaging web experiences, and ensuring seamless responsiveness across different devices.

            Simultaneously, I dived into the realm of back-end development, where I honed my skills in languages like MongoDb, SQL, Express.js, and Node.js. Through hands-on projects and collaborative coding exercises, I gained practical knowledge in designing and implementing robust server-side architectures, managing databases, and integrating APIs.

            What sets me apart is my ability to bridge the gap between front-end and back-end development. I have a comprehensive understanding of how the two layers interact and collaborate to deliver efficient and visually appealing web applications. Whether it's developing interactive user interfaces or optimizing server performance, I approach each task with a holistic mindset.

            Furthermore, I thrive in collaborative environments, where I can contribute to a team's success through effective communication, problem-solving, and a willingness to learn. I am always eager to tackle new challenges and stay updated with the latest industry trends and best practices.

            In summary, my bootcamp experience in front-end and back-end software development has equipped me with the skills and knowledge to craft innovative solutions. I am excited to contribute my expertise and make a positive impact in the ever-evolving world of technology.</p> */}
          <p className='abouttext'>
            <h5>Educational Backround</h5>
            • Mechanical engineering undergraduate B.S 👨‍🎓<br></br><br></br>

            • Certified full stack software developer 👨‍💻
            <br></br><br></br>
            <h5>Key Skills</h5>
            ♦ JavaScript ♦ HTML ♦ CSS ♦ React
            ♦ Python
            ♦ Rest API
            ♦ MongoDB
            ♦ Gitlab/GitHub
            ♦ MySQL
            ♦ Node.js
            ♦ Test and debug
            ♦ Interpersonal skills
            ♦ Express.js
            ♦ Jquery
            ♦ UX/UI design
            ♦ Project Planning
            ♦ Object Oriented Programming
            ♦ Responsive Web design
            ♦ GraphQL
            ♦ Bootstrap
            ♦ Material UI
            <br></br><br></br>
            <h5>Passions</h5>
            • Engineer who’s always up for some innovation 🤔💡
            <br></br><br></br>
            • Passionate for UI/UX design
            <br></br><br></br>
            • Expert with Solidworks, and Catia
            <br></br><br></br>
            • Skilled in analyzing and designing layouts
            <br></br><br></br>
            • In depth knowledge creating innovative, cost and efficient designs within an engineering environment <br></br><br></br>

            • Adept at identifying the root cause of issues and implementing creative, targeted solutions
            <br></br><br></br>
            • Can create a respectful work environment ✊🏼
            <br></br>
            <br></br>
            • Fan of soccer ⚽️
            <br></br><br></br>
            • Cooking enthusiast 👨‍🍳
            <br></br><br></br>
            • Favorite icecream flavor = 🍓🍦</p>

        </Col>
      </Row>
    </Container>



  </>)

}
export default AboutMe;
