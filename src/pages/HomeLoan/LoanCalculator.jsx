import { useState } from "react";
import "./homeLoan.css";

function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [rate, setRate] = useState(8.5);
  const [emi, setEmi] = useState(null);

  function calculateEMI() {
    const p = Number(amount);
    const r = rate / 12 / 100;
    const n = Number(time) * 12;

    const emiCalc = (p * r * Math.pow(1 + r, n)) /
                    (Math.pow(1 + r, n) - 1);

    setEmi(emiCalc.toFixed(2));
  }

  return (
    <div className="loan-calculator">
      <h2>Loan EMI Calculator</h2>

      <label>Loan Amount</label>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />

      <label>Tenure (Years)</label>
      <input type="number" onChange={(e) => setTime(e.target.value)} />

      <label>Interest Rate (%)</label>
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && <h3>Monthly EMI: ₹ {emi}</h3>}
    </div>
  );
}

export default LoanCalculator;
