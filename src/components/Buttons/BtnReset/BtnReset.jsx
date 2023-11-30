const BtnReset = () => {
  const handleClickReset = () => {
    console.log("reset");
  };
  return (
    <button type="button" onClick={handleClickReset}>
      Reset
    </button>
  );
};

export default BtnReset;
