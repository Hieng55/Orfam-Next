import { sendVerification } from "@/services/callApiService";
import { Button } from "@/shared/button";
import InputForm from "@/shared/input";
import Loading from "@/shared/loading";
import useVerification from "@/store/useVerification";
import useCheckLoading from "@/store/useVerification";
import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";

const VerificationNewPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const checked = useCheckLoading((state) => state.checked);
  const emailVerification = useVerification((state) => state.emailVerification);
  const router = useRouter();

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() !== "") {
      setLoading(true);
      setError("");
      const resStatus = await sendVerification({
        link: "auth/resetPassword",
        data: {
          email: emailVerification,
          newPassword: password,
        },
      });
      setLoading(false);
      if (resStatus) {
        router.push("/login");
      }
    } else {
      setLoading(false);
      setError("Invalid password format. Please try again");
    }
  };
  return (
    <form
      onSubmit={handleChangePassword}
      className={`p-7 flex-col flex-shrink-0 w-full text-sm rounded-md top-0 left-0 ${checked === 3 ? "block" : "hidden"}`}
    >
      <h2 className="text-center font-semibold text-2xl text-blue-ct7 mb-3">New Password</h2>
      <label className="text-blue-ct7 font-medium">New password</label>
      <InputForm
        className="w-full my-2 text-sm mb-3"
        value={password}
        placeholder="Please enter your new password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
      <Button type="submit" className="text-sm font-medium w-full py-3 block mt-2" disabled={loading}>
        {loading ? <Loading /> : "Submit"}
      </Button>
    </form>
  );
};

export default VerificationNewPassword;
