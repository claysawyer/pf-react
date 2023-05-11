import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  // State to track whether the dropdown is open or not
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  // Handle outside click event
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      // Outside of current div element
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // Toggle the dropdown open/closed
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle option click event
  const handleOptionClick = (value) => {
    setIsOpen(false); // Close the dropdown
    onChange(value); // Track the selection
  };

  // Render the options
  const renderedOptions = options.map((option) => {
    const handleClickOption = () => handleOptionClick(option);

    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={handleClickOption}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // Determine the rendered value
  const renderedValue = value?.label || "Select...";

  return (
    <div ref={divEl} className="w-48 relative">
      {/* Panel component as the main dropdown button */}
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {renderedValue}
        {<GoChevronDown className="text-lg" />}
      </Panel>
      {/* Render the options when the dropdown is open */}
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
