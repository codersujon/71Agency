import React, { Children } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import { StyledFooter } from './StyledFooter'

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

                <p>&copy; 71 Studio 2022. All rights reserved.</p>
            </Wrapper>
        </StyledFooter>
    );
}

export default Footer;