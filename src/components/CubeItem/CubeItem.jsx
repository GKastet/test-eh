import PropTypes from "prop-types";
import { memo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const CubeItem = memo(function Card({ id, moveCard, findCard, card }) {
  const { itemImg, itemImgAlt } = card;
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0 : 1;

  const [rotation, setRotation] = useState(0);

  const handleRotateClick = () => {
    const newRotation = (rotation + 90) % 360;
    setRotation(newRotation);
  };

  return (
    <li
      ref={(node) => drag(drop(node))}
      style={{
        opacity,
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
});

CubeItem.propTypes = {
  id: PropTypes.string.isRequired,
  moveCard: PropTypes.func.isRequired,
  findCard: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};
export default CubeItem;
