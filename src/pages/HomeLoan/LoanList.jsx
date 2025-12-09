import "./homeLoan.css";

function LoanList() {
  const loans = [
    { id: 1, name: "Suman", amount: 500000, status: "Pending" },
    { id: 2, name: "Raj", amount: 700000, status: "Approved" },
  ];

  return (
    <div className="loan-list">
      <h2>All Loan Applications</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Loan Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {loans.map((l) => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>₹ {l.amount}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanList;
