import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import CubeItem from "../CubeItem/CubeItem";
import { ItemTypes } from "../../ItemTypes";
import { cubeItems } from "../../helpers/cubeItems";
import BtnReset from "../../Buttons/BtnReset/BtnReset";
import { CubeWrapper, ItemsList } from "./CubeListStyled";

export const CubeList = memo(function Container() {
  const [cards, setCards] = useState(cubeItems);

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));
  return (
    <CubeWrapper>
      <ItemsList ref={drop}>
        {cards.map((card) => (
          <CubeItem
            key={card.id}
            id={`${card.id}`}
            moveCard={moveCard}
            findCard={findCard}
            card={card}
          />
        ))}
      </ItemsList>
      <BtnReset setCards={setCards} />
    </CubeWrapper>
  );
});

export default CubeList;
