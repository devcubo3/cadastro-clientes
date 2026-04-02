export default function ClienteCard({ cliente }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.nome}>{cliente.nome}</h3>
      <p style={styles.info}>
        <span style={styles.label}>Email:</span> {cliente.email}
      </p>
      <p style={styles.info}>
        <span style={styles.label}>Telefone:</span> {cliente.telefone}
      </p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  },
  nome: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#333'
  },
  info: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px'
  },
  label: {
    fontWeight: '500',
    color: '#444'
  }
}
