"use client";

import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [otpSent, setOtpSent] = useState(false); // Tracks OTP step
  const [generatedOtp, setGeneratedOtp] = useState(""); // Stores the OTP sent from server
  const [userOtp, setUserOtp] = useState(""); // Stores OTP input by the user
  const [email, setEmail] = useState(""); // Stores user's email
  const [loading, setLoading] = useState(false); // Tracks loading state

  const validateInputs = (
    userName: string,
    userEmail: string,
    password: string
  ) => {
    if (!userName || !userEmail || !password) {
      alert("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userName = form.userName.value.trim();
    const userEmail = form.userEmail.value.trim();
    const password = form.password.value.trim();

    if (!validateInputs(userName, userEmail, password)) return;

    setEmail(userEmail);

    try {
      setLoading(true);
      const response = await axios.post("/api/send-otp", { email: userEmail });

      if (response.status === 200) {
        setOtpSent(true);
        setGeneratedOtp(response.data.otp); // Save generated OTP in state
        alert("OTP sent to your email!");
      } else {
        alert(response.data?.error || "Failed to send OTP.");
      }
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      alert(
        error.response?.data?.error || "Error sending OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtpHandler = () => {
    if (!userOtp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    if (userOtp === generatedOtp) {
      alert("OTP verified! Signup successful.");
      setUserOtp(""); // Clear user input OTP
      setGeneratedOtp(""); // Clear the generated OTP
      setOtpSent(false); // Reset the form for a new signup
      setEmail(""); // Clear email
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="w-11/12 mx-auto max-w-sm">
        <h1 className="text-center font-bold text-3xl">Create an Account</h1>
        {!otpSent ? (
          <form onSubmit={formSubmitHandler} className="mt-6 space-y-4">
            <div className="form-control">
              <label htmlFor="userName" className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="User name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="userEmail" className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                placeholder="User email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn w-full ${loading ? "bg-gray-400" : "bg-purple-600"} text-white`}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Sign Up"}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              Enter OTP
            </h2>
            <div className="form-control">
              <label htmlFor="otp" className="label">
                <span className="label-text">OTP</span>
              </label>
              <input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                className="input input-bordered"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={verifyOtpHandler}
                className={`btn w-full ${loading ? "bg-gray-400" : "bg-purple-600"} text-white`}
                disabled={loading}
              >
                Verify OTP
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Signup;
