import projectsData from "./projects.json"
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Portfolio = () => {
    const [projects] = useState(projectsData)
    console.log(projects)
    return (<>
        <h3 className="text-center section-title">Projects</h3>
    <Container id="projects" className="d-flex flex-wrap justify-content-around ">
        {projects.map((project, key) =>

            <Card key={key} className="m-2 p-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + project.screenshot} />
                <Card.Body>
                    <Card.Title>{project.appname}</Card.Title>
                    <Card.Text>{project.breif}
                    </Card.Text>
                    <Button variant="info"><a href={project.github}>Github</a></Button>  
                    <Button variant="info"><a href={project.deployment}>Deployment</a></Button>
                </Card.Body>
            </Card>
        )}
    </Container>
    </>

    )}

export default Portfolio;
