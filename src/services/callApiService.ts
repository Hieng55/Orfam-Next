import RestClient from "./apiService";
import { ApiResponseProductBrandAndCategory } from "./type";

const restClient = new RestClient();
const fetcherPost = async (url: string, { arg }: { arg: {} }) => {
  try {
    const response = await restClient.post(url, arg);
    return response;
  } catch (error) {
    return error;
  }
};

const fetcherPatch = async <T extends { id: number }>(url: string, { arg }: { arg: T }) => {
  const patchUrl = `${url}/${arg.id}`;
  try {
    const response = await restClient.patch(patchUrl, arg);
    return response;
  } catch (error) {
    throw new Error(`Error patch data: ${error}`);
  }
};

const fetcherPut = async <T extends { userId: number }>(url: string, { arg }: { arg: T }) => {
  const putUrl = `${url}/${arg.userId}`;

  try {
    const response = await restClient.put(putUrl, arg);
    return response;
  } catch (error) {
    throw new Error(`Error putting data: ${error}`);
  }
};

const fetcherDelete = async <T extends { id: number }>(url: string, { arg }: { arg: T }) => {
  const deleteUrl = `${url}/${arg.id}`;

  try {
    const response = await restClient.delete(deleteUrl);
    return response;
  } catch (error) {
    throw new Error(`Error delete data: ${error}`);
  }
};

const fetcherGet = async <T>(url: string, query?: object): Promise<T> => {
  try {
    const restClient = new RestClient();
    const response = await restClient.get(url, query);
    return response as T;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

const sendEmail = async ({
  token,
  info,
}: {
  token: string;
  info: {
    email: string;
    name: string;
    subject: string;
    orders?: ApiResponseProductBrandAndCategory[];
  };
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: info.email, name: info.name, subject: info.subject, orders: info?.orders }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendVerification = async ({ link, data }: { link: string; data: object }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${link}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resStatus = res.ok;

  return resStatus;
};

export { fetcherPost, fetcherGet, fetcherPatch, fetcherPut, fetcherDelete, sendEmail, sendVerification };
