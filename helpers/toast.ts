import toast from "react-hot-toast";

export function showToast(message: string, delay: number, duration: number) {
  setTimeout(() => {
    toast(message, {
      duration: duration,
      position: "top-center",
    });
  }, delay);
}
