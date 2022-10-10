import { useState } from 'react';
import './App.css';
import DisplayBlock from './Components/DisplayBlock';
import PriceEntryField from './Components/PriceEntryField';
import VATRateField from './Components/VATRateField';

function App() {
  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);
  const [vatRate, setVatRate] = useState(0.2);
  const [vatToPay, setVatToPay] = useState(0.0);

  const handleNetPriceChange = (price) => {
    const gross_price = price * (vatRate + 1);
    setNetPrice(price);
    setGrossPrice(gross_price);
    setVatToPay(gross_price - price);
  }
  const handleGrossPriceChange = (price) => {
    const net_price = price / (vatRate + 1);
    setNetPrice(net_price);
    setGrossPrice(price);
    setVatToPay(price - net_price);
  }

  const handleVatRateChange = (vatRate) => {
    setVatRate(vatRate);
    updatePrices();
  }

  const updatePrices = () => {
    handleNetPriceChange(netPrice);
  }

  return (
    <div className="header">
      <h1>VAT Calculator</h1>
      <form className="pale-green-border">
        <VATRateField label="VAT Rate: " vatRateChanged={handleVatRateChange} updatePrices={updatePrices} customstyle="field" />
        <PriceEntryField label="Price excl VAT: " price={netPrice === 0.0 ? "": netPrice} priceChanged={handleNetPriceChange} customstyle="field" />
        <DisplayBlock label="VAT to pay: " value={vatToPay} customstyle="field" />
        <PriceEntryField label="Price incl VAT: " price={grossPrice === 0.0 ? "": grossPrice} priceChanged={handleGrossPriceChange} customstyle="field" />
      </form>
    </div>
  );
}

export default App;
