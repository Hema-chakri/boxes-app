const Box = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{buttonText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box buttonText="Small" className="small-box" />
      <Box buttonText="Medium" className="medium-box" />
      <Box buttonText="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
