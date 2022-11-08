import Header from "./Components/Header";
import data from "./Components/data";
import Infor from "./Components/Infor";

function App() {
  const travel = data.map((item) => {
    return (
      <Infor
        pics={item.imageUrl}
        location={item.location}
        map={item.googleMapUrl}
        title={item.title}
        start={item.startdate}
        end={item.endDate}
        description={item.description}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      {travel}
    </div>
  );
}

export default App;
