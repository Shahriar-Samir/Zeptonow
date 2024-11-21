"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react"; // Import signIn function

const Login = () => {
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // To capture login errors

  // Handle form submission to trigger signIn
  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userEmail = form.email.value.trim();
    const password = form.password.value.trim();

    setLoading(true); // Set loading state

    // Call NextAuth signIn method
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      email: userEmail,
      password,
    });

    if (result?.error) {
      // Handle error during login
      setError("Invalid username or password");
    } else {
      // Redirect or handle successful login
      window.location.href = "/dashboard"; // Redirect to dashboard or home page
    }

    setLoading(false); // Reset loading state
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <section className="w-11/12 mx-auto max-w-[300px]">
        <h1 className="text-center font-font4 text-3xl">Login</h1>

        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div> // Display error if login fails
        )}

        <form
          className="card-body w-full p-0 mt-5"
          onSubmit={formSubmitHandler}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn bg-[#950EDB] text-white ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
