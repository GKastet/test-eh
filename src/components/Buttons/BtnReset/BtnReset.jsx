import PropTypes from "prop-types";
import { cubeItems } from "../../helpers/cubeItems";
import { BtnResetS } from "./BtnResetStyled";

const BtnReset = ({ setCards }) => {
  return (
    <BtnResetS
      type="button"
      onClick={() => {
        setCards(cubeItems);
      }}
    >
      Reset
    </BtnResetS>
  );
};

BtnReset.propTypes = {
  setCards: PropTypes.func,
};

export default BtnReset;
