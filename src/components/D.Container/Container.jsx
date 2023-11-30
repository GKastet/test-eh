import update from 'immutability-helper'
import { memo, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Card } from './Card.jsx'
import { ItemTypes } from './ItemTypes.jsx'

const style = {
  width: 400,
}

const ITEMS = [
  {
    id: 1,
    text: '111',
  },
  {
    id: 2,
    text: '222',
  },
  {
    id: 3,
    text: '333',
  },
  {
    id: 4,
    text: '444',
  },
  {
    id: 5,
    text: '555',
  },
  {
    id: 6,
    text: '666',
  },
  {
    id: 7,
    text: '777',
  },
  {
    id: 8,
    text: '888',
  },
  {
    id: 9,
    text: '999',
  },
]

export const Container = memo(function Container() {
  const [cards, setCards] = useState(ITEMS)
  
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0]
      return {
        card,
        index: cards.indexOf(card),
      }
    },
    [cards],
  )
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      )
    },
    [findCard, cards, setCards],
  )
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))
  return (
    <div ref={drop} style={style}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={card.text}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  )
})
