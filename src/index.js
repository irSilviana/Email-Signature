function capitalizeFirstLetter(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}

function handleSubmit(event) {
  event.preventDefault();

  let firstName = capitalizeFirstLetter(
    document.querySelector("#firstName-input").value
  );
  let lastName = capitalizeFirstLetter(
    document.querySelector("#lastName-input").value
  );
  let jobTitle = capitalizeFirstLetter(
    document.querySelector("#jobTitle-input").value
  );
  let customField = capitalizeFirstLetter(
    document.querySelector("#customField-input").value
  );
  let department = capitalizeFirstLetter(
    document.querySelector("#department-input").value
  );
  let officePhone = document.querySelector("#officePhone-input").value;
  let mobilePhone = document.querySelector("#mobilePhone-input").value;
  let emailAddress = document.querySelector("#emailAddress-input").value;

  let signatureOutput = document.querySelector("#signatureHtml");

  function checkDepartment() {
    if (department !== "") {
      department = `${department} | `;
    }
  }
  checkDepartment();

  let phoneIcon = `<span
                    style="
                      display: block;
                      background-color: #84ac7a;
                    "
                    ><img
                      style="
                        display: block;
                        background-color: #84ac7a;
                      "
                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>`;

  function showPhoneIcon() {
    if (officePhone !== "" || mobilePhone !== "") {
      return phoneIcon;
    } else {
      phoneIcon = ``;
    }
  }
  showPhoneIcon();

  let phoneNumber = "";

  let officePh = ` <a
                    style="
                    font-size: medium;font-family: Arial;
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="tel:${officePhone}"
                    >${officePhone}</a>`;

  let mobilePh = `<a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="tel:${mobilePhone}"
                    >${mobilePhone}</a>`;

  function checkPhoneNumber() {
    if (officePhone !== "" && mobilePhone !== "") {
      phoneNumber = ` ${officePh} | ${mobilePh}`;
    } else if (officePhone === "" && mobilePhone !== "") {
      phoneNumber = `${mobilePh}`;
    } else if ((officePhone !== "") & (mobilePhone === "")) {
      phoneNumber = `${officePh}`;
    } else {
      return phoneNumber;
    }
  }

  checkPhoneNumber();

  let card = document.querySelector("#card");
  let copySignature = document.querySelector("#copySignature");

  card.setAttribute("class", "visible");
  copySignature.setAttribute("class", "visible");

  let signature = document.querySelector("#signatureGenerated");

  signature.innerHTML = `
  <table style="min-width:500px; vertical-align: -webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
    <tbody>
      <tr style="height: 130px">
        <td style="height: 130px"><a href="https://naturalwayofliving.com/" target="_blank">
          <img
            style="
              max-width: 130px;
              display: block;
              margin: 0 auto;
            "
            src="https://nwl-signature.netlify.app/images/nwl_circle_green.png"
            alt=""
            width="130"
          /></a>
        </td>
        <td style="height: 130px; width: 25px">&nbsp;</td>
        <td
          style="
            height: 110px;
            width: 100%;
            border-bottom: 1px solid #84ac7a;
            border-left: none;
            display: block;
          "
        >
          <h3
            style="
              margin: 0px;
              font-size: 18px;
              color: #000000; text-transform: capitalize;
            "
          >
            ${firstName} ${lastName}
          </h3>
          <p
            style="
              margin: 0px;
              color: #000000;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
            "
          >
            ${jobTitle}
          </p>
          <p
            style="
              color: #000000;
              margin: 0px;
              font-size: 14px;
              line-height: 22px; text-transform: capitalize;
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
              line-height: 22px; text-transform: capitalize;
            "
          >
            <strong
              >${department}Natural Way Of Living</strong
            >
          </p>
        </td>
      </tr>
      <tr style="height: 22px">
        <td style="height: 22px; text-align: center">
          <a
            style="
              display: inline-block;
              padding: 0px;
              background-color: #8fadc9;
            "
            href="https://www.facebook.com/nwlcommunity/" target="_blank"
            ><img
              style="
                background-color: #8fadc9;
                max-width: 135px;
                display: block;
              "
              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
              alt="facebook"
              height="24" /></a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: #8fadc9;
            "
            href="https://www.linkedin.com/company/naturalwayofliving/" target="_blank"
            ><img
              style="
                background-color: #8fadc9;
                max-width: 135px;
                display: block;
              "
              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
              alt="linkedin"
              height="24" /></a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: #8fadc9;
            "
            href="https://www.instagram.com/naturalwayofliving/" target="_blank"
            ><img
              style="
                background-color: #8fadc9;
                max-width: 135px;
                display: block;
              "
              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
              alt="instagram"
              height="24" /></a
          >&nbsp;<a
            style="
              display: inline-block;
              padding: 0px;
              background-color: #8fadc9;
            "
            href="https://www.youtube.com/NaturalWayofLiving" target="_blank"
            ><img
              style="
                background-color: white;
                max-width: 135px;
                display: block;
              "
              src="https://www.dropbox.com/s/x96dpne8n1v91zw/biggeryoutube.png?raw=1"
              alt="youtube"
              height="24"
          /></a>
        </td>
        <td style="height: 22px">&nbsp;</td>
        <td style="height: 22px">
          <table style="vertical-align: -webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td>
                  ${phoneIcon}
                </td>
                <td>&nbsp;</td>
                <td>
                 ${phoneNumber}
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    style="
                      display: block;
                      background-color: #84ac7a;
                    "
                    ><img
                      style="
                        display: block;
                        background-color: #84ac7a;
                      "
                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>
                </td>
                <td>&nbsp;</td>
                <td>
                  <a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="mailto:${emailAddress}@naturalwayofliving.com"
                    >${emailAddress}@naturalwayofliving.com</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    style="
                      display: block;
                      background-color: #84ac7a;
                    "
                    ><img
                      style="
                        display: block;
                        background-color: #84ac7a;
                      "
                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                      alt=""
                      width="13"
                  /></span>
                </td>
                <td>&nbsp;</td>
                <td>
                  <a
                    style="
                      text-decoration: none;
                      color: #000000;
                      font-size: 12px;
                    "
                    href="//www.naturalwayofliving.com" target="_blank"
                    >www.naturalwayofliving.com</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  `;

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
