import { Link } from "react-router-dom";
import Button from "./Button";
import { ArrowLeft } from "lucide-react";

function BackToHome() {
  return (
    <Button style="light" to="/" className="inline-block mx-6 group text-sm">
      <ArrowLeft size={18} className="inline me-2 transition-transform duration-300 group-hover:-translate-x-2" />
      Back to home
    </Button>
  );
}

export default BackToHome;
