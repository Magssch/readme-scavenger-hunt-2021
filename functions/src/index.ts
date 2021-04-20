import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

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
  S3URMC93: "A2MLB722",
  K4X3M7PD: "S3URMC93",
};

const codeIndex: {
  [key: string]: number;
} = {
  X48V9B2U: 1,
  WRLM548B: 2,
  TLK6P9DM: 3,
  AHKGDHMC: 4,
  THP3UGP8: 5,
  QFAQFNNT: 6,
  YK55RUCT: 7,
  A2MLB722: 8,
  S3URMC93: 9,
  K4X3M7PD: 10,
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
    "Gratulerer! Du har funnet alle QR-kodene! Ta bilde av deg selv ved QR-koden og send dette til scavengerhunt@abakus.no for å være med i trekningen av et gavekort på 500,-!",
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
      const docRef = await db.collection("statistics").doc(code);
      docRef
        .update({
          visits: admin.firestore.FieldValue.increment(+1),
          last_visit: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          console.log("Document successfully updated!");
        });

      response.send(
        JSON.stringify({
          message: validCodes[code],
          last: code.valueOf() === "K4X3M7PD".valueOf(),
        })
      );
    }
  }
);

export const getStatistics = functions.https.onRequest(async (_, response) => {
  const statisticsSnapshot = await db.collection("statistics").get();
  let data: FirebaseFirestore.DocumentData[] = [];

  statisticsSnapshot.forEach((doc) => {
    const obj = doc.data();
    obj.id = codeIndex[doc.id];
    data.push(obj);
  });

  response.send(
    JSON.stringify({
      message: data,
    })
  );
});
