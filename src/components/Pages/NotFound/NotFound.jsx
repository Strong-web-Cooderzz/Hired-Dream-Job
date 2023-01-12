import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col">
      {/* logo */}
      <div className="fixed w-full flex justify-center">
        <Link to="/">
          <img src={logo} alt="Hired Dream Job" className="w-40" />
        </Link>
      </div>

      <div className="text-center flex flex-col gap-4 grow justify-center">
        <h3 className="text-9xl text-gray-800 font-black">404!</h3>
        <p className="font-medium text-lg">
          The page you are looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-700 text-lg hover:underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
