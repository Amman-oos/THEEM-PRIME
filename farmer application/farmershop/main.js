let generatedOTP = null;

function showMessage(msg, isError=false){
  const el = document.getElementById("message");
  el.style.color = isError ? "red" : "green";
  el.innerText = msg;
}

document.getElementById("role").addEventListener("change", function(){
  const role = this.value;
  document.getElementById("shopFields").style.display = (role === "shopkeeper") ? "block" : "none";
  document.getElementById("aadhaar").style.display = (role === "farmer") ? "block" : "none";
});

function sendOTP(){
  const phone = document.getElementById("phone").value.trim();
  if(!/^\d{10}$/.test(phone)){ showMessage("Enter valid 10-digit phone", true); return; }
  generatedOTP = Math.floor(100000 + Math.random()*900000).toString();
  alert("Your OTP is: " + generatedOTP);
  document.getElementById("otp-section").style.display = "block";
  showMessage("OTP sent (demo). Enter OTP to login.");
}

function verifyOTP(){
  const otp = document.getElementById("otp").value.trim();
  const role = document.getElementById("role").value;
  const aadhaar = document.getElementById("aadhaar").value.trim();

  if(!generatedOTP){ showMessage("Click Send OTP first", true); return; }
  if(otp !== generatedOTP){ showMessage("Invalid OTP", true); return; }

  if(role === "farmer"){
    if(!/^\d{12}$/.test(aadhaar)){ showMessage("Enter valid 12-digit Aadhaar", true); return; }
    window.location.href = "farmer_home.html";
  } else {
    const gst = document.getElementById("gst").value.trim();
    const shopName = document.getElementById("shopName").value.trim();
    const shopType = document.getElementById("shopType").value.trim();
    const pan = document.getElementById("pan").value.trim();

    // Simple GST & PAN validation (format)
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$/i;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;

    if(!gst || !shopName || !shopType || !pan){ showMessage("Fill all fields", true); return; }
    if(!gstRegex.test(gst)){ showMessage("Invalid GST ID format", true); return; }
    if(!panRegex.test(pan)){ showMessage("Invalid PAN format", true); return; }

    window.location.href = "shopkeeper_home.html";
  }
}
