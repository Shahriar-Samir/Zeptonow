"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const Signup = () => {
  const [otpSent, setOtpSent] = useState(false); // Tracks OTP step
  const [generatedOtp, setGeneratedOtp] = useState(""); // Stores the OTP sent from server
  const [userOtp, setUserOtp] = useState(""); // Stores OTP input by the user
  const [name, setName] = useState(""); // Stores user's email
  const [email, setEmail] = useState(""); // Stores user's email
  const [password, setPassword] = useState(""); // Stores user's email
  const [loading, setLoading] = useState(false); // Tracks loading state

  const validateInputs = (
    userName: string,
    userEmail: string,
    password: string
  ) => {
    if (!userName || !userEmail || !password) {
      toast.error("All fields are required.");

      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userEmail)) {
      toast.error("Please enter a valid email address.");

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

    try {
      const res = await axios.post("http://localhost:3000/api/emailExist", {
        email: userEmail,
      });

      if (res.data.isExist) {
        return toast.error("Email already exist");
      }

      if (!validateInputs(userName, userEmail, password)) return;

      setName(userName);
      setEmail(userEmail);
      setPassword(password);
      setLoading(true);
      const response = await axios.post("/api/send-otp", { email: userEmail });

      if (response.status === 200) {
        setOtpSent(true);
        setGeneratedOtp(response.data.otp); // Save generated OTP in state
        toast.success("OTP sent to your email!");
      } else {
        alert(response.data?.error || "Failed to send OTP.");
      }
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      toast.error(
        error.response?.data?.error || "Error sending OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtpHandler = async () => {
    if (!userOtp.trim()) {
      toast.success("Please enter the OTP.");

      return;
    }

    if (userOtp === generatedOtp) {
      alert("OTP verified! Signup successful.");
      setUserOtp("");
      setGeneratedOtp("");
      try {
        const res = await axios.post("http://localhost:3000/api/signup", {
          name,
          email,
          password,
        });

        if (res.data.success) {
          const isSignedIn = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

          if (isSignedIn) {
            setEmail(""); // Clear email
            window.location.href = "/";
          }
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
      setOtpSent(false); // Reset the form for a new signup
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="w-11/12 mx-auto max-w-sm">
        <h1 className="text-center font-bold text-3xl">Create an Account</h1>
        {!otpSent ? (
          <form className="mt-6 space-y-4" onSubmit={formSubmitHandler}>
            <div className="form-control">
              <label className="label" htmlFor="userName">
                <span className="label-text">User Name</span>
              </label>
              <input
                required
                className="input input-bordered"
                id="userName"
                name="userName"
                placeholder="User name"
                type="text"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="userEmail">
                <span className="label-text">User Email</span>
              </label>
              <input
                required
                className="input input-bordered"
                id="userEmail"
                name="userEmail"
                placeholder="User email"
                type="email"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                className="input input-bordered"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className={`btn w-full ${loading ? "bg-gray-400" : "bg-purple-600"} text-white`}
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending OTP..." : "Sign Up"}
              </button>
            </div>
            <h1 className="text-center text-sm font-semibold">
              Already have an account?
              <Link className="underline" href="/login">
                {" "}
                Login
              </Link>
            </h1>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              Enter OTP
            </h2>
            <div className="form-control">
              <label className="label" htmlFor="otp">
                <span className="label-text">OTP</span>
              </label>
              <input
                required
                className="input input-bordered"
                id="otp"
                placeholder="Enter OTP"
                type="text"
                value={userOtp}
                onChange={(e) => setUserOtp(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button
                className={`btn w-full ${loading ? "bg-gray-400" : "bg-purple-600"} text-white`}
                disabled={loading}
                onClick={verifyOtpHandler}
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
