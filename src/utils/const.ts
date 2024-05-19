import { Quicksand } from "next/font/google";

const LIMIT = 10;
export { LIMIT };
export const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
