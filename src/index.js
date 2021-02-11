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
  let signatureOutput = document.querySelector("#signatureHtml");

  let signature = document.querySelector("#signatureGenerated");

  signature.innerHTML = `<table
                        style="
                          vertical-align: -webkit-baseline-middle;
                          font-size: medium;
                          font-family: Arial;
                        "
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td>
                            <a href="https://naturalwayofliving.com" target="_blank">
                              <img
                                style="max-width: 130px; text-align: center"
                                role="presentation"
                                src="../images/nwl_circle_green.png"
                              /></a>
                            </td>
                            <td width="30"></td>
                            <td>
                              <h3
                                style="
                                  margin: 0px;
                                  font-size: 18px;
                                  color: #000000;
                                   text-transform: capitalize;
                                "
                              >
                                ${firstName} ${lastName}
                              </h3>
                              <p
                                style="
                                  margin: 0px;
                                  color: #000000;
                                  font-size: 14px;
                                  line-height: 22px;
                                   text-transform: capitalize;
                                "
                              >
                                ${jobTitle}
                              </p>
                              <p
                                style="
                                  color: #000000;
                                  margin: 0px;
                                  font-size: 14px;
                                  line-height: 22px;
                                   text-transform: capitalize;
                                "
                              >
                                ${customField}
                              </p>
                              <p
                                style="
                                  margin: 0px;
                                  font-weight: 500;
                                  color: #000000;
                                  font-size: 14px;
                                  line-height: 22px;
                                   text-transform: capitalize;
                                "
                              >
                                <b
                                  >${department}&nbsp|&nbspNatural Way Of
                                  Living</b
                                >
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td height="1px;"></td>
                            <td></td>
                            <td><hr style="border: 0.5px solid #84ab79; margin-top: 7px;" /></td>
                          </tr>
                          <tr>
                            <td style="text-align: center">
                              <a
                                class="social-media"
                                style="
                                  display: inline-block;
                                  padding: 0px;
                                  background-color: #8fadc9;
                                "
                                href="https://www.facebook.com/nwlcommunity/" target="_blank"
                                ><img
                                  class="social-media"
                                  style="
                                    background-color: #8fadc9;
                                    max-width: 135px;
                                    display: block;
                                  "
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                  alt="facebook"
                                  height="24"
                              /></a>
                              <a
                                class="social-media"
                                style="
                                  display: inline-block;
                                  padding: 0px;
                                  background-color: #8fadc9;
                                "
                                href="https://www.linkedin.com/company/naturalwayofliving/" target="_blank"
                                ><img
                                  class="social-media"
                                  style="
                                    background-color: #8fadc9;
                                    max-width: 135px;
                                    display: block;
                                  "
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                  alt="linkedin"
                                  height="24"
                              /></a>
                              <a
                                class="social-media"
                                style="
                                  display: inline-block;
                                  padding: 0px;
                                  background-color: #8fadc9;
                                "
                                href="https://www.instagram.com/naturalwayofliving/" target="_blank"
                                ><img
                                  class="social-media"
                                  style="
                                    background-color: #8fadc9;
                                    max-width: 135px;
                                    display: block;
                                  "
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                  alt="instagram"
                                  height="24" /></a
                              ><a
                                class="social-media"
                                style="
                                  display: inline-block;
                                  padding: 0px;
                                  background-color: #8fadc9;
                                "
                                href="https://www.youtube.com/NaturalWayofLiving" target="_blank"
                                ><img
                                  class="social-media"
                                  style="
                                    background-color: #ffffff;
                                    max-width: 135px;
                                    display: block;
                                    padding-left: 5px;
                                  "
                                  src="https://www.dropbox.com/s/x96dpne8n1v91zw/biggeryoutube.png?raw=1"
                                  alt="youtube"
                                  height="24"
                              /></a>
                            </td>
                            <td></td>
                            <td>
                              <p style="margin: 0; padding: 0">
                                <span
                                  style="
                                    display: inline-block;
                                    background-color: #84ac7a;
                                  "
                                  ><img
                                    style="
                                      display: block;
                                      background-color: #84ac7a;
                                    "
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                    width="13"
                                /></span>
                                <a
                                  style="
                                    text-decoration: none;
                                    color: #000000;
                                    font-size: 12px;
                                    padding-left: 5px;
                                  "
                                  href="tel:${officePhone}"
                                  >${officePhone}</a
                                >
                                |
                                <a
                                  style="
                                    text-decoration: none;
                                    color: #000000;
                                    font-size: 12px;
                                  "
                                  href="tel:${mobilePhone}"
                                  >${mobilePhone}</a
                                >
                              </p>
                              <p style="margin: 0; padding: 0">
                                <span
                                  style="
                                    display: inline-block;
                                    background-color: #84ac7a;
                                  "
                                  ><img
                                    style="
                                      display: block;
                                      background-color: #84ac7a;
                                    "
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                    width="13" /></span
                                ><a
                                  style="
                                    text-decoration: none;
                                    color: #000000;
                                    font-size: 12px;
                                    padding-left: 10px;
                                  "
                                  href="mailto:${emailAddress}@naturalwayofliving.com"
                                  >${emailAddress}@naturalwayofliving.com</a
                                >
                              </p>
                              <p style="margin: 0; padding: 0">
                                <span
                                  style="
                                    display: inline-block;
                                    background-color: #84ac7a;
                                  "
                                  ><img
                                    style="
                                      display: block;
                                      background-color: #84ac7a;
                                    "
                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                    width="13"
                                /></span>
                                <a
                                  style="
                                    text-decoration: none;
                                    text-transform: none;
                                    color: #000000;
                                    font-size: 12px;
                                    padding-left: 5px;
                                  "
                                  href="//www.naturalwayofliving.com" target="_blank"
                                  >www.naturalwayofliving.com</a
                                >
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>`;

  signatureOutput.innerHTML = signature.innerHTML;
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
