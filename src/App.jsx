import React, { useState } from "react"
import styled, {ThemeProvider} from "styled-components"
import MyRoutes from "./routes/routes"
import Sidebar from "./components/sidebar"
import { BrowserRouter } from "react-router-dom";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);

function App() {

  //lógica de cambio de tema
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const CambiarTheme = () => {
    setTheme ((theme) => (theme === "light" ? "dark" : "light"));
  }

  // Toggle sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  &.active{
    grid-template-columns: 250px auto;}
`;
export default App
