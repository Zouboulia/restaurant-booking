import RegisterForm from "@components/RegisterForm";

export default function Register() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center font-bold text-gray-400">
          Welcome to Rest'O Bookings
        </h1>
      </div>
      <div className="flex flex-col items-center">Register here</div>
      <div>
        {" "}
        <RegisterForm />{" "}
      </div>
    </>
  );
}
