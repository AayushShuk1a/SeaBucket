import React, { useEffect, useState } from "react";
import { getFaqs } from "../API/ApiCalls.js";
import "./faq.scss";
import FaqCard from "./faqCard";

const Faq = () => {
  const [FAQ, setFAQ] = useState([]);

  useEffect(() => {
    const getfaq = async () => {
      const faq = await getFaqs();
      setFAQ(faq);
    };

    getfaq();
  }, []);

  return (
    <div className="FAQ">
      <h1>Faqs</h1>
      <div className="Faqs">
        {FAQ.map((item) => (
          <FaqCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
