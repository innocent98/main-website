import{ useState } from 'react';
import "./customselect.scss";

const CustomSelect = ({ options, selectedOption, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedOption || "");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={`custom-select ${isOpen ? 'select-open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="select-selected">{selected || placeholder}</div>
      <div className="select-items">
        {options.map((option, index) => (
          <div
            key={index}
            className={option === selected ? 'same-as-selected' : ''}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
