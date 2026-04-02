import ClienteCard from './ClienteCard'

export default function ClientesList({ clientes }) {
  if (clientes.length === 0) {
    return (
      <p style={styles.empty}>Nenhum cliente encontrado.</p>
    )
  }

  return (
    <div style={styles.grid}>
      {clientes.map(cliente => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))}
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px'
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    fontSize: '16px',
    padding: '40px'
  }
}
