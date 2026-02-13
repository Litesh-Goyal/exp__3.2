import Library from './components/library/Library';
function App() {
  return (
    <div style={{ 
      backgroundColor: '#e9ecef', 
      minHeight: '100vh', 
      width: '100vw',
      margin: 0,
      padding: '20px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Library />
    </div>
  );
}

export default App;