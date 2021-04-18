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
    "Du fant den første!<br/><br/>Skriv inn koden <b>X48V9B2U</b> når du finner QR-koden.",
  WRLM548B:
    "Gå til A3-125 og finn Saurons øye. Ved foten av tårnet utenfor vil du finne en QR-kode to rule them all.<br/><br/>Skriv inn koden <b>WRLM548B</b> når du finner QR-koden.",
  TLK6P9DM:
    "Finn de store brillene der du kan se deg selv i mange forskjellige farger. Ta på deg brillene og finn neste QR-kode.<br/><br/>Skriv inn koden <b>TLK6P9DM</b> når du finner QR-koden.",
  AHKGDHMC:
    "Ta temperaturen på El-bygget. Er du frisk kan du fortsette jakten.<br/><br/>Skriv inn koden <b>AHKGDHMC</b> når du finner QR-koden.",
  THP3UGP8:
    "Sted: Ohma Electra. Hint: 12.<br/><br/>Skriv inn koden <b>THP3UGP8</b> når du finner QR-koden.",
  QFAQFNNT:
    "Besøk Galtvort og ta trappen til venstre før biblioteket, før trappen flytter seg. Finn ut hvorfor du ikke kan passere inn i midtfløyen.<br/><br/>Skriv inn koden <b>QFAQFNNT</b> når du finner QR-koden.",
  YK55RUCT:
    "Hent posten til Caverion under bordtennisbordet på stripa.<br/><br/>Skriv inn koden <b>YK55RUCT</b> når du finner QR-koden.",
  A2MLB722:
    "Stripa kan være et farlig sted. Finn beskyttelse!<br/><br/>Skriv inn koden <b>A2MLB722</b> når du finner QR-koden.",
  S3URMC93:
    "Finn U4 og søk tilflukt.<br/><br/>Skriv inn koden <b>S3URMC93</b> når du finner QR-koden.",
  K4X3M7PD:
    "Gå inn trappen til A3 og besøk Harry Potter på rommet sitt.<br/><br/>Skriv inn koden <b>K4X3M7PD</b> når du finner QR-koden.",
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
