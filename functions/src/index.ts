import * as functions from "firebase-functions";

const validCodes: {
  [key: string]: string;
} = {
  X48V9B2U: "Du fant den første!",
  WRLM548B: "Du fant den andre!",
  TLK6P9DM: "Du fant den tredje!",
  AHKGDHMC: "Du fant den fjerde!",
  THP3UGP8: "Du fant den femte!",
  QFAQFNNT: "Du fant den sjette!",
  YK55RUCT: "Du fant den syvende!",
  A2MLB722: "Du fant den åttende!",
  S3URMC93: "Du fant den niende!",
  K4X3M7PD: "Du fant den siste!",
};

export const checkCode = functions.https.onRequest(
  async (request, response) => {
    let code: string;
    try {
      code = JSON.parse(request.body).code;
    } catch (e) {
      code = request.body.code;
    }
    console.log(code);
    if (!(code in validCodes)) {
      response.sendStatus(404);
    }
    response.send(JSON.stringify({ message: validCodes[code] }));
  }
);
