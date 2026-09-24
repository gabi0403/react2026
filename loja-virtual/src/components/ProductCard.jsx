import { useState } from 'react'

function ProductCard({ id, name, price, category, image, description, featured, onSale, inStock, onAddToCart, onRemove, onToggleFeatured }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const cardClasses = [
    'product-card',
    featured ? 'is-featured' : '',
    onSale ? 'is-sale' : '',
    !inStock ? 'is-out-of-stock' : '',
  ].join(' ')

  return (
    <article className={cardClasses}>
      <img src={image} alt={name} />
      <div className="product-content">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <strong className="price">R$ {price.toFixed(2).replace('.', ',')}</strong>
        {!inStock && <p>Fora de estoque</p>}
        <div className="product-actions">
          <button type="button" disabled={!inStock} onClick={() => onAddToCart({ price })}>
            Adicionar ao carrinho
          </button>
          <button
            className="favorite-button"
            type="button"
            aria-label={isFavorite ? 'Desfavoritar produto' : 'Favoritar produto'}
            onClick={() => setIsFavorite((favorite) => !favorite)}
          >
            {isFavorite ? 'Favoritado' : 'Favoritar'}
          </button>
        </div>
        <button type="button" onClick={() => onToggleFeatured(id)}>
          {featured ? 'Remover destaque' : 'Marcar destaque'}
        </button>
        <button type="button" onClick={() => onRemove(id)}>
          Remover produto
        </button>
      </div>
    </article>
  )
}

export default ProductCard
