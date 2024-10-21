import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function YoutubeForm() {
  const form = useForm({
    defaultValues: {
      email: "test@test.com",
      phNums: [{ number: "" }],
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { fields, append, remove } = useFieldArray({ name: "phNums", control });
  const { errors } = formState;

  function onSubmit(formData) {
    console.log("formData", formData);
  }

  return (
    <div>
      <h2>Youtube Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
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
        <input type="text" id="twitter" {...register("social.twitter")} />
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
              <input
                type="text"
                {...register(`phNums.${index}.number`)}
              />
              {index > 0 && <button type="button" onClick={() => remove(index)}>Remove</button>}
            </div>
          );
        })}
        <button onClick={() => append({number:''})}>Add Extra Phone</button>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
