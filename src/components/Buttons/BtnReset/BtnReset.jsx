import PropTypes from "prop-types";
import { cubeItems } from "../../helpers/cubeItems";
import { BtnResetS } from "./BtnResetStyled";

const BtnReset = ({ setCards, lang }) => {  
  return (
    <BtnResetS
      type="button"
      onClick={() => {
        setCards(cubeItems);
      }}
    >
      {lang === "eng" && "Reset"}
      {lang === "cz" && "Vynulovať"}
    </BtnResetS>
  );
};

BtnReset.propTypes = {
  setCards: PropTypes.func,
  lang: PropTypes.string.isRequired,
};

export default BtnReset;
