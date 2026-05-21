import './App.css'
import { useTheme } from './hooks/useTheme.jsx';

function App() {

  const { mode, toggle } = useTheme();

  return (
    <>
      <h1>Theme App</h1>
      <button onClick={toggle}>Toggle Theme</button>
      <p>Mode: {mode}</p>
    </>
  )
}

export default App
