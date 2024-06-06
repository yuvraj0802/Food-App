import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/footer.css';

function Footer() {
    return (
        <div className='footerImg'>
            <footer>
                <div className="footer-parent">
                    <ul className="footer-text">
                        <li className="text-value">
                            <Link to="#">About us</Link>
                        </li>
                        <li className="text-value">
                            <Link to="#">ios App</Link>
                        </li>
                        <li className="text-value">
                            <Link to="#">Android App</Link>
                        </li>
                    </ul>
                    
                    <ul className="social-link">
                        <li>
                            <Link to="https://www.facebook.com/">
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/yuvraj_0802">
                               
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/ChaaFoody">
                                
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className="footer-p">
                    Created By Yuvraj
                </p>
            </footer>
        </div>
    )
}

export default Footer
