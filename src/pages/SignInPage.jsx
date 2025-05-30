import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="w-full flex justify-center">
      <SignIn 
        redirectUrl="/"
      />
    </div>
  );
}

export default SignInPage;
