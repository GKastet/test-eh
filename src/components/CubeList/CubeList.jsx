import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import CubeItem from "../CubeItem/CubeItem";
import { ItemTypes } from "../CubeItem/ItemTypes";
import { cubeItems } from "../helpers/cubeItems";
import { ItemsList } from "./CubeListStyled";

export const CubeList = memo(function Container() {
  const [cards, setCards] = useState(cubeItems);
  console.log('cards: ', cards);

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
  );
});

export default CubeList;