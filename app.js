/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <!-- Start preloader --> */}
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                {' '}
                C{' '}
              </span>

              <span data-text-preloader="H" className="letters-loading">
                {' '}
                H{' '}
              </span>

              <span data-text-preloader="A" className="letters-loading">
                {' '}
                A{' '}
              </span>

              <span data-text-preloader="R" className="letters-loading">
                {' '}
                R{' '}
              </span>

              <span data-text-preloader="G" className="letters-loading">
                {' '}
                G{' '}
              </span>

              <span data-text-preloader="E" className="letters-loading">
                {' '}
                E{' '}
              </span>

              <span data-text-preloader="M" className="letters-loading">
                {' '}
                M{' '}
              </span>

              <span data-text-preloader="E" className="letters-loading">
                {' '}
                E{' '}
              </span>

              <span data-text-preloader="N" className="letters-loading">
                {' '}
                N{' '}
              </span>

              <span data-text-preloader="T" className="letters-loading">
                {' '}
                T{' '}
              </span>
            </div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
      {/* <!-- End preloader --> */}        
    </div>
  );
}

export default App;