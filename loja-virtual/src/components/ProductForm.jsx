import { useState } from 'react'

function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState({ name: '', price: '', category: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name || !form.price || !form.category) return

    onAddProduct({
      name: form.name,
      price: Number(form.price),
      category: form.category,
    })
    setForm({ name: '', price: '', category: '' })
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Preço
        <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} />
      </label>
      <label>
        Categoria
        <input name="category" value={form.category} onChange={handleChange} />
      </label>
      <button type="submit">Cadastrar produto</button>
    </form>
  )
}

export default ProductForm
