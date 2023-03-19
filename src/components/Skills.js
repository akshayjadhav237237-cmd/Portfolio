import '../css/skills.css';

const Skills = () => {
    return (
        <div className='skills-container' id="skills">
            <h1 className='skills-head text-gradient hover-underline-animation'>Skills</h1>
            <div className='skills'>
                <div className='skill'>
                    <h2>Programming</h2>
                    <div className='skill-cards'>
                        <div className='skill-card'>
                            <img src={require('../img/icons/c.png')} alt='html'></img>
                            <p>C</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/cpp.png')} alt='html'></img>
                            <p>C++</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/dsa.png')} alt='html'></img>
                            <p>Data Structures</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/algorithms.png')} alt='html'></img>
                            <p>Algorithms</p>
                        </div>
                    </div>
                </div>
                <div className='skill'>
                    <h2>Web Technologies</h2>
                    {/* make cards */}
                    <div className='skill-cards'>
                        <div className='skill-card'>
                            <img src={require('../img/icons/html-5.png')} alt='html'></img>
                            <p>HTML</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/css.png')} alt='css'></img>
                            <p>CSS</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/js.png')} alt='js'></img>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/react.png')} alt='react'></img>
                            <p>React</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/nodejs.png')} alt='node'></img>
                            <p>NodeJs</p>
                        </div>
                        <div className='skill-card express-icon'>
                            <img src={require('../img/icons/express.png')} alt='html'></img>
                            <p>ExpressJs</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/mongodb.png')} alt='mongo'></img>
                            <p>Mongo DB</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/bootstrap.png')} alt='bootstrap'></img>
                            <p>Bootstrap</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/mui.png')} alt='mui'></img>
                            <p>Material UI</p>
                        </div>
                    </div>
                </div>
                <div className='skill'>
                    <h2>Developer Tools</h2>
                    {/* make cards */}
                    <div className='skill-cards'>
                        <div className='skill-card'>
                            <img src={require('../img/icons/git.png')} alt='git'></img>
                            <p>Git</p>
                        </div>
                        <div className='skill-card express-icon'>
                            <img src={require('../img/icons/github.png')} alt='github'></img>
                            <p>GitHub</p>
                        </div>
                        <div className='skill-card express-icon'>
                            <img src={require('../img/icons/linux.png')} alt='linux'></img>
                            <p>Linux</p>
                        </div>
                        <div className='skill-card'>
                            <img src={require('../img/icons/heroku.png')} alt='heroku'></img>
                            <p>Heroku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills