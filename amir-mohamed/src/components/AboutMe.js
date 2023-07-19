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
          <p className='abouttext'>Hello! I'm Amir Mohamed, a passionate software developer with bootcamp experience in both front-end and back-end development. With a strong foundation in programming and a desire to create impactful solutions, I thrive in the dynamic world of software development.

            During my bootcamp journey, I immersed myself in learning the latest front-end technologies, such as HTML, CSS, and JavaScript. I became proficient in building intuitive user interfaces, crafting engaging web experiences, and ensuring seamless responsiveness across different devices.

            Simultaneously, I dived into the realm of back-end development, where I honed my skills in languages like MongoDb, SQL, Express.js, and Node.js. Through hands-on projects and collaborative coding exercises, I gained practical knowledge in designing and implementing robust server-side architectures, managing databases, and integrating APIs.

            What sets me apart is my ability to bridge the gap between front-end and back-end development. I have a comprehensive understanding of how the two layers interact and collaborate to deliver efficient and visually appealing web applications. Whether it's developing interactive user interfaces or optimizing server performance, I approach each task with a holistic mindset.

            Furthermore, I thrive in collaborative environments, where I can contribute to a team's success through effective communication, problem-solving, and a willingness to learn. I am always eager to tackle new challenges and stay updated with the latest industry trends and best practices.

            In summary, my bootcamp experience in front-end and back-end software development has equipped me with the skills and knowledge to craft innovative solutions. I am excited to contribute my expertise and make a positive impact in the ever-evolving world of technology.</p>

        </Col>
      </Row>
    </Container>



  </>)

}
export default AboutMe;
