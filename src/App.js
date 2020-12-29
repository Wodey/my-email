import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {ThemeProvider,createGlobalStyle} from "styled-components";
import styled from "styled-components";
import List from "./components/List";
import NavigationBar from "./components/NavigationBar";

const theme = {
  mainfont: 'Source Sans Pro',
  maincolor: '#000',
  bg: '#fff',
  activecolor: '#ff0000',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap');
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: ${props => props.theme.mainfont};
    color: ${props => props.theme.maincolor};
    background: ${props => props.theme.bg}
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.maincolor};
  }
`;

const Body = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Header />
      <Body >
      <NavigationBar />
      <List />
      </Body>
      <GlobalStyle />
    </ThemeProvider>
    </div>
  );
}

export default App;
