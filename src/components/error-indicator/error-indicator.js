import icon from './icon-error.png';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" /><br/>
      <span>Something went wrong...</span>
    </div>
  );
};

export default ErrorIndicator;