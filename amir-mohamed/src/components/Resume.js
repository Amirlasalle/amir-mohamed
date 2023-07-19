import Container from "react-bootstrap/Container";
// import reume from "./resume.pdf";
// import Button from 'react-bootstrap/Button';

const Resume = ()=> {
    return(<>
     <h3 className="text-center section-title">Resume</h3>
    <Container id='resume' className="d-flex flex-wrap justify-content-around ">
    <iframe
    height="900px"
    width="800px"
    title="resume"
    src="https://docs.google.com/document/d/e/2PACX-1vT6K5Qb4fIBGjqQumFr8v1y8ZNSiWkglkWVGrJVV6TPT-OwcV2mVILUyt_RS8_dR8fS8t53dIDyGxi0/pub?embedded=true"></iframe>
    {/* <a href={resume} download>Download Resume</a>
    <Button variant="info"><a href={resume} download>Download Resume</a></Button> */}
    </Container>
        </>)
}


export default Resume;
