import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../assets/fonts/Poppins-Medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../assets/fonts/Poppins-SemiBold.ttf",
      style: "semiBold",
      weight: "600",
    },
    {
      path: "../assets/fonts/Poppins-Bold.ttf",
      style: "bold",
      weight: "700",
    },
  ],
});