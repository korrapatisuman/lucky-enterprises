import React, { useState } from "react";

function Contacts() {
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent — backend integration pending");
    setMsg("");
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={submit} className="card" style={{maxWidth:600}}>
        <label>Name</label>
        <input required />

        <label>Email</label>
        <input required />

        <label>Message</label>
        <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} style={{width:"100%", minHeight:120}} />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contacts;
