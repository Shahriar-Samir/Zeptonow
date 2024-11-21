"use client";

import React from "react";

const Login = () => {
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const userEmail = form?.email.value;
    const password = form?.password.value;

    console.log({ userEmail, password });

    return { userEmail, password };
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <section className="w-11/12 mx-auto max-w-[300px] ">
        <h1 className="text-center font-font4 text-3xl">Login</h1>
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
            <button className="btn bg-[#950EDB] text-white">Login</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
