import Swal from "sweetalert2";

const baseToast = (icon, title) =>
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,

    customClass: {
      popup: "!px-2 !py-2",
      title: "!text-sm !font-normal text-black",
      icon: "!scale-75",
    },
  });

export const Toast = {
  success: (title) => baseToast("success", title),
  error: (title) => baseToast("error", title),
  warning: (title) => baseToast("warning", title),
};
