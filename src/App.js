import './App.css';
import DisplayBlock from './Components/DisplayBlock';
import PriceEntryField from './Components/PriceEntryField';
import VATRateField from './Components/VATRateField';

function App() {
  return (
    <div className="header">
      <h1>VAT Calculator</h1>
      <form className="pale-green-border">
        <VATRateField label="VAT Rate: " customstyle="field" />
        <PriceEntryField label="Price excl VAT: " price={20} customstyle="field" />
        <DisplayBlock label="VAT to pay: " value={4} customstyle="field" />
        <PriceEntryField label="Price incl VAT: " price={24} customstyle="field" />
      </form>
    </div>
  );
}

export default App;
