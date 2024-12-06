import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

export default function YoutubeForm() {
  const form = useForm({
    defaultValues: {
      email: "test@test.com",
      channel: "Test channel",
      phNums: [{ number: "" }],
      gender: "Female"
    },
    // mode: "onSubmit",
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form;

  const { fields, append, remove } = useFieldArray({ name: "phNums", control });
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitSuccessful,
  } = formState;

  console.log({ touchedFields, dirtyFields, isDirty, isValid });

  useEffect(() => {
    const subscription = watch((formData) => {
      console.log("watch", formData);
    });
    return () => subscription.unsubscribe();
  }, []);

  function handleGetValues() {
    const values = getValues();
    console.log("get values", values);
  }

  function handleSetValue() {
    setValue("age", 35);
  }

  function onSubmit(formData) {
    console.log("formData", formData);
    console.log(formData.dob.toLocaleString());
  }

  function onError(errors) {
    console.log("errors", errors);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <h2>Youtube Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="form"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />
        <p className="error">{errors?.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter email in correct format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                if (fieldValue.indexOf("admin@") != -1) {
                  return "You can't be a admin";
                }
                return;
              },
              notBlackListed: (fieldValue) => {
                if (fieldValue.indexOf("example.com") != -1) {
                  return "Domain blacklisted";
                }
                return;
              },
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Channel name required",
            },
          })}
        />
        <p className="error">{errors.channel?.message}</p>

        <p>Nested Object</p>
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            // disabled: true,
          })}
        />

        <label htmlFor="reddit">Reddit</label>
        <input type="text" id="reddit" {...register("social.reddit")} />

        <p>Phone Array</p>
        <label htmlFor="primary-phone">Primary Phone</label>
        <input type="text" id="primary-phone" {...register("phones.0")} />

        <label htmlFor="secondary-phone">Secondary Phone</label>
        <input type="text" id="secondary-phone" {...register("phones.1")} />

        <p>List of Extra Phone numbers</p>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <input type="text" {...register(`phNums.${index}.number`)} />
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              )}
            </div>
          );
        })}
        <button onClick={() => append({ number: "" })}>Add Extra Phone</button>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Age is required",
            },
          })}
        />

        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
            required: {
              value: true,
              message: "DOB is required",
            },
          })}
        />
        <label for="gender-male" >Male</label>
        <input type="radio" id="gender-male" name="gender" value="Male" {...register("gender")}/>

        <label for="gender-female">Female </label>
        <input type="radio" id="gender-female" name="gender" value="Female" {...register("gender")}/>

        <div style={{ display: "flex" }}>
          <button disabled={!isDirty || !isValid}>Submit</button>
          <button onClick={() => reset()}>Reset Form</button>
          <button onClick={() => trigger()}>Validate</button>
          <button type="button" onClick={handleGetValues}>
            Get Values
          </button>
          <button type="button" onClick={handleSetValue}>
            Set Value
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
