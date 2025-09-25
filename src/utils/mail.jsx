import { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0n3pvtq", // از EmailJS بگیر
        "template_d9wlml7", // default template که EmailJS میده
        form.current,
        "roQT0mz0CCaYdRonV" // Public key خودت
      )
      .then(
        result => {
          console.log("✅ Email sent:", result.text);
          alert("اطلاعات با موفقیت ارسال شد!");
        },
        error => {
          console.log("❌ Error:", error.text);
          alert("مشکلی پیش اومد. دوباره امتحان کن!");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>اسم</label>
      <input type="text" name="user_name" required />

      <label>شماره</label>
      <input type="text" name="user_phone" required />

      <button type="submit">ارسال</button>
    </form>
  );
}

export default ContactForm;
