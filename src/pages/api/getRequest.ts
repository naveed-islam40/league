import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url: URL, method } = req.query;
  const fullUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${URL}`;

  console.log("Full URL", fullUrl)
  console.log("Method", method)

  try {
    const response = await axios.request({
      url: fullUrl,
      method: method as string,
    });


    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error forwarding request:", error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
