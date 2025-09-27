// shopkeeper_login.js

let generatedOTP = null;

function showMsg(msg, err=false){
  const el = document.getElementById("msg");
  el.style.color = err ? "red" : "green";
  el.innerText = msg;
}

// Send OTP demo (alert)
document.getElementById("sendBtn").addEventListener("click", ()=>{
  const phone = document.getElementById("phone").value.trim();
  if(!/^\d{10}$/.test(phone)){
    showMsg("Enter valid 10-digit phone", true);
    return;
  }
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  alert("Your OTP is (demo): " + generatedOTP);  // ✅ alert par show hoga
  document.getElementById("otpSection").style.display = "block";
  showMsg("OTP sent (demo only). Fill Aadhaar, PAN, GST, Shop Name & Type.");
});

// Verify OTP & other fields
document.getElementById("verifyBtn").addEventListener("click", ()=>{
  const otp = document.getElementById("otp").value.trim();
  const aadhaar = document.getElementById("aadhaar").value.trim();
  const fileInput = document.getElementById("imageUpload");
  const pan = document.getElementById("pan").value.trim().toUpperCase();
  const gst = document.getElementById("gst").value.trim();
  const shopName = document.getElementById("shopName").value.trim();
  const shopType = document.getElementById("shopType").value.trim();

  if(!generatedOTP){ showMsg("Click Send OTP first", true); return; }
  if(otp !== generatedOTP){ showMsg("Invalid OTP", true); return; }

  // Aadhaar validation (12 digits demo)
  if(!/^\d{12}$/.test(aadhaar)){ showMsg("Enter valid 12-digit Aadhaar", true); return; }

  // PAN validation
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if(!panRegex.test(pan)){ showMsg("Invalid PAN Card", true); return; }

  // GST validation
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i;
  if(!gstRegex.test(gst)){ showMsg("Invalid GST ID", true); return; }

  if(!shopName){ showMsg("Shop Name required", true); return; }
  if(!shopType){ showMsg("Shop Type required", true); return; }

  // Image check
  if(!fileInput.files.length){ showMsg("Upload shop/image proof", true); return; }

  // Success
  showMsg("All checks passed. Redirecting...", false);
  setTimeout(() => {
    window.location.href = "shopkeeper_home.html";
  }, 800);
});

