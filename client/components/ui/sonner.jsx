import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-s8ul-dark-lighter group-[.toaster]:text-white group-[.toaster]:border-s8ul-gray/20 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-300",
          actionButton:
            "group-[.toast]:bg-s8ul-green group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-s8ul-gray group-[.toast]:text-gray-300",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
