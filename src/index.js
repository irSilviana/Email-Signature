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
  
`;
}

document.querySelector("#submit").addEventListener("click", handleSubmit);

function copy() {
  let copyText = document.querySelector("#signatureGenerated");
  console.log(copyText);

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Signature copied!");
}

document.querySelector("#copyToClipboard").addEventListener("click", copy);
