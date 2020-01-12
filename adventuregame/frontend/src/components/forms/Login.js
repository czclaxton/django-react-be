import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { loginUser, errorClean } from "../../actions/authActions";
import { connect } from "react-redux";

export const Login = props => {
  return (
    <>
      <large style={{ marginLeft: "50px" }}> Login</large>
      <Form style={{ width: "50vw", marginLeft: "50px" }}>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <Field
            type="text"
            class="form-control"
            placeholder="username"
            name="username"
          />
          {props.touched.username && props.errors.username && (
            <p1 className={classes.error}>{props.errors.username}</p1>
          )}

          <small id="emailHelp" class="form-text text-muted">
            Your unique username
          </small>
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <Field
            class="form-control"
            type="password"
            placeholder="password"
            name="password"
          />
          {props.touched.passwordConfirm && props.errors.passwordConfirm && (
            <p1 className={classes.error}>{props.errors.passwordConfirm}</p1>
          )}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Enter a password")
  }),

  handleSubmit(values, { props }) {
    props.loginUser(values, props.history);
  }
})(Login);

export default connect(null, { loginUser, errorClean })(FormikLoginForm);
