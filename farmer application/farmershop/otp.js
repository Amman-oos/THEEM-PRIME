let generatedOtp = null;

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

document.getElementById('sendOtpBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const msg = document.getElementById('message');

  msg.style.color = 'red';
  if(name.length < 2) {
    msg.textContent = 'Enter a valid name.';
    return;
  }
  if(!isValidPhone(phone)) {
    msg.textContent = 'Enter a valid 10-digit phone number.';
    return;
  }

  generatedOtp = Math.floor(100000 + Math.random()*900000);
  alert("Your OTP is: " + generatedOtp);

  document.getElementById('otpSection').style.display = 'block';
  msg.textContent = 'OTP sent! Enter it below.';
});

document.getElementById('verifyOtpBtn').addEventListener('click', () => {
  const enteredOtp = document.getElementById('otp').value.trim();
  const msg = document.getElementById('message');

  if(enteredOtp === generatedOtp.toString()) {
    localStorage.setItem('farmerShopUser', JSON.stringify({
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim()
    }));
    window.location.href = 'home.html';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Incorrect OTP, try again.';
  }
});
