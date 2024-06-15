import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flightReducer
  );
  return (
    <header>
      <div>
        <img src="https://github.com/Udemig/9-hi-study/blob/main/2_redux/8-toolkit-thunk-flight-radar/public/plane-logo.png?raw=true" />
        <h3>Flight Radar</h3>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">We are sorry. Something went wrong: {error}</p>
      ) : (
        <p>{flights.length} Flight Found</p>
      )}
    </header>
  );
};

export default Header;
