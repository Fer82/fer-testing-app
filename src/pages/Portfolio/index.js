import Col from 'react-bootstrap/Col';
import Project from '../../components/Project';

const projects = [
    {
        title: 'H-19-Employee-Directory',
        description: 'This was the nineteenth homework assignment for the full stack web development program at UC Irvine, in which the goal was to build an employee directory application using React.',
        url: 'https://github.com/Fer82/H-19-Employee-Directory',
        image: ''
    },
    {
        title: 'H-18-Progressive-Budget',
        description: 'project 2 description',
        url: 'https://github.com/Fer82/H-18-Progressive-Budget',
        image: ''
    },
    {
        title: 'React-Portfolio',
        description: 'A ReactJS version of my portfolio site utilizing stateless and stateful components.',
        url: 'https://github.com/Fer82/H-20-React-Portfolio',
        image: ''
    },
    {
        title: 'project 4',
        description: 'project 4 description',
        url: '',
        image: ''
    },
    {
        title: 'project 5',
        description: 'project 5 description',
        url: '',
        image: ''
    },
    {
        title: 'project 6',
        description: 'project 6 description',
        url: '',
        image: ''
    },
    {
        title: 'project 7',
        description: 'project 7 description',
        url: '',
        image: ''
    }
];

export default function Portfolio() {
    const projectList = projects.map((p, index) => {
        return (
            <Col key={index} md={4} className='mr-1 mb-3'>
                <Project title={p.title} description={p.description} url={p.url} image={p.image} />
            </Col>
        );
    });

    return (
        <main className="container">
            <section className="row">
                {projectList}
            </section>
        </main>
    )
}