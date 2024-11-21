"use client";

import { auth } from "@/config/firebase/firebase";
import { RecaptchaVerifier, PhoneAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const OTPVerifier = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);
  const [isOtpSending, setIsOtpSending] = useState(false); // To prevent multiple requests

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recaptchaVerifier1 = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved", response);
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired");
          },
        }
      );
      setRecaptchaVerifier(recaptchaVerifier1);
    }

    return () => {
      if (recaptchaVerifier) {
        recaptchaVerifier.clear();
      }
    };
  }, []);

  const handleSendOtp = async () => {
    if (!phoneNumber || isOtpSending) return;

    // Prevent sending OTP too frequently
    setIsOtpSending(true);

    try {
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier!
      );

      setVerificationId(verificationId);
      setIsOtpSent(true);

      // Cooldown: prevent sending OTP again for 1 minute
      setTimeout(() => setIsOtpSending(false), 60000);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP");
      setIsOtpSending(false); // Reset sending state
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || !verificationId) return;

    try {
      const provider = new PhoneAuthProvider(auth);
      const credential = provider.credential(verificationId, otp);
      const userCredential = await auth.signInWithCredential(credential);

      console.log("User signed in:", userCredential);
      // Proceed to next steps (redirect or show success)
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col items-center">
      <h1 className="mt-2 text-xl">Sign In</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        className="input !border mt-2"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        className="btn mt-2"
        onClick={handleSendOtp}
        disabled={isOtpSending} // Disable button while sending OTP
      >
        {isOtpSending ? "Sending..." : "Send OTP"}
      </button>

      {isOtpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}

      {/* Container for ReCaptcha */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default OTPVerifier;
