import React, { useEffect } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSigninMutation } from "../../Service/features/userSlice";
import { AppDispatch } from "../../Service/store";
import { useDispatch } from "react-redux";
import { setToken } from "../../Service/features/authSlice";
import { emailRegex, NotifyError, NotifySuccess } from "../../Utils";
import { useNavigate } from "react-router-dom";
import { projectRoutes } from "../../routes/constant";

type FormValues = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [signin, { isLoading, isError, status, data }] = useSigninMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    try {
      const response = await signin(data).unwrap();
      dispatch(setToken(response.token));
      navigate(projectRoutes.dashbord);
    } catch (error) {
      console.error("Sign In failed", error);
    }
  };

  console.log(data, "this is test status");

  useEffect(() => {
    if (status == "fulfilled") {
      NotifySuccess("User Sign In Successfully");
    }
    if (status == "rejected") {
      NotifyError("Somthing went wrorng!");
    }
  }, [isError, isLoading]);

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto my-auto bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
        <p className="text-gray-600 mb-4 text-center ">
          Sign In to see Dashboard
        </p>

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

        <div className="flex items-center py-2 justify-center">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm font-sans font-normal text-gray-950 ">
            Don't have an account yet?
            <a
              className="text-blue-500 cursor-pointer"
              href={projectRoutes.signUp}
            >
              Register now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
