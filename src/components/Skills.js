import '../css/skills.css';
import { Fade, Slide } from 'react-awesome-reveal';
import skills from '../../src/data/skills';

const Skills = () => {
    const path = 'img/icons/cpp.png';
    return (
        
        <div className='skills-container' id="skills">
            <h1 className='skills-head text-gradient hover-underline-animation'>Skills</h1>
            <div className='skills'>
                <div className='skill'>
                    <h2>Programming</h2>
                        <div className='skill-cards'>
                        {
                            skills.filter(skill =>
                                skill.category === 'Programming'
                            ).map(fSkill => (
                                
                                <div key={fSkill.id} className='skill-card'>
                                    <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                    <p>{fSkill.name}</p>
                                </div>
                            ))
                        }

                        </div>
                    {/* </Fade> */}
                </div>
                <div className='skill'>
                    <h2>Web Technologies</h2>
                    {/* make cards */}
                    <div className='skill-cards'>
                    {
                            skills.filter(skill =>
                                skill.category === 'web'
                            ).map(fSkill => (
                                <div key={fSkill.id} className='skill-card'>
                                    <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                    <p>{fSkill.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='skill'>
                    <h2>Developer Tools</h2>
                    {/* make cards */}
                    <div className='skill-cards'>
                    {
                            skills.filter(skill =>
                                skill.category === 'tools'
                            ).map(fSkill => (
                                <div key={fSkill.id} className='skill-card'>
                                    <img src={require(`../${fSkill.image}`)} alt={fSkill.name}></img>
                                    <p>{fSkill.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills