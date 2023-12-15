// import Parents from "../../components/childrenParent/Parents";
// import Children from "../../components/childrenParent/Children";
// import Events from "../../components/eventExample/Events";
// import Page from "../../components/useStateEx/Page";
// import Pages from "../../components/useContextEx/Pages";
import Pages from "../../components/useRefEx/Pages";
// import { ThemeProvider } from "../../context/ThemeContext";
import "./home.scss";
// import SecondChildren from "../../components/childrenParent/SecondChildren";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Parents children={<SecondChildren />} /> */}
        {/* <Events /> */}
        {/* <Page /> */}
        {/* <ThemeProvider>
          <Pages />
        </ThemeProvider> */}
        <Pages />
      </div>
    </div>
  );
};

export default Home;
