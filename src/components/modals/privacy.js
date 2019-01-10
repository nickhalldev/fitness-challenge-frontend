import React from "react";
// import { Modal, Button } from 'react-bootstrap';


class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <div id="privacy" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
            <div className="modal-container privacy">
            <span>Last Updated January 4, 2019</span>
            <br/><br/>
            At Fitness Freaks, Inc., our mission is simple: We want to help you achieve your fitness goals.  We believe that the best way to assist you is by providing competition between you and your friends, family, and even strangers.  And for this to work, we need to know a bit about you, your current fitness and your future goals.  We very much appreciate that you are trusting us with your data and in turn, want to be transparent about how we collect, store and use it.  After all, it is your data.
            <br/><br/>
            In this section, we want to help inform you about:
            <ol>
            <li>What information we collect</li>
            <li>EU Considerations</li>
            <li>What we do with your information</li>
            <li>How you can control and manage your data within our platform</li>
            <li>Steps we take to ensure your data remains safe and private</li>
            <li>How to delete your account and all personal information from our servers</li>
            </ol>
            <br/><br/>
            <span>What information do we collect</span>
            <br/><br/>
            Account information: your name, email address, and personal fitness statistics
            <br/><br/>
            Other information you may choose to provide may include: your photo and your weight.
            <br/><br/>
            <span>EU Considerations</span>
            <br/><br/>
            Some of the data we collect, including but not limited to your activity data, is subject to the European Union’s General Data Protection Regulation (GDPR) and thus requires we ask for your explicit consent.  At any time you may withdraw your consent from your account setting or delete your account and associated data.
            <br/><br/>
            We do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.
            <br/><br/>
            <span>What we do with your information</span>
            <br/><br/>
            The information we collect from you may be used in one or more of the following ways:
            to personalize your experience (your information helps us to better respond to your individual activity needs); to improve our website or application (we continually strive to improve our product offerings based on the information and feedback we receive from you), to improve customer service (your information helps us to more effectively respond to your customer service requests and support needs), to process transactions, to administer a contest, promotion, survey, or other site feature, and to send periodic emails.
            <br/><br/>
            When you use Fitness Freaks, Inc.  your first name and last initial of your last name and profile image (generic or photo that you upload) are publicly searchable in the Fitness Freaks, Inc. directory. By uploading a photo, you are consenting to Fitness Freaks, Inc.'s use in the Fitness Freaks, Inc. directory.  All other personal information is kept private unless you choose to accept an invitation to connect with another Fitness Freaks, Inc. member or choose to make your profile public to everyone in the Fitness Freaks, Inc. community. Be thoughtful of your own privacy needs as you choose what you share and with whom.
            <br/><br/>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential with at least the same degree of care that we use ourselves to maintain your informations' privacy.
            <br/><br/>
            We may disclose your personal information to: (a) comply with relevant laws, regulatory requirements and to respond to lawful requests, court orders, and legal process; (b) to protect and defend the rights or property of ours or third parties, including enforcing agreements, policies, and terms of use; (c) in an emergency, including to protect the safety of our employees or any person; or (d) in connection with investigating and preventing fraud.
            <br/><br/>
            However, non-personally identifiable visitor information may be provided to other parties for research, marketing, advertising, or other uses.
            <br/><br/>
            We may share information with a parent company, subsidiaries, joint ventures, or other companies under common control with us.
            <br/><br/>
            We may share your personal information for the purposes of a business deal (or negotiation of a business deal) involving sale or transfer of all or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding. Any personally identifiable information will only be exchanged as part of a business deal if all parties to that business deal agree in writing to maintain the personally identifiable information with at least the same degree of care as we use to maintain its privacy.
            <br/><br/>
            <span>How you can control and manage your data within our platform</span>
            <br/><br/>
            You may send requests about personal information via email to info@fitnessfreaks.com. You can request to change contact choices and marketing choices and to update or change your personal information. Changes or deletions of information can be made after logging into your profile and visiting Account Settings. For help making changes of data from the platform, please email via our "Contact Us" details below.
            <br/><br/>
            You may request that your account be deleted by using the Contact Us link below. Once deleted, your data, including your account, historic challeng results, and training plan cannot be reinstated.
            <br/><br/>
            Your public profile may be displayed in search engine results until the search engine refreshes its cache.
            <br/><br/>
            <span>Steps we take to ensure your data remains safe and private</span>
            <br/><br/>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
            <br/><br/>
            We offer the use of a secure server. All supplied information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway provider's database only to be accessible and partially viewable by those authorized with special access rights to such systems and who are required to keep the information confidential.
            <br/><br/>
            Although we have taken steps to protect your personal information, you should know that neither we nor any company can fully eliminate security risks.  If a breach of your data is detected, we will notify you as soon as possible of our awareness of the breach or otherwise as required by law.
            <br/><br/>
            <span>Your Consent</span>
            <br/><br/>
            By using our site, you consent to our privacy policy.
            <br/><br/>
            <span>Contact Us</span>
            <br/><br/>
            Should you have any questions or concerns regarding this privacy policy, please contact us at info@fitnessfreaks.com.
            <br/><br/>
            <span>Privacy Policy Updates</span>
            <br/><br/>

            This Privacy Policy may be updated from time to time. When we do, we will change the last updated date at the top of the page.
                </div>
              </div>
          </div>






    );
  }

}

export default Privacy
