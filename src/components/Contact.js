import '../css/contact.css'
import useInView from '../hooks/useInView';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className='contact-container' id="contact">
        <h1 className='contact-head text-gradient'>Contact Me</h1>
        
        <div className={`contact-card ${isInView ? 'fade-in delay-1' : ''}`}>
            <img src={require("../img/email.png")} alt="mail" className='contact-icon'/>
            <div className='mail-btn'>
              <a className='text-gradient' href='mailto:jadhavaditya517@gmail.com'>Mail Me</a>
            </div>
        </div>
    </div>
  )
}

export default Contact