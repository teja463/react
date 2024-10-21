import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export default function StudentForm() {
  const { register, handleSubmit, control, formState } = useForm();
  const {errors} = formState;

  function submit(form){
    console.log('form', form);
  }

  return (
    <div>
      <h2>Student Form</h2>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <label htmlFor="student_id">Student Id</label>
        <input type="number" id="student_id" {...register("student_id")} />

        <label htmlFor="student_name">Student Name</label>
        <input type="text" id="student_name" {...register("student_name", {
          required: {
            value: true,
            message:"Enter your name"
          }
        })}/>
        <p className="error">{errors?.student_name?.message}</p>
        <h4>Student Address</h4>

        <label htmlFor="street">Street</label>
        <input type="text" id="street" {...register("student_address.street")}/>

        <label htmlFor="state">State</label>
        <input type="text" id="state" {...register("student_address.state")}/>

        <label htmlFor="country">Country</label>
        <input type="text" id="country" {...register("student_address.country")}/>

        <button>Submit</button>
      </form>
      {/* <DevTool control={control}/> */}
    </div>
  );
}
