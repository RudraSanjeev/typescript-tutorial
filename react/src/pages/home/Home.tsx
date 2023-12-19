import Parents from "../../components/childrenParent/Parents";
// import Children from "../../components/childrenParent/Children";
// import Events from "../../components/eventExample/Events";
// import Page from "../../components/useStateEx/Page";
// import Pages from "../../components/useContextEx/Pages";
// import Pages from "../../components/useRefEx/Pages";
// import { ThemeProvider } from "../../context/ThemeContext";
import "./home.scss";
import SecondChildren from "../../components/childrenParent/SecondChildren";
// import SecondChildren from "../../components/childrenParent/SecondChildren";

const Home = () => {
  const address = {
    city: "arrah",
    state: "bihar",
    pincode: "802352",
  };
  const likes = [
    {
      name: "cricket",
      type: "outdoor game",
    },
    {
      name: "carrom",
      type: "indoor game",
    },
  ];
  const styles = {
    color: "red",
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px 30px",
  };
  return (
    <div className="home">
      <div className="container">
        <Parents
          styles={styles}
          children={<SecondChildren />}
          parentName="godzilla"
          address={address}
          likes={likes}
        />
        {/* <Events /> */}
        {/* <Page /> */}
        {/* <ThemeProvider>
          <Pages />
        </ThemeProvider> */}
        {/* <Pages /> */}
      </div>
    </div>
  );
};

export default Home;
