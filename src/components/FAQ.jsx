import { useState } from "react";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState(null); // null = nothing open

  function toggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section id="faq" className="section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div className="faq-item" key={faq.id}>
            <h3>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                onClick={() => toggle(faq.id)}
              >
                {faq.question}
                <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
              </button>
            </h3>
            <p id={`faq-answer-${faq.id}`} className="faq-answer" hidden={!isOpen}>
              {faq.answer}
            </p>
          </div>
        );
      })}
    </section>
  );
}
