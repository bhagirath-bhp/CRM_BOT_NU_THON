import { SignIn, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { isSignedIn } = useAuth(); // Check if the user is signed in
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/chat"); // Redirect to chat if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="w-full flex justify-center">
      <SignIn 
        redirectUrl="/chat" // Redirect to chat after sign-in
      />
    </div>
  );
}

export default SignInPage;
