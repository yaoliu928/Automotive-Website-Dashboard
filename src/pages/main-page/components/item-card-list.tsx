import React, { useState } from 'react'
import ItemCard from './item-card'
import { Item } from '../../../models'

const ItemCardList = () => {
  const [items] = useState<Item[]>([
    {
      id: 1,
      image: 'Brisbane',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Expedita vel at ut, ducimus accusantium, consequuntur sapiente sit inventore commodi deleniti',
    },
    {
      id: 2,
      image: 'Brisbane',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditodit delectus distinctio qui nostrum? Minima iusto facilis nam doloribus enim. Veritatis aliquam itaque.',
    },
    {
      id: 3,
      image: 'Brisbane',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdamhic, autem repudiandae animi quos inventor.\n\nLorem ipsum dolor sit amet consectetur, adipisicing elit.Ipsum molestias accusamus vitae architecto alias.',
    },
  ])
  const [selectedIndex, setSelectedIndex] = useState<number>(2)

  const handleSelectCard = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div className="card-list-container">
      {items.map(({ id, image, description }) => {
        return (
          <ItemCard
            isSelected={id === selectedIndex}
            key={id}
            image={image}
            id={id}
            onClick={handleSelectCard}
          >
            {<p className="card-text">{description}</p>}
          </ItemCard>
        )
      })}
    </div>
  )
}

export default ItemCardList
