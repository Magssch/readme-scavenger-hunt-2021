import * as functions from "firebase-functions";

const validCodes: {
  [key: string]: string;
} = {
  X48V9B2U: "Du fant den første!",
  WRLM548B:
    "Gå til A3-125 og finn Saurons øye. Ved foten av tårnet utenfor vil du finne en QR-kode to rule them all.",
  TLK6P9DM:
    "Finn de store brillene der du kan se deg selv i mange forskjellige farger. Ta på deg brillene og finn neste QR-kode.",
  AHKGDHMC:
    "Ta temperaturen på El-bygget. Er du frisk kan du fortsette jakten.",
  THP3UGP8: "Sted: Ohma Electra. Hint: 12.",
  QFAQFNNT:
    "Besøk Galtvort og ta trappen til venstre før biblioteket, før trappen flytter seg. Finn ut hvorfor du ikke kan passere inn i midtfløyen.",
  YK55RUCT: "Hent posten til Caverion under bordtennisbordet på stripa.",
  A2MLB722: "Stripa kan være et farlig sted. Finn beskyttelse!",
  S3URMC93: "Finn U4 og søk tilflukt.",
  K4X3M7PD: "Gå inn trappen til A3 og besøk Harry Potter på rommet sitt.",
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
