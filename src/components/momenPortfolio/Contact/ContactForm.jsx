import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { IoMail } from "react-icons/io5";
import {
  FORMSPREE_FORM_ID,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
  TOAST_DURATION,
  TOAST_POSITION,
} from "@app/config/constants";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! 👌", {
        position: TOAST_POSITION,
        duration: TOAST_DURATION,
      });
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        aria-label="Your name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} as="div" role="alert" />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        aria-label="Your email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} as="div" role="alert" />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        minLength={MESSAGE_MIN_LENGTH}
        maxLength={MESSAGE_MAX_LENGTH}
        aria-label="Your message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} as="div" role="alert" />

      <button type="submit" disabled={state.submitting} aria-busy={state.submitting}>
        {state.submitting ? (
          "Sending..."
        ) : (
          <>
            <IoMail aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
