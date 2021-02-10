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

  document.querySelector("#signatureGenerated").innerHTML = ` 
<table >
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
                    ><i class="fab fa-facebook-square"></i
                ></a>
                <a
                    href="https://www.linkedin.com/company/naturalwayofliving/"
                    target="_blank"
                    ><i class="fab fa-linkedin"></i
                ></a>
                <a
                    href="https://www.instagram.com/naturalwayofliving/"
                    target="_blank"
                    ><i class="fab fa-instagram-square"></i
                ></a>
                <a
                    href="https://www.youtube.com/naturalwayofliving"
                    target="_blank"
                    ><i class="fab fa-youtube-square"></i
                ></a>
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
                <span id="department">${department}</span> | Natural
                Way of Living
                </h2>
                <hr />
                <div class="contact">
                <ul>
                    <li>
                    <i class="fas fa-phone-alt contact-icon"></i
                    ><a href="tel:${officePhone}" id="officePhone"
                        >${officePhone}</a
                    >
                    |
                    <a href="tel:${mobilePhone}" id="mobilePhone"
                        >${mobilePhone}</a
                    >
                    </li>
                    <li>
                    <i class="fas fa-envelope contact-icon"></i
                    ><a
                        href="mailto:${emailAddress}@naturalwayofliving.com"
                        id="emailAddress"
                        >${emailAddress}@naturalwayofliving.com</a
                    >
                    </li>
                    <li>
                    <i class="fas fa-link contact-icon"></i
                    ><a
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
</table>`;
}

document.querySelector("#submit").addEventListener("click", handleSubmit);

function copy() {
  let copyText = document.getElementById("signatureGenerated");
  console.log(copyText);

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Signature copied!");
}

document.querySelector("#copyToClipboard").addEventListener("click", copy);
