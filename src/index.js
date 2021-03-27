function capitalizeFirstLetter(words) {
  let separateWord = words.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}

function handleSubmit(firstName, jobTitle, emailAddress) {
  let lastName = capitalizeFirstLetter(
    document.querySelector("#lastName-input").value
  );
  let customField = document.querySelector("#customField-input").value;
  let department = document.querySelector("#department-input").value;
  let officePhone = document.querySelector("#officePhone-input").value;
  let mobilePhone = document.querySelector("#mobilePhone-input").value;

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
        src="https://nwl-signature.netlify.app/images/phone-icon-2x.png"
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

  // update visibility
  let card = document.querySelector("#card");
  let copySignature = document.querySelector("#copySignature");
  let copySignature2 = document.querySelector("#copySignature2");

  card.setAttribute("class", "visible");
  copySignature.setAttribute("class", "visible");
  copySignature2.setAttribute("class", "visible");

  let signature = document.querySelector("#signatureGenerated");

  // generate the resulted signature
  signature.innerHTML = `<table style="min-width:500px; vertical-align:-webkit-baseline-middle; font-size: medium;font-family: Arial;" cellspacing="0" cellpadding="0">
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
              src="https://nwl-signature.netlify.app/images/facebook-icon-2x.png"
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
              src="https://nwl-signature.netlify.app/images/linkedin-icon-2x.png"
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
              src="https://nwl-signature.netlify.app/images/instagram-icon-2x.png"
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
              src="https://nwl-signature.netlify.app/images/biggeryoutube.png"
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
                      src="https://nwl-signature.netlify.app/images/email-icon-2x.png"
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
                      src="https://nwl-signature.netlify.app/images/link-icon-2x.png"
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

  // write the generated signature into the signatureOutput box
  let signatureOutput = document.querySelector("#signatureHtml");
  signatureOutput.innerHTML = signature.innerHTML;
}

function copy() {
  let copyText = document.querySelector("#signatureHtml");
  let button = document.querySelector("#copyToClipboard");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(
    `Code Copied! 🖱 Paste (Ctr+V) this code into the signature box in your Thunderbird`
  );
  button.innerHTML = "Code copied!";
}
let copyToClipboard = document
  .querySelector("#copyToClipboard")
  .addEventListener("click", copy);

// Function to Copy the signature into the clipboard
document.addEventListener("DOMContentLoaded", function () {
  // Query the elements
  let copyButton = document.querySelector("#copyToClipboard2");
  let codeEle = document.querySelector("#signatureGenerated");

  copyButton.addEventListener("click", function () {
    let selection = window.getSelection();

    // Save the current selection
    let currentRange =
      selection.rangeCount === 0 ? null : selection.getRangeAt(0);

    // Select the text content of code element
    let range = document.createRange();
    range.selectNodeContents(codeEle);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy to the clipboard
    try {
      document.execCommand("copy");
      copyButton.innerHTML = "Signature copied!";
      alert(
        "Signature Copied! 🖱 Paste (Ctr+V) it into the signature box in your Zimbra"
      );
    } catch (err) {
      // Unable to copy
      copyButton.innerHTML = "Try again, Copy";
    } finally {
      // Restore the previous selection
      selection.removeAllRanges();
      currentRange && selection.addRange(currentRange);
    }
  });
});

// check the required field
function required(event) {
  event.preventDefault();

  let firstName = capitalizeFirstLetter(
    document.querySelector("#firstName-input").value
  );
  let jobTitle = document.querySelector("#jobTitle-input").value;
  let emailAddress = document.querySelector("#emailAddress-input").value;

  if (firstName === "" || jobTitle === "" || emailAddress === "") {
    alert("Please fill in all the required fields ☺🙏🏼");
  } else {
    handleSubmit(firstName, jobTitle, emailAddress);
  }
}
document.querySelector("#submit").addEventListener("click", required);

// Language Selection
//set to Bahasa Indonesia
function setBahasa(event) {
  event.preventDefault();

  let bahasa = document.querySelector("#bahasaIndonesia");
  let english = document.querySelector("#english");
  let menu = document.querySelector("#nav-bar");

  bahasa.classList.add("active");
  english.classList.remove("active");

  menu.innerHTML = ` <a
              href="https://exchange.naturalwayofliving.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Login ke Zimbra</a
            >&nbsp;|&nbsp;
            <a
              href="./files/Tutorial to setup new Email ver 5.5 - Bahasa.pdf"
              target="_blank"
              >Tutorial</a
            >&nbsp;|&nbsp;
            <a
              href="https://youtu.be/lbY43AIWxOw"
              target="_blank"
              rel="noopener noreferrer"
              >Video Tutorial
            </a>
            &nbsp;|&nbsp;
            <!-- Calendly link widget begin -->
            <link
              href="https://assets.calendly.com/assets/external/widget.css"
              rel="stylesheet"
            />
            <script
              src="https://assets.calendly.com/assets/external/widget.js"
              type="text/javascript"
            ></script>
            <a
              href=""
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/irfani-silviana/nwl-email-support'});return false;"
              >Jadwalkan Live Support</a
            >
            <!-- Calendly link widget end -->`;

  document.querySelector(
    '[for="firstName"]'
  ).innerHTML = `<label for="firstName" class="col-sm col-form-label">Nama Depan<sup class="required">*(wajib)</sup></label>`;
  document.querySelector('[for="lastName"]').innerHTML = "Nama Belakang";
  document.querySelector(
    '[for="jobTitle"]'
  ).innerHTML = `<label for="jobTitle" class="col-sm col-form-label"
                      >Jenis Pekerjaan<sup class="required">*(wajib)</sup></label>`;
  document.querySelector('[for="customField"]').innerHTML = "Keterangan";
  document.querySelector('[for="department"]').innerHTML = "Departemen";

  document.querySelector(
    '[for="officePhone"]'
  ).innerHTML = `<label for="officePhone" class="col-sm col-form-label"
                      >Telepon Kantor
                      <sub>
                        <em>(sertakan kode negara)</em>
                      </sub>
                    </label>`;
  document.querySelector(
    '[for="mobilePhone"]'
  ).innerHTML = `<label for="mobilePhone" class="col-sm col-form-label"
                      >Handphone<sub>
                        <em>(sertakan kode negara)</em>
                      </sub></label>`;

  document.querySelector(
    '[for="emailAddress"]'
  ).innerHTML = `<label for="emailAddress" class="col-sm col-form-label"
                      >Email<sup class="required">*(wajib)</sup>
                      <address></address
                    ></label>`;

  let x = document.querySelectorAll("span.instruction");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "Klik tombol ini --->";
  }
}

document.querySelector("#bahasaIndonesia").addEventListener("click", setBahasa);

//set to English
function setEnglish(event) {
  event.preventDefault();

  let bahasa = document.querySelector("#bahasaIndonesia");
  let english = document.querySelector("#english");
  let menu = document.querySelector("#nav-bar");

  english.classList.add("active");
  bahasa.classList.remove("active");

  menu.innerHTML = `  <a
              href="https://exchange.naturalwayofliving.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Login to Zimbra</a
            >&nbsp;|&nbsp;
            <a
              href="./files/Tutorial to setup new Email ver 5.5.pdf"
              target="_blank"
              >Tutorial</a
            >&nbsp;|&nbsp;
            <a
              href="https://youtu.be/H4zSvt6z-so"
              target="_blank"
              rel="noopener noreferrer"
              >Video Tutorial
            </a>
            &nbsp;|&nbsp;
            <!-- Calendly link widget begin -->
            <link
              href="https://assets.calendly.com/assets/external/widget.css"
              rel="stylesheet"
            />
            <script
              src="https://assets.calendly.com/assets/external/widget.js"
              type="text/javascript"
            ></script>
            <a
              href=""
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/irfani-silviana/nwl-email-support'});return false;"
              >Schedule time for Live Support</a
            >
            <!-- Calendly link widget end -->`;

  document.querySelector(
    '[for="firstName"]'
  ).innerHTML = `<label for="firstName" class="col-sm col-form-label">First Name<sup class="required">*(required)</sup></label>`;
  document.querySelector('[for="lastName"]').innerHTML = "Last Name";
  document.querySelector(
    '[for="jobTitle"]'
  ).innerHTML = `<label for="jobTitle" class="col-sm col-form-label"
                      >Job Title<sup class="required">*(required)</sup></label
                    >`;
  document.querySelector('[for="customField"]').innerHTML = "Custom Field";
  document.querySelector('[for="department"]').innerHTML = "Departement";

  document.querySelector(
    '[for="officePhone"]'
  ).innerHTML = `<label for="officePhone" class="col-sm col-form-label"
                      >Office Phone
                      <sub>
                        <em>(include the country code)</em>
                      </sub>
                    </label>`;
  document.querySelector(
    '[for="mobilePhone"]'
  ).innerHTML = `<label for="mobilePhone" class="col-sm col-form-label"
                      >Mobile Phone<sub>
                        <em>(include the country code)</em>
                      </sub></label
                    >`;

  let x = document.querySelectorAll("span.instruction");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = "Click this button --->";
  }
}

document.querySelector("#english").addEventListener("click", setEnglish);
