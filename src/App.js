
import React, { useState } from 'react';

function BioForm() {
  const [bio, setBio] = useState('');
  const [bioUppercase, setBioUppercase] = useState('');

  function handleChange(event) {
    setBio(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBioUppercase(bio.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        enter the data:
        <textarea value={bio} onChange={handleChange} />
      </label>
      <button type="press this">Convert to Uppercase</button>
      <p>{bioUppercase}</p>
    </form>
  );
}

export default BioForm;