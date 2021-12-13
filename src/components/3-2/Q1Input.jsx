const Q1Input = () => {
  return (
    <div>
      <input style={{width: '25vw',}} type="range" list="tickmarks" min="0" max="2" />
      <datalist id="tickmarks">
        <option value="0" label="somehow"></option>
        <option value="1" label="like"></option>
        <option value="2" label="in love"></option>
      </datalist>
    </div>
  );
};

export default Q1Input;