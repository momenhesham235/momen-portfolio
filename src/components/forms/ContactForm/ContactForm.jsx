import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { IoMail } from "react-icons/io5";
import { Button, Card, Input, Textarea } from "@design-system";
import FormField from "../FormField/FormField";
import {
  FORMSPREE_FORM_ID,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
  TOAST_DURATION,
  TOAST_POSITION,
} from "@app/config/constants";
import "./contact-form.css";

const getFieldError = (errors, field) => {
  if (!errors) return null;
  const err = Array.from(errors).find((e) => e.field === field);
  return err?.message ?? null;
};

const ContactForm = () => {
  const { t } = useTranslation("portfolio");
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("contact.form.success"), {
        position: TOAST_POSITION,
        duration: TOAST_DURATION,
      });
      formRef.current?.reset();
    }
  }, [state.succeeded, t]);

  return (
    <Card className="contact-form-card">
      <form
        className="contact-form__body"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
      >
        <FormField
          label={t("contact.form.namePlaceholder")}
          htmlFor="contact-name"
          required
          error={getFieldError(state.errors, "name")}
        >
          <Input
            type="text"
            name="name"
            placeholder={t("contact.form.namePlaceholder")}
            required
            autoComplete="name"
          />
        </FormField>

        <FormField
          label={t("contact.form.emailPlaceholder")}
          htmlFor="contact-email"
          required
          error={getFieldError(state.errors, "email")}
        >
          <Input
            type="email"
            name="email"
            placeholder={t("contact.form.emailPlaceholder")}
            required
            autoComplete="email"
          />
        </FormField>

        <FormField
          label={t("contact.form.messagePlaceholder")}
          htmlFor="contact-message"
          required
          error={getFieldError(state.errors, "message")}
        >
          <Textarea
            name="message"
            placeholder={t("contact.form.messagePlaceholder")}
            rows={5}
            required
            minLength={MESSAGE_MIN_LENGTH}
            maxLength={MESSAGE_MAX_LENGTH}
          />
        </FormField>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={state.submitting}
          aria-busy={state.submitting}
          className="contact-form__submit"
        >
          {state.submitting ? (
            t("contact.form.sending")
          ) : (
            <>
              <IoMail aria-hidden="true" />
              <span>{t("contact.form.submit")}</span>
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
