import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import {
  ButtonStyled,
  LangItem,
  LanguageList,
  SelectWrapper,
} from "./SelectLangStyled";

const SelectLang = ({ lang, changeLanguage }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const backgroundRef = useRef(null);
  const languages = ["ENG", "CZ"];

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        openSelect &&
        backgroundRef.current &&
        !backgroundRef.current?.contains(event.target)
      ) {
        setOpenSelect(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openSelect]);
  const handleOnClickSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <SelectWrapper ref={backgroundRef}>
      <ButtonStyled type="button" onClick={handleOnClickSelect}>
        <p>{lang}</p>
      </ButtonStyled>
      <LanguageList className={openSelect ? "openSelect" : ""}>
        {languages.map((language) => (
          <LangItem key={language}>
            <input
              type="radio"
              name="language"
              id={language}
              className="custom-checkbox"
              value={language}
              onChange={changeLanguage}
            />
            <label htmlFor={language}>
              <p>{language}</p>
            </label>
          </LangItem>
        ))}
      </LanguageList>
    </SelectWrapper>
  );
};

SelectLang.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default SelectLang;
