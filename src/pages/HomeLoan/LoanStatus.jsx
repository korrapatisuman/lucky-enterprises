import { useState } from "react";
import "./homeLoan.css";

function LoanStatus() {
  const [loanId, setLoanId] = useState("");
  const [status, setStatus] = useState(null);

  function checkStatus() {
    if (loanId === "123") setStatus("Approved");
    else setStatus("No Record Found");
  }

  return (
    <div className="loan-status">
      <h2>Check Loan Status</h2>

      <input placeholder="Enter Loan ID" onChange={(e) => setLoanId(e.target.value)} />
      <button onClick={checkStatus}>Check</button>

      {status && <h3>Status: {status}</h3>}
    </div>
  );
}

export default LoanStatus;
