"use client";

const page = () => {
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const password = form.password.value;

    return { userName, userEmail, password };
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <section className="w-11/12 mx-auto max-w-[300px] ">
        <h1 className="text-center font-font4 text-3xl">Create an account</h1>
        <form
          onSubmit={formSubmitHandler}
          className="card-body w-full p-0 mt-5"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              name="userName"
              type="text"
              placeholder="User name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="User email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
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

export default page;
