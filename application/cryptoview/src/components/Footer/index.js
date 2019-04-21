import React  from 'react';
import './index.css';

const linkIEX = (
  <a href="https://iextrading.com/developer/" target="_blank">
    IEX
  </a>
);
const linkTerms = (
  <a href="https://iextrading.com/api-exhibit-a/" target="_blank">
    Terms of Use
  </a>
);

const Footer = () => (
  <div className="Footer">
    {'Data provided for free by '}{linkIEX}{'. View IEX’s '}{linkTerms}.
  </div>
);

export default Footer;
