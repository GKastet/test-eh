import { useState } from "react";
import { cubeItems } from "../../helpers/cubeItems";
import CubeItem2 from "../CubeItem2/CubeUtem2";
import BtnReset from "../../Buttons/BtnReset/BtnReset";
import { CubeWrapper, ItemsList } from "./CubeList2Styled";

const CubeList2 = () => {
  const [cards, setCards] = useState(cubeItems);

  const moveCard = (draggedIndex, hoveredIndex) => {
    const testCards = [...cards];
    const temp = testCards[draggedIndex];
    testCards[draggedIndex] = testCards[hoveredIndex];
    testCards[hoveredIndex] = temp;
    setCards([...testCards]);
  };

  return (
    <CubeWrapper>
      <ItemsList>
        {cards.map((card, index) => (
          <CubeItem2
            key={card.id}
            id={card.id}
            index={index}
            moveCard={moveCard}
            card={card}
          />
        ))}
      </ItemsList>
      <BtnReset setCards={setCards} />
    </CubeWrapper>
  );
};

export default CubeList2;
