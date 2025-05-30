import { SignUp, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const { isSignedIn } = useAuth(); // Check if the user is signed in
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/chat"); // Redirect to chat if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className='w-full flex justify-center'>
      <SignUp 
        redirectUrl="/chat" // Redirect to chat after sign-up
      />
    </div>
  );
}

export default SignUpPage;
