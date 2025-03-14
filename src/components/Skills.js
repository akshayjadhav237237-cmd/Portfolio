import '../css/skills.css';
import { Fade, Slide } from 'react-awesome-reveal';
import skills from '../../src/data/skills';
import useInView from '../hooks/useInView';

const Skills = () => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    const path = 'img/icons/cpp.png';
    
    return (
        <div ref={ref} className='skills-container' id="skills">
            <h1 className='skills-head text-gradient'>Skills</h1>
            <div className='skills'>
                <div className='skill'>
                    <h2>Programming</h2>
                    <div className='skill-cards'>
                        {skills.filter(skill => skill.category === 'Programming').map((fSkill, index) => (
                            <div key={fSkill.id} className={`skill-card ${isInView ? `fade-in delay-${index % 4 + 1}` : ''}`}>
                                <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                <p>{fSkill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='skill'>
                    <h2>Web Technologies</h2>
                    <div className='skill-cards'>
                        {skills.filter(skill => skill.category === 'web').map((fSkill, index) => (
                            <div key={fSkill.id} className={`skill-card ${isInView ? `fade-in delay-${index % 4 + 1}` : ''}`}>
                                <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                <p>{fSkill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='skill'>
                    <h2>Database</h2>
                    <div className='skill-cards'>
                        {skills.filter(skill => skill.category === 'database').map((fSkill, index) => (
                            <div key={fSkill.id} className={`skill-card ${isInView ? `fade-in delay-${index % 4 + 1}` : ''}`}>
                                <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                <p>{fSkill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='skill'>
                    <h2>Developer Tools</h2>
                    <div className='skill-cards'>
                        {skills.filter(skill => skill.category === 'tools').map((fSkill, index) => (
                            <div key={fSkill.id} className={`skill-card ${isInView ? `fade-in delay-${index % 4 + 1}` : ''}`}>
                                <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                <p>{fSkill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills