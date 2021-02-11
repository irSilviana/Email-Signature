function handleSubmit(event) {
  event.preventDefault();

  let firstName = document.querySelector("#firstName-input").value;
  let lastName = document.querySelector("#lastName-input").value;
  let jobTitle = document.querySelector("#jobTitle-input").value;
  let customField = document.querySelector("#customField-input").value;
  let department = document.querySelector("#department-input").value;
  let officePhone = document.querySelector("#officePhone-input").value;
  let mobilePhone = document.querySelector("#mobilePhone-input").value;
  let emailAddress = document.querySelector("#emailAddress-input").value;

  let signature = document.querySelector("#signatureGenerated");
  signature.innerHTML = ` 
   <table>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="https://naturalwayofliving.com/"
                                target="_blank"
                              >
                                <img
                                  src="/images/nwl_circle_green.png"
                                  alt="Natural Way of Living Logo"
                                  class="logo"
                                />
                              </a>
                              <div class="social-media">
                                <a
                                  href="https://www.facebook.com/nwlcommunity/"
                                  target="_blank"
                                  ><img
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                    alt="facebook"
                                /></a>
                                <a
                                  href="https://www.linkedin.com/company/naturalwayofliving/"
                                  target="_blank"
                                  ><img
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                    alt="linkedin"
                                /></a>
                                <a
                                  href="https://www.instagram.com/naturalwayofliving/"
                                  target="_blank"
                                  ><img
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                    alt="instagram"
                                /></a>
                                <a
                                  href="https://www.youtube.com/naturalwayofliving"
                                  target="_blank"
                                  ><img
                                    class="youtube"
                                    src="https://www.dropbox.com/s/x96dpne8n1v91zw/biggeryoutube.png?raw=1"
                                    alt="youtube"
                                    height="24"
                                /></a>
                              </div>
                            </td>

                            <!-- right column -->
                            <td>
                              <h3>${firstName} ${lastName}</h3>
                              <ul>
                                <li id="jobTitle">${jobTitle}</li>
                                <li id="customField">${customField}</li>
                              </ul>
                              <h2>
                                <span id="department">${department}</span> |
                                Natural Way of Living
                              </h2>
                              <hr />
                              <div class="contact">
                                <ul>
                                  <li>
                                    <img
                                      class="contact-icon"
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                    /><a
                                      href="tel:${officePhone}"
                                      id="officePhone"
                                      >${officePhone}</a
                                    >
                                    |
                                    <a
                                      href="tel:${mobilePhone}"
                                      id="mobilePhone"
                                      >${mobilePhone}</a
                                    >
                                  </li>
                                  <li>
                                    <img
                                      class="contact-icon"
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                    /><a
                                      href="mailto:${emailAddress}@naturalwayofliving.com"
                                      id="emailAddress"
                                      >${emailAddress}@naturalwayofliving.com</a
                                    >
                                  </li>
                                  <li>
                                    <img
                                      class="sc-iRbamj blSEcj contact-icon"
                                      style="
                                        display: inline;
                                        background-color: #84ac7a;
                                      "
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                      width="13"
                                    /><a
                                      href="https://naturalwayofliving.com"
                                      target="_blank"
                                      >www.naturalwayofliving.com</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
  
`;
}

document.querySelector("#submit").addEventListener("click", handleSubmit);

function copy() {
  let copyText = document.querySelector("#signatureHtml");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Signature copied!");
}

document.querySelector("#copyToClipboard").addEventListener("click", copy);
