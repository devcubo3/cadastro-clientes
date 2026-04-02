import { useState, useEffect } from 'react'

export function useClientes() {
  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      setClientes([
        { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '(11) 98765-4321' },
        { id: 2, nome: 'Maria Santos', email: 'maria@email.com', telefone: '(11) 91234-5678' },
        { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', telefone: '(11) 99876-5432' },
        { id: 4, nome: 'Ana Costa', email: 'ana@email.com', telefone: '(11) 92345-6789' },
        { id: 5, nome: 'Carlos Souza', email: 'carlos@email.com', telefone: '(11) 93456-7890' }
      ])
      setLoading(false)
    }, 800)
  }, [])

  return { clientes, loading }
}
