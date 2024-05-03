import React, { useState } from 'react';

function Checkbox( {timsFunc} ) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      timsFunc(1);
    } else {
        timsFunc(0);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Tims
      </label>
    </div>
  );
}

export default Checkbox;