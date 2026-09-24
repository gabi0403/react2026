import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductForm from '../components/ProductForm'

const initialProducts = [
  {
    id: 1,
    name: 'Cesta de fibras naturais',
    price: 89.9,
    category: 'Casa',
    description: 'Organização simples para todos os ambientes.',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=700&q=80',
    featured: true,
    onSale: false,
    inStock: true,
  },
  {
    id: 2,
    name: 'Caneca de cerâmica',
    price: 42.5,
    category: 'Cozinha',
    description: 'Uma peça artesanal para acompanhar seus dias.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80',
    featured: false,
    onSale: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Vaso de barro',
    price: 64,
    category: 'Decoração',
    description: 'Textura natural para trazer aconchego ao espaço.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
    featured: false,
    onSale: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'Almofada terracota',
    price: 75,
    category: 'Têxtil',
    description: 'Conforto e cor para renovar a sala.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80',
    featured: true,
    onSale: true,
    inStock: false,
  },
  {
    id: 5,
    name: 'Bandeja de madeira',
    price: 55.9,
    category: 'Casa',
    description: 'Praticidade para servir e organizar.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
    featured: false,
    onSale: false,
    inStock: true,
  },
]

function Home({ description }) {
  const [products, setProducts] = useState(initialProducts)
  const [cartValue, setCartValue] = useState(0)

  function addToCart(product) {
    setCartValue((value) => value + product.price)
  }

  function addProduct(productData) {
    setProducts((currentProducts) => [
      ...currentProducts,
      {
        ...productData,
        id: Date.now(),
        description: 'Novo produto cadastrado na loja.',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80',
        featured: false,
        onSale: false,
        inStock: true,
      },
    ])
  }

  function removeProduct(productId) {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId))
  }

  function toggleFeatured(productId) {
    setProducts((currentProducts) => currentProducts.map((product) => (
      product.id === productId ? { ...product, featured: !product.featured } : product
    )))
  }

  return (
    <main className="home">
      <section className="intro">
        <h2>Escolhas que ficam.</h2>
        <p>{description}</p>
      </section>

      <p className="summary">
        <span>{products.length} produtos cadastrados</span>
        <span>Valor do carrinho: R$ {cartValue.toFixed(2).replace('.', ',')}</span>
      </p>

      <ProductForm onAddProduct={addProduct} />

      {products.length === 0 ? (
        <p className="empty-products">Não há produtos disponíveis.</p>
      ) : (
        <section className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              description={product.description}
              featured={product.featured}
              onSale={product.onSale}
              inStock={product.inStock}
              onAddToCart={addToCart}
              onRemove={removeProduct}
              onToggleFeatured={toggleFeatured}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default Home
