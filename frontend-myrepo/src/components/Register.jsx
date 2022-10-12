import React, { useState } from "react";
import { useAuth } from "../hooks/auth";
import Button from "../widgets/Button";
import Input from "../widgets/Input";

function Register() {
  const { register, user } = useAuth({
    middleware: "guest",
    redirectIfAuthenticate: "/dashboard",
  });

  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    register(field, setError);
  };

  return (
    <section className="grid w-full pb-20 p-4">
      <h1 className="text-2xl my-8">Registration Form</h1>
      <Button success={true} name="Get User" onClick={(e) => user()} />
      <form onSubmit={handleSubmit} className="p-8">
        <div className="flex flex-col gap-4 my-4">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            value={field.name}
            required={true}
            onChange={(e) => {
              setField({
                ...field,
                name: e.target.value,
              });
              console.log(e.target.value);
            }}
          />
          {error.name && <Input error={true} type="text" name="error" id="error" disabled={true} value={error.name} />}
        </div>
        <div className="flex flex-col gap-4 my-4">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            value={field.email}
            required={true}
            onChange={(e) => {
              setField({
                ...field,
                email: e.target.value,
              });
              console.log(e.target.value);
            }}
          />
          {error.email && (
            <Input error={true} type="text" name="error" id="error" disabled={true} value={error.email} />
          )}
        </div>
        <div className="flex flex-col gap-4 my-4">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={field.password}
            required={true}
            onChange={(e) => {
              setField({
                ...field,
                password: e.target.value,
              });
              console.log(e.target.value);
            }}
          />
          {error.password && (
            <Input error={true} type="text" name="error" id="error" disabled={true} value={error.password} />
          )}
        </div>
        <div className="flex flex-col gap-4 my-4">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <Input
            type="password"
            name="password_confirmation"
            value={field.password_confirmation}
            required={true}
            onChange={(e) => {
              setField({
                ...field,
                password_confirmation: e.target.value,
              });
              console.log(e.target.value);
            }}
          />
          {error.password_confirmation && (
            <Input
              error={true}
              type="text"
              name="error"
              id="error"
              disabled={true}
              value={error.password_confirmation}
            />
          )}
        </div>

        <Button name={"Register"} success={true} className="my-4" />
      </form>
    </section>
  );
}

export default Register;
