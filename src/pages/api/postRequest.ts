import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;

    console.log("add user", data)

    const url = data.url;
    const method = data.method;

    const fullUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${url}`;


    const response = await axios.request({
      url: fullUrl,
      method: method as string,
      data: data.data,
      withCredentials: true
    });

    console.log(response.data);
    res.status(201).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
