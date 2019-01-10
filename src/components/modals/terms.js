import React from "react";
// import { Modal, Button } from 'react-bootstrap';


class Terms extends React.Component {
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

  keyPress = e => {
    // console.log('e.key - ',e.key)
    if(e.key === "Escape" ) {
        // write your logic here.
        // console.log('here we gooooo')
    }
}






  render() {
    return (
      <div id="terms" className="overlay">
          <a className="closebtn" onClick={this.props.close}>&times;</a>
          <div className="overlay-content">
          <div className="modal-container terms">
            <span>Last Updated January 4, 2019</span>
            <br/><br/>These Fitness Freaks Terms of Service ("Terms") apply to your access and use of the Fitness Freaks platform and service.  These Terms are an agreement between you and Fitness Freaks. Violation of these Terms may, in Fitness Freaks's sole discretion, result in suspension or termination of your account and you may no longer be permitted to use the Fitness Freaks Service.
            <br/><br/>You must accept these Terms in order to create an account and access or use the "Fitness Freaks Service" including software, application, website, and services.
            <br/><br/>Persons under the age of 13 are not permitted to access or use the Fitness Freaks Service unless their parent has provided explicit consent in accordance with applicable law.  Our website, products and services are all directed to people who are at least 13 years old.
            <br/><br/>1. Upon acceptance by Fitness Freaks of this Agreement, and for as long as you choose to utilize the coaching service, Fitness Freaks will use a proprietary computer program to provide structured challenges ("Fitness Freaks Services"). As athletic results vary from individual to individual and depend upon many factors, Fitness Freaks cannot promise or guarantee that the Fitness Freaks Services will meet your expectations or produce favorable results, improvements or benefits. If you are dissatisfied with the Fitness Freaks Services for any reason, your sole remedy is to terminate this Agreement. The Fitness Freaks Services are personal to you and may not be transferred or assigned.
            <br/><br/>2. By accessing or using the Fitness Freaks Services, you agree that we can collect, store and process your information in accordance with our Privacy Policy
            <br/><br/>3. Conduct Standards. You may not post violent, nude, partially nude, discriminatory, illegal, pornographic, obscene, infringing, hateful or sexually suggestive photos or content on the Fitness Freaks Service.  You may not sell, transfer, assign or license your account or account rights, and you are responsible for keeping your username and password secure.  You cannot create an account for anyone else.  You cannot solicit, collect or use anyone else's account or login credentials.  You cannot defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate any person or entity.  Do not use the Fitness Freaks Service for any illegal or unauthorized purposes.  You must also comply with all applicable laws, rules and governmental regulations (whether federal, state, local or otherwise) when using the Fitness Freaks Service.  You are responsible for your conduct on the Fitness Freaks Service and any content or materials (including, without limitation, data, text, files, information, images, photos, profiles, audio and video clips, sounds and links) you submit, post or display.  You are prohibited from changing, modifying, altering or adapting the Fitness Freaks Service or any other website to imply an association with the Fitness Freaks Service.  You must not disrupt or interfere with the Fitness Freaks Service or any servers or networks associated with the Service.  Do not attempt to restrict anyone else from using or enjoying the Fitness Freaks Service.
            <br/><br/>4. Assumption of Risk, Release, Waiver and Indemnity. You acknowledge and agree for yourself (which for purposes of this Agreement includes your personal representatives, executors, administrators, successors, assigns, heirs, agents and next of kin) that:
            <ol type="a">
                <br/><br/><li>You are qualified, in good health, and in proper physical condition to participate in the physical and athletic activities, exercises, training, and programs for which Fitness Freaks Services are provided (collectively, the "Athletic Activities");</li>
            <br/><br/><li>The Athletic Activities naturally involve risks and dangers of serious bodily injury, including permanent disability, paralysis and death, and property damage, as well as other risks and social and economic losses or any other damage, either not known to you or not readily foreseeable at this time (collectively, the "Risks");</li>
            <br/><br/><li>The Risks may be caused by your own actions or inactions, or the actions or inactions of others, including those who own or maintain the Third Party Facilities (as defined below);</li>
            <br/><br/><li>Fitness Freaks is not providing any physical facilities (e.g., indoor or outdoor running tracks), clothing, shoes, training devices or equipment of any kind relating to Athletic Activities, and all Athletic Activities will take place at indoor or outdoor, public or private, physical facilities that are owned by third parties (the "Third Party Facilities"), and Fitness Freaks cannot and does not make any representation or warranty regarding the Third Party Facilities, including but not limited to their condition, accessibility, safety, or suitability for the Athletic Activities;</li>
            <br/><br/><li>You accept the condition of such Third Party Facilities, "AS IS, WHERE IS" and you agree to abide by all rules and regulations, public or private, that apply to the use of Third Party Facilities;</li>
            <br/><br/><li>You understand and voluntarily accept and assume all Risks and responsibility for all injuries, whether physical or mental, including but not limited to, injuries to yourself or your guests, arising out of or in connection with the Athletic Activities and/or your use of Third Party Facilities (collectively, the "Injuries"), including but not limited to the following:
                <ol type="i">
                <br/><br/><li>Any accidental or "slip and fall" Injuries;</li>
                        <br/><br/><li>Injuries arising from participation in supervised or unsupervised activities and programs, including but not limited to those sponsored or endorsed by Fitness Freaks;</li>
            <br/><br/><li>Injuries or medical disorders resulting from Athletic Activities, including but not limited to heart attacks, strokes, heart stress, sprains, tendinitis, broken bones, torn muscles or ligaments;</li>
            <br/><br/><li>Injuries resulting from the actions taken or decisions made regarding medical or survival procedures; and</li>
                </ol>
                    </li>
                    <br/><br/><li>Any loss, theft or damage to property.
            <br/><br/></li><li>You voluntarily waive, release and discharge Fitness Freaks (which includes, for purposes of this Agreement, its owners, members, directors, officers, employees, agents or volunteers) from any and all claims, liabilities, damages, losses (including but not limited to loss of time, loss of service and loss of income), causes of action, suits, costs, expenses, and attorneys fees (collectively, the "Losses"); arising out of or related to all Risks and Injuries;</li>
            <br/><br/><li>You shall maintain health, accident and/or property insurance that is adequate to cover all of your Losses, Risks and injuries;</li>
            <br/><br/><li>You relinquish forever and covenant not to sue, assert or otherwise maintain any claim or cause of action against Fitness Freaks (whether past, present or future, whether known or unknown, and whether anticipated or unanticipated) arising out of any Losses, Risks or Injuries; and</li>
            <br/><br/><li>You will indemnify, defend and hold Fitness Freaks harmless from any and all Losses, Risks, Injuries and any breach by you of any of these Terms.</li>
            </ol>
                <br/><br/>5. Medical Examination. You acknowledge that Fitness Freaks is not a medical practice and does not employ doctors or licensed health care providers of any kind. Accordingly, Fitness Freaks cannot and will not provide medical examinations or medical or healthcare advice. You are strongly encouraged to have a complete physical examination by a licensed medical doctor prior to beginning any work-out program or strenuous new activity, including but not limited to Athletic Activities for which Fitness Freaks Services are provided.  If you have a history of heart disease, you should consult a physician before undertaking any Athletic Activities.
            <br/><br/>6. Feedback and Submissions. If you submit comments, ideas, or feedback to us, you agree that we can use, disclose, reproduce, distribute, and exploit any or all of it without any restriction or compensation to you. We do not waive any rights to use similar or related ideas or feedback previously known to us, or obtained from sources other than you.
            <br/><br/>7. Contests and Promotions. Additional terms and conditions may apply to surveys, contests and promotions sponsored by Fitness Freaks or its partners. It is your responsibility to carefully review those terms and conditions.
            <br/><br/>8. Third-Party Services. The Fitness Freaks Service may display or permit linking or other access to or use of third-party content, promotions, websites, apps, tracking devices, services and resources (collectively "Third-Party Services") that are not under Fitness Freaks's control. We provide these links only as a convenience and are not responsible for the products, services, or other content that are available from Third-Party Services. You acknowledge that any Third-Party Services that you use in connection with the Fitness Freaks Service are not part of the Fitness Freaks Service and are not controlled by Fitness Freaks, and you take sole responsibility and assume all risk arising from your interaction with or use of any Third-Party Services. You also acknowledge that these Terms and the Fitness Freaks Privacy Policy do not apply to any Third-Party Services. You are responsible for reading and understanding the terms and conditions and privacy policy that applies to your use of any Third-Party Services.
            <br/><br/>9. Fitness Freaks Service changes.  Fitness Freaks may change or discontinue, temporarily or permanently, any feature or component of the Fitness Freaks Service at any time without notice. Fitness Freaks is not liable to you or to any third party for any modification, suspension, or discontinuance of any feature or component of the Fitness Freaks Service. We reserve the right to determine the timing and content of software updates, which may be automatically downloaded and installed by Fitness Freaks applications without prior notice to you.
            <br/><br/>10. Limitation of Liability. In no event will Fitness Freaks be liable for direct, indirect, incidental, consequential, punitive, exemplary or special damages arising out of or relating to this agreement. Fitness Freaks's entire liability, and your entire and exclusive remedy, under this Agreement for any damages from any cause whatsoever shall in no event exceed the service fees actually paid by you in the most recent three (3) month period.
            <br/><br/>11. Arbitration. Any dispute concerning the parties' rights and responsibilities under this Agreement which the parties cannot resolve within thirty (30) days shall be directed to binding arbitration administered by, and pursuant to the rules of, the American Arbitration Association ("AAA") in San Francisco, CA, with all expenses being shared equally by the parties. Judgment upon any AAA award may be entered into San Francisco Superior Court.
            <br/><br/>12. Governing Law and Severability. This Agreement shall be governed and interpreted in accordance with California law. If for any reason a court of competent jurisdiction finds any provision of this Agreement, or portion thereof, to be unenforceable, that provision of the Agreement shall be enforced to the maximum extent permissible so as to effect the intent of the parties, and the remainder of this Agreement shall continue in full force and effect.
            <br/><br/>13. Notices. Communications and notices required or permitted under this Agreement shall be deemed delivered when delivered electronically to info@fitnessfreaks.com

            <br/><br/>14. Force Majeure. Neither party shall be liable for any failure of or delay in the performance of this Agreement for the period that such failure or delay is due to acts of God, public enemy, civil war, strikes or labor disputes, or any other cause beyond the parties' reasonable control.  Each party agrees to notify the other party promptly of the occurrence of any such cause and to carry out this Agreement as promptly as practicable after such cause is terminated.
            <br/><br/>15. Complete Agreement; Non-Waiver. This Agreement (as defined above) constitutes the entire agreement between the parties. This Agreement supersedes and replaces any and all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter. This Agreement can only be amended by specific written amendment signed by both parties.  Any failure by either party to require strict performance by the other of any provision of this Agreement shall not constitute a waiver of such provision or thereafter affect the parties full rights to require strict performance.
            </div>
            </div>
      </div>





    );
  }

}

export default Terms
