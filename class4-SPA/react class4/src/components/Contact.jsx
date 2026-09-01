function Contact(){

    return(
        <> <section id="contact">
      <h1>Contact Us</h1>

      <form className="form">
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </form>
    </section></>
        
    );
};
export default Contact;