import PropTypes from "prop-types";
import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";
import { ItemS } from "./CubeItem2Styled";

const CubeItem2 = ({ id, index, moveCard, card }) => {
  const [rotation, setRotation] = useState(0);
  const { itemImg, itemImgAlt } = card;

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (draggedItem) => {
      const draggedIndex = draggedItem.index;
      const hoveredIndex = index;

      if (draggedIndex !== hoveredIndex) {
        moveCard(draggedIndex, hoveredIndex);
        draggedItem.index = index;
      }
    },
  });

  const handleRotateClick = () => {
    const newRotation = rotation + 90;
    setRotation(newRotation);
  };

  const opacity = isDragging ? 0 : 1;

  return (
    <ItemS
      ref={(node) => drag(drop(node))}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={handleRotateClick}
    >
      <div style={{ width: "150px", height: "150px" }}>
        <img src={itemImg} alt={itemImgAlt} width="100%" />
      </div>
    </ItemS>
  );
};

CubeItem2.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};
export default CubeItem2;
