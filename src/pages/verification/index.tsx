import VerificationCode from "@/components/features/verificationCode";
import VerificationEmail from "@/components/features/verificationEmail";
import VerificationNewPassword from "@/components/features/verificationRepassword";
import { quicksand } from "@/utils/const";

const ForgotPassword = () => {
  return (
    <div className={`flex justify-center items-center h-screen w-full ${quicksand.className} px-2`}>
      <div className="max-w-xl shadow-shadow2 flex flex-shrink-0 w-full">
        <VerificationEmail />
        <VerificationCode />
        <VerificationNewPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
