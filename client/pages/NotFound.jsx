import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Placeholder } from "@/components/Placeholder";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Placeholder
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist."
    />
  );
};

export default NotFound;
