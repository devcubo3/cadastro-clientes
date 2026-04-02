import { useClientes } from '../hooks/useClientes'
import ClientesList from '../components/ClientesList'

export default function ClientesPage() {
  const { clientes, loading } = useClientes()

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Cadastro de Clientes</h1>
        <p style={styles.subtitle}>Gerencie seus clientes de forma simples</p>
      </header>

      {loading ? (
        <div style={styles.loading}>Carregando clientes...</div>
      ) : (
        <ClientesList clientes={clientes} />
      )}
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  header: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '16px',
    opacity: 0.9
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '18px',
    color: '#666'
  }
}
