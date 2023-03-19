import '../css/contact.css'

const Contact = () => {
  return (
    <div className='contact-container' id="contact">
        <h1 className='contact-head text-gradient hover-underline-animation'>Contact Me</h1>
        
        <div className='contact-card'>
            <img src={require("../img/email.png")} alt="mail" className='contact-icon'/>
            <div className='mail-btn'>
              <a class='text-gradient' href='mailto:jadhavaditya517@gmail.com'>Mail Me</a>
            </div>
        </div>
       
    </div>
  )
}

export default Contact