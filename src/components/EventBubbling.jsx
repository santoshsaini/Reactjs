function App() {
  const handleParentClick = () => {
    alert("Parent clicked!");
  };

  const handleChildClick = () => {
    alert("Child clicked!");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '20px', background: '#eee' }}>
      <button onClick={handleChildClick}>Click Me</button>
    </div>
  );
}