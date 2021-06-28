import type { NextApiRequest, NextApiResponse } from 'next'
import { URLSearchParams } from "url"

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export default async function voteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { body } = req;

  if (body.recaptchaToken) {

    const rawResponse = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: body.recaptchaToken,
      }).toString(),
    });
    const content = await rawResponse.json();
    res.status(200).json(content);
  } else {
    res.status(400).json({ error: "invalid request" });
  }
}
