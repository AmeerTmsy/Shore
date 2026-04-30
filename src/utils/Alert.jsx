import Swal from "sweetalert2";

const baseToast = (icon, title, duration) =>
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: duration,

    customClass: {
      popup: "!px-2 !py-2",
      title: "!text-sm !font-normal text-black",
      icon: "!scale-75",
    },
  });

export const Toast = {
  success: (title, duration = 2000) => baseToast("success", title, duration),
  error: (title, duration = 2000) => baseToast("error", title, duration),
  warning: (title, duration = 2000) => baseToast("warning", title, duration),
};
