// import logo from './logo.svg';
import style from './App.module.css';
import Business from '../Business/Business';
import myBusiness from '../Business/BusinessData';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className={style.title}><p>ravenous</p></div>
      <SearchBar />
      <div className={style.businesses}>
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
        <Business business={myBusiness} />
      </div>
    </div>
  );
}

export default App;
