import styled from "styled-components"
import GlobalStyles from "./Components/GlobalStyles/Index"
import Header from "./Components/Headers/Index"
import SideBar from "./Components/SideBar/Index"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles/>
      <Header/>
      <SideBar/>
    </BackgroundGradient>
  )
}

export default App
