import * as functions from "firebase-functions";

const previousCodes: {
  [key: string]: string;
} = {
  X48V9B2U: "X48V9B2U",
  WRLM548B: "X48V9B2U",
  TLK6P9DM: "WRLM548B",
  AHKGDHMC: "TLK6P9DM",
  THP3UGP8: "AHKGDHMC",
  QFAQFNNT: "THP3UGP8",
  YK55RUCT: "QFAQFNNT",
  A2MLB722: "YK55RUCT",
  S3URMC93: "YK55RUCT",
  K4X3M7PD: "YK55RUCT",
};

const validCodes: {
  [key: string]: string;
} = {
  X48V9B2U:
    "Gå til A3-125 og finn Saurons øye. Ved foten av tårnet utenfor vil du finne en QR-kode to rule them all.",
  WRLM548B:
    "Finn de store brillene der du kan se deg selv i mange forskjellige farger. Ta på deg brillene og finn neste QR-kode.",
  TLK6P9DM:
    "Ta temperaturen på El-bygget. Er du frisk kan du fortsette jakten.",
  AHKGDHMC: "Sted: Ohma Electra. Hint: 12.",
  THP3UGP8:
    "Besøk Galtvort og ta trappen til venstre før biblioteket, før trappen flytter seg. Finn ut hvorfor du ikke kan passere inn i midtfløyen.",
  QFAQFNNT: "Hent posten til Caverion under bordtennisbordet på stripa.",
  YK55RUCT: "Stripa kan være et farlig sted. Finn beskyttelse!",
  A2MLB722: "Gå inn trappen til A3 og besøk Harry Potter på rommet sitt.",
  S3URMC93: "Finn U4 og søk tilflukt.",
  K4X3M7PD:
    "Gratulerer! Du har funnet alle QR-kodene! Ta bilde av deg ved QR-koden og send dette til scavengerhunt@abakus.no for å være med i trekningen av et gavekort på 500,-!",
};

export const checkCode = functions.https.onRequest(
  async (request, response) => {
    let code, previous: string;
    try {
      code = JSON.parse(request.body).code;
    } catch (e) {
      code = request.body.code;
    }
    try {
      previous = JSON.parse(request.body).previous;
    } catch (e) {
      previous = request.body.previous;
    }
    console.log(code);
    if (
      !(code in validCodes) ||
      !(previous in previousCodes) ||
      previous.valueOf() !== previousCodes[code].valueOf()
    ) {
      console.log(previous);
      response.sendStatus(404);
    } else {
      response.send(JSON.stringify({ message: validCodes[code] }));
    }
  }
);
