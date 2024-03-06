import React, { FC, PropsWithChildren } from 'react'

interface ItemCardProps extends PropsWithChildren {
  id: number
  image: string
  isSelected: boolean
  onClick: (index: number) => void
}

const ItemCard: FC<ItemCardProps> = ({
  id,
  image,
  isSelected,
  onClick,
  children,
}) => {
  const imageList: { [key: string]: string } = {
    Brisbane: process.env.PUBLIC_URL + '/brisbane_vgpzva.jpg',
    Default: process.env.PUBLIC_URL + '/brisbane_vgpzva.jpg',
  }

  return (
    <div className={isSelected ? 'card selected' : 'card'}>
      <img
        src={imageList[image] || imageList['Default']}
        alt={image}
        className="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Heading {id}</h3>
        {children}
        <button className="card-button" onClick={() => onClick(id)}>
          Button {id}
        </button>
      </div>
    </div>
  )
}

export default ItemCard
