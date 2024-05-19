import { sendVerification } from "@/services/callApiService";
import { Button } from "@/shared/button";
import React, { SetStateAction, useRef, useState } from "react";
import useVerification from "@/store/useVerification";
import InputForm from "@/shared/input";
import Loading from "@/shared/loading";

const VerificationCode = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const checked = useVerification((state) => state.checked);
  const setChecked = useVerification((state) => state.setChecked);
  const emailVerification = useVerification((state) => state.emailVerification);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [error, setError] = useState<string>("");

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (verificationCode.length === inputRefs.current.length) {
      setLoading(true);
      const resStatus = await sendVerification({
        link: "auth/verifyCode",
        data: {
          email: emailVerification,
          verificationCode: verificationCode,
        },
      });
      setLoading(false);
      if (resStatus) {
        setError("");
        setChecked(3);
      } else {
        setError("Authentication code is incorrect, please try again.");
      }
    } else {
      setError("Please enter the full confirmation code.");
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newCode = verificationCode.split("");
    newCode[index] = value;
    setVerificationCode(newCode.join(""));

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <form onSubmit={handleSend} className={`p-3 bg-white h-full w-full ${checked === 2 ? "block" : "hidden"}`}>
      <h2 className="text-center font-semibold text-2xl text-blue-ct7 xs:mb-3">Verification Code</h2>
      <div className="flex justify-center items-end gap-5 mt-10">
        {[...Array(4)].map((_, index) => (
          <InputForm
            key={index}
            type="text"
            maxLength={1}
            className="w-16 h-16 border-1 border-gray-400 text-xl text-center p-0"
            value={verificationCode[index] || ""}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(el) => (inputRefs.current[index] = el!)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      <Button disabled={loading} type="submit" className="w-full py-3 block mt-10">
        {loading ? <Loading /> : "SEND"}
      </Button>
    </form>
  );
};

export default VerificationCode;
