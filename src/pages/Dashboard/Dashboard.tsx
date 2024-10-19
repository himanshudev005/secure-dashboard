import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { projectRoutes } from "../../routes/constant";
import { useDispatch,  } from "react-redux";
import { removeToken } from "../../Service/features/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeToken());
    navigate(projectRoutes.signIn);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl text-semibold font-serif py-3 text-black ">
        Secure User Dashboard
      </h1>
      {/* <p className="text-black text-base font-normal ">
        <span className="font-semibold">React with TypeScript Setup</span>:
        Build the project using React for interactive UIs, with TypeScript for
        static typing to enhance code quality.
        <br />
        <span className="font-semibold">
          State Management with Redux Toolkit
        </span>
        : Use Redux for global state management, particularly for user
        authentication. Prefer RTK Query for efficient API interactions with the
        ReqRes API.
        <br />
        <span className="font-semibold">Tailwind CSS Integration</span>:
        Implement Tailwind CSS for utility-first styling, promoting modular,
        responsive designs.
        <br />
        <span className="font-semibold">Authentication & Protected Routes</span>
        : Include user authentication with Sign In/Sign Up. Manage tokens in
        Redux and protect the Dashboard Page with React Router v6.
        <br />
        <span className="font-semibold">Reusable Components</span>: Create
        reusable UI components using React Hook Form for efficient form
        management and validation, utilizing forwardRef for flexibility.
        <br />
        <span className="font-semibold">Reusable Components</span>: Add
        middleware to restrict access to protected routes for authenticated
        users only.
        <br />
        <span className="font-semibold">Test-Driven Development (TDD)</span>:
        Adopt a TDD approach by writing unit tests before implementation,
        focusing on authentication and API interactions.
        <br />
        <span className="font-semibold">Composables for Code Organization</span>
        : Use custom hooks and utility functions to promote code reusability and
        maintainability.
      </p> */}
      <p className="text-black text-base font-normal ">
        <span className="font-semibold font-serif">Tools used</span>: React,
        Typescript, tailwind, Redux toolkit, RTK query, react-hook-form
      </p>
      <div className="py-4">
        <Button onClick={handleLogOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default Dashboard;
