import React, { Children } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { StyledFooter } from './StyledFooter'
import FooterLogo from '../../images/footer-logo.svg';
import TextLink from './../Button/TextLink';

function Footer(props) {
    return (
        <StyledFooter>
            <Wrapper>

                <div className="footer__together">
                    <span>Lets Work Together</span>
                    <SectionTitle type="h2" class="h2">
                        Have a project in mind? Let’s get to work.
                    </SectionTitle>
                   <div className="footer__cta">
                        <Button to="contact" name="Start a Project" variant="normal"/>
                   </div>
                </div>

                <div className="footer__contact">
                    <div className="col">
                        <div className="footer__widget">
                            <img src={FooterLogo} alt="Footer Logo" />
                            <p>We challange <br /> core assumptions.</p>
                            <p>
                                <a href="mailto: info@71.agency">info@71.agency</a>
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__widget">
                            <h5 className="footer__title">What we do</h5>
                            <div className="footer__links">
                                <TextLink to="/" name="home"/>
                                <TextLink to="/work" name="work"/>
                                <TextLink to="/services" name="services"/>
                            </div>     
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer__widget">
                            <h5 className="footer__title">Who we are</h5>
                            <div className="footer__links">
                                <TextLink to="/about" name="about us"/>
                                <TextLink to="/contact" name="contact us"/>
                            </div>
                        </div>     
                    </div>
                    <div className="col">
                        <div className="footer__widget">
                            <h5 className="footer__title">Work</h5>
                            <div className="footer__links">
                                <TextLink to="/sandbox" name="sandbox"/> 
                                <TextLink to="/pine" name="pine"/>
                                <TextLink to="/expert" name="expert it"/>
                                <TextLink to="/willow" name="Willow"/>
                            </div> 
                        </div>    
                    </div>
                    <div className="col">
                        <div className="footer__widget">
                            <h5 className="footer__title">Follow us on</h5>
                            <div className="footer__links">
                                <TextLink to="/facebook" name="facebook"/> 
                                <TextLink to="/instagram" name="instagram"/>
                                <TextLink to="/twitter" name="twitter"/>
                                <TextLink to="/linked" name="Linked in"/>
                            </div>
                        </div>     
                    </div>
                </div>

               <div className="footer__copyright">
                    <p>&copy; 71 Studio 2022. All rights reserved.</p>
               </div>
               
            </Wrapper>
        </StyledFooter>
    );
}

export default Footer;