import './App.css';
import Download from './Components/Download';
import FAQ from './Components/FAQ';
import Header from './Components/Header';
import Profiles from './Components/Profiles';
import TvSection from './Components/TvSection';
import Watch from './Components/Watch';

function App() {
  return (
    <div className="app">
      <Header />
      {/* {enjoy tv section} */}
      <TvSection />
      {/* Download and watch show section */}
      <Download />
      {/* watch everywhere section */}
      <Watch />
      {/* create profiles for kids section */}
      <Profiles />
      {/* FAQs */}
      <FAQ />
      {/* footer */}
    </div>
  );
}

export default App;
