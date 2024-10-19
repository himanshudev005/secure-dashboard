import React, { useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUpMutation } from "../../Service/features/userSlice";
import { emailRegex, NotifyError, NotifySuccess } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { projectRoutes } from "../../routes/constant";

type FormValues = {
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [signUp, { isLoading, isError, status }] = useSignUpMutation();
  console.log(watch("email"));
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log(data);
    try {
      const response = await signUp(data).unwrap();
      console.log(response, "user registered");
      navigate(projectRoutes.dashbord);
    } catch (error) {
      console.error("SignUp failed", error);
    }
  };

  useEffect(() => {
    if (status == "fulfilled") {
      NotifySuccess("User Sign Up Successfully");
    }
    if (status == "rejected") {
      NotifyError("Somthing went wrorng!");
    }
  }, [isError, isLoading]);

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto flex flex-col justify-center bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
        <p className="text-gray-600 mb-4 text-center">Enter your Details</p>

        <Input
          label="Email"
          type="text"
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Please Enter valid Email",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Project name is required" })}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-center my-2">
          <Button
            type="submit"
            className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <p className=" text-sm justify-self-end font-sans font-normal text-gray-950 ">
            Already have an account?
            <a
              className="text-blue-500 cursor-pointer"
              href={projectRoutes.signIn}
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
