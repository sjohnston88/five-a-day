import React, { Component } from "react";

import {
  Container,
  HeaderContainer,
  Logo,
  MyAccount,
  MyAccountIcon,
  SectionTitle,
  PrivacyPolicyText
} from "./styles";

class PrivacyPolicy extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <Logo>Fruits &amp; Veggies</Logo>
          <MyAccount href="./my-account">
            <MyAccountIcon />
            My Account
          </MyAccount>
        </HeaderContainer>
        <SectionTitle>Our Privacy Policy</SectionTitle>
        <PrivacyPolicyText>
          Bacon ipsum dolor amet frankfurter bacon pork belly corned beef cow.
          Alcatra sirloin ribeye bacon frankfurter boudin pork belly ham. Cupim
          turducken ham pig buffalo sausage turkey pastrami tenderloin. Bresaola
          shank fatback doner rump boudin pork chop pork shoulder sausage short
          ribs strip steak tongue.
        </PrivacyPolicyText>
        <PrivacyPolicyText>
          Pork belly sausage swine biltong chicken. Pork t-bone kevin venison,
          jerky tail meatloaf rump picanha shankle. Cow ribeye short loin beef
          ribs. Salami biltong tail ground round ball tip ribeye tongue
          drumstick strip steak sirloin bacon flank chuck.
        </PrivacyPolicyText>
        <PrivacyPolicyText>
          Andouille corned beef chicken turducken ham hock buffalo. Pig beef
          alcatra shank. Sausage kielbasa alcatra frankfurter kevin, prosciutto
          rump ground round swine jerky turkey landjaeger andouille fatback.
          Brisket short loin pork chop strip steak rump. Sirloin pork loin
          chicken, bresaola cow tri-tip andouille ribeye tenderloin pork belly.
          Short loin venison pork belly pork spare ribs kevin. Salami bresaola
          swine leberkas turkey, shankle beef ribs.
        </PrivacyPolicyText>
      </Container>
    );
  }
}

export default PrivacyPolicy;
