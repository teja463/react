import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

export default function YoutubeForm() {
  const form = useForm({
    defaultValues: {
      email: "test@test.com",
      phNums: [{ number: "" }],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
  } = form;

  const { fields, append, remove } = useFieldArray({ name: "phNums", control });
  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;
  console.log({touchedFields, dirtyFields, isDirty, isValid});
  
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

  function onError(errors){
    console.log('errors', errors);
  }

  return (
    <div>
      <h2>Youtube Form</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className="form">
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

        <button disabled={!isDirty || !isValid}>Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set Value
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
