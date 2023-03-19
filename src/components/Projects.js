import React from 'react'
import '../css/projects.css'

const Projects = () => {
    return (
        <div className='projects-container' id="projects">
            <h1 className='projects-head text-gradient hover-underline-animation'>Projects</h1>
            <div className='project-cards'>
                <div className='project-card'>
                    <img src={require('../img/projects/noteapp.png')} alt='notes-app'></img>
                    <h2>Notes App</h2>
                    <div className='tags'>
                        <span>React</span>
                        <span>MUI</span>
                    </div>
                    <p>A responsive web application that you can use to take notes on the go.</p>
                    <div className='project-links'>
                        <a href='https://notes-keeper517.netlify.app/' target='_blank'>Website</a>
                        <a href='https://github.com/adityajadhav02/keeper-app' target='_blank'>Github</a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={require('../img/projects/cryptoverse.png')} alt='notes-app'></img>
                    <h2>Cryptoverse</h2>
                    <div className='tags'>
                        <span>React</span>
                        <span>ChartJs</span>
                    </div>
                    <p>A web app that provides you the lateset trends and news from the crypto world.</p>
                    <div className='project-links'>
                        <a href='https://cryptoverse22.netlify.app/' target='_blank'>Website</a>
                        <a href='https://github.com/adityajadhav02/cryptoverse' target='_blank'>Github</a>
                    </div>
                </div>
                
                <div className='project-card'>
                    <img src={require('../img/projects/todolist.png')} alt='notes-app'></img>
                    <h2>Todo List</h2>
                    <div className='tags'>
                        <span>NodeJs</span>
                        <span>EJS</span>
                        <span>MongoDB</span>
                    </div>
                    <p>A todo-list that helps you track your tasks and save them on the database.</p>
                    <div className='project-links'>
                        <a href='https://todo-list-517.herokuapp.com/' target='_blank'>Website</a>
                        <a href='https://github.com/adityajadhav02/todolist-node-ejs' target='_blank'>Github</a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={require('../img/projects/movies.png')} alt='movie-app'></img>
                    <h2>Movie Display</h2>
                    <div className='tags'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                    </div>
                    <p>A simple website that fetches and displays movies. You can also search for movies. </p>
                    <div className='project-links'>
                        <a href='https://moviedisplay.netlify.app/' target='_blank'>Website</a>
                        <a href='https://github.com/adityajadhav02/movie-app' target='_blank'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects