 import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{
        border: isDark ? "1px solid #222" : "1px solid #e2e8f0",
        background: isDark ? "#111111" : "#ffffff",
      }}
    >

      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left font-semibold transition"
        style={{
          color: isDark ? "#ffffff" : "#1e293b",
          background: isDark ? "#111111" : "transparent",
        }}
      >
        {question}

        {/* ICON */}
        <span
          className={`text-orange-500 text-xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className="overflow-hidden px-5 pb-5 leading-relaxed"
          style={{
            color: isDark ? "#aaaaaa" : "#64748b",
          }}
        >
          {answer}
        </div>
      </div>

    </div>
  );
};

export default FAQItem;