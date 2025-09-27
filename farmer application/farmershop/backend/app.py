from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)

otp_store = {}

# Demo Aadhaar verification
def verify_aadhaar_mock(aadhaar):
    time.sleep(0.3)
    if not aadhaar.isdigit() or len(aadhaar) != 12:
        return {"success": False, "message": "Invalid Aadhaar"}
    # last digit even => valid
    return {"success": True} if int(aadhaar[-1]) % 2 == 0 else {"success": False, "message": "Aadhaar not found"}

@app.route("/send-otp", methods=["POST"])
def send_otp():
    data = request.json or {}
    phone = data.get("phone","")
    if not phone.isdigit() or len(phone)!=10:
        return jsonify({"status":"error","message":"Invalid phone"}),400
    otp = str(random.randint(100000,999999))
    otp_store[phone] = otp
    # demo: OTP returned in response, in real use SMS gateway
    return jsonify({"status":"success","message":"OTP sent (demo)","otp":otp})

@app.route("/verify-aadhaar", methods=["POST"])
def verify_aadhaar():
    data = request.json or {}
    aadhaar = data.get("aadhaar","")
    res = verify_aadhaar_mock(aadhaar)
    if res["success"]:
        return jsonify({"status":"success"})
    return jsonify({"status":"error","message":res["message"]}),400

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
