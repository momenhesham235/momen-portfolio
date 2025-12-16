import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { IoMail } from "react-icons/io5";
import "./contact.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdkqrlvy");

  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 👍", {
        position: "top-right",
        duration: 5000,
        theme: "dark",
      });

      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
      <input type="text" name="name" placeholder="Your Name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input type="email" name="email" placeholder="Your Email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? (
          "Sending..."
        ) : (
          <>
            <IoMail />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
