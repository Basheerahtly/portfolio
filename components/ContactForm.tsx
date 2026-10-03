"use client"; // Runs in the browser, because it reacts to typing and clicking.

import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function ContactForm() {
  // Remembers what is happening: "" (nothing yet), "sending", "sent" or "error".
  const [result, setResult] = useState("");

  // This function runs when the visitor presses "Send message".
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    // Normally a browser reloads the page when a form is sent. This stops that.
    event.preventDefault();
    setResult("sending");

    // Collect everything the visitor typed, then attach your access key.
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", profile.contactKey);

    try {
      // Send the message to Web3Forms, which emails it to you.
      // "await" means: wait here until the reply comes back.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("sent");
        form.reset(); // empty the boxes
      } else {
        setResult("error");
      }
    } catch {
      // This part runs if something fails, for example no internet connection.
      setResult("error");
    }
  }

  // Every box uses the same styling, so we write it once and reuse it.
  const boxStyle =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 font-normal outline-none focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4">
      {/* A hidden box that real people never see. Spam robots tick it, and get blocked. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

      <label className="flex flex-col gap-2 text-sm font-medium">
        Your name
        <input type="text" name="name" required className={boxStyle} />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium">
        Your email
        <input type="email" name="email" required className={boxStyle} />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium">
        What is this about?
        <select name="topic" className={boxStyle}>
          <option>Internship or job opportunity</option>
          <option>Project request</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium">
        Message
        <textarea name="message" rows={5} required className={boxStyle} />
      </label>

      {/* "disabled" stops people pressing the button twice while it is sending */}
      <button
        type="submit"
        disabled={result === "sending"}
        className="self-start rounded-xl bg-accent px-6 py-3 font-semibold text-on-accent transition hover:opacity-90 disabled:opacity-60"
      >
        {result === "sending" ? "Sending..." : "Send message"}
      </button>

      {/* One of these appears after sending */}
      {result === "sent" && <p className="text-green-600">Thank you. Your message has been sent.</p>}
      {result === "error" && (
        <p className="text-red-600">Something went wrong. Please email me directly instead.</p>
      )}
    </form>
  );
}