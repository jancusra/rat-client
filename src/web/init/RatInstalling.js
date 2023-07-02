import logo from 'ratImages/react-logo';

function RatInstalling() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Installing ...
        </p>
      </header>
    </div>
  );
}

export default RatInstalling;
