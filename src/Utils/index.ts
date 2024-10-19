import { toast } from "react-toastify";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NotifySuccess = (message : string) => {
    toast.success(message);
  };

  export const NotifyError = (message : string) => {
    toast.error(message);
  };