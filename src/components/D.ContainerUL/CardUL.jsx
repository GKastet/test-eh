import { memo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypesUL } from "./ItemTypesUL.jsx";

const style = {
  boxSizing: "border-box",
  width: 150,
  height: 150,
  border: "1px dashed gray",
  // padding: '0.5rem 1rem',
  // marginBottom: '.5rem',
  backgroundColor: "white",
  cursor: "move",
};

export const CardUL = memo(function Card({ id, moveCard, findCard, card }) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypesUL.CARD,
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
      accept: ItemTypesUL.CARD,
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
      style={{ ...style, opacity, transform: `rotate(${rotation}deg)` }}
      onClick={handleRotateClick}
    >
      <div>
        <img src={card.itemImg} alt={card.itemImgAlt} />
      </div>
    </li>
  );
});
