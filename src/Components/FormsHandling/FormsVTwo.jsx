import React from "react";
import { useForm } from "react-hook-form";

const FormsVTwo = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  //   console.log(errors);
  return (
    <>
      <h2>Form validation using react-hook-form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={handleSubmit((data) => {
        //   console.log(data);
        // })}
      >
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true })}
          //   {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true })}
          //   {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 5,
            maxLength: 13,
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <div className="developer">
          <p>Developer</p>
          <div className="radio">
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="yes"
              value="Yes"
              {...register("Developer", { required: true })}
            />
            <label htmlFor="no">No</label>
            <input
              type="radio"
              id="no"
              value="No"
              {...register("Developer", { required: true })}
            />
          </div>
        </div>

        <button>SUBMIT</button>
      </form>
    </>
  );
};

export default FormsVTwo;
