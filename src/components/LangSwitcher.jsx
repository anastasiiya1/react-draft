import { useId } from "react";

const LangSwitcher = ({ value, onSelect}) => {
  const selectId = useId();
  const handleLang = (event) => {
    onSelect(event.target.value);
  };

  return (
    <>
      <label htmlFor={selectId}>Choose language</label>
      <select id={selectId} value={value} onChange={handleLang}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </>
  );
};

export default LangSwitcher;
