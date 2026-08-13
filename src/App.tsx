
import { ThemeProvider } from "./contexts/ThemeContext"
import Portfolio from "./pages/portfolio"

function App() {
  

  return (
    
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
   
  )
}

export default App
