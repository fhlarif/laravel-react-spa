import React, { useState } from "react";
import { useAuth } from "../hooks/auth";
import Button from "../widgets/Button";
import Input from "../widgets/Input";

function Register() {
  const { register } = useAuth({
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
    <section className="grid w-4/6 pb-20">
      <h1 className="text-2xl my-8">Registration Form</h1>
      <form onSubmit={handleSubmit} className="w-2/3">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            value={field.name}
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
        <Button name={"Register"} className="my-4" />
      </form>
    </section>
  );
}

export default Register;
