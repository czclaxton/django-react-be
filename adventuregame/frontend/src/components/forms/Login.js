import React from "react";

export default function Login() {
  return (
    <>
      <large> Login to an existing account</large>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter username"
          />
          <small id="emailHelp" class="form-text text-muted">
            Your unique username
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
