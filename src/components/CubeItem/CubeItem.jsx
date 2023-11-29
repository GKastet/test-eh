import PropTypes from "prop-types";
import { useState } from "react";

const CubeItem = ({ item }) => {
  const { id, itemImg, itemImgAlt } = item;
  const [rotation, setRotation] = useState(0);

  const handleRotateClick = () => {    
    const newRotation = (rotation + 90) % 360;
    setRotation(newRotation);
  };
  return (
    <li
      key={id}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onClick={handleRotateClick}
    >
      <div>
        <img src={itemImg} alt={itemImgAlt} />
      </div>
    </li>
  );
};
CubeItem.propTypes = {
  item: PropTypes.object,
};
export default CubeItem;
