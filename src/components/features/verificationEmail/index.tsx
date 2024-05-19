import { sendVerification } from "@/services/callApiService";
import { Button } from "@/shared/button";
import InputForm from "@/shared/input";
import Loading from "@/shared/loading";
import useVerification from "@/store/useVerification";
import React, { SetStateAction, useState } from "react";

const VerificationEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const checked = useVerification((state) => state.checked);
  const setChecked = useVerification((state) => state.setChecked);
  const setEmailVerification = useVerification((state) => state.setEmailVerification);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Please enter your email");
    } else {
      setLoading(true);

      const resStatus = await sendVerification({
        link: "auth/sendVerificationCode",
        data: {
          email: email,
        },
      });

      setLoading(false);
      setChecked(2);

      if (resStatus) {
        setError("");
        setEmailVerification(email);
      } else {
        setError("Email does not exist, please try again");
      }
    }
  };

  return (
    <form
      onSubmit={handleSendEmail}
      className={`p-7 flex-col flex-shrink-0 w-full text-sm rounded-md top-0 left-0 ${checked === 1 ? "block" : "hidden"}`}
    >
      <h2 className="text-center font-semibold text-2xl text-blue-ct7 xs:mb-3">Forgot Password</h2>
      <label className="text-blue-ct7 font-medium">Email</label>
      <InputForm
        className="w-full my-2 text-sm"
        value={email}
        placeholder="Please enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      <Button type="submit" className="text-sm font-medium w-full py-3 block mt-2" disabled={loading}>
        {loading ? <Loading /> : "Submit"}
      </Button>
    </form>
  );
};

export default VerificationEmail;
