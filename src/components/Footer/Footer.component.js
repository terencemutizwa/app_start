import React from 'react';
import moment from 'moment';

const Footer = () => (

    <footer className="footer">
        <div className="container">
            <p className="text-muted">
                Copyright &copy;
                <span className="copy_date"> {moment().format('YYYY')} </span>
                RockPaperScissors &reg;
            </p>
        </div>
    </footer>

);

export default Footer;
