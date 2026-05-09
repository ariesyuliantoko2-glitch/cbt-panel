import { db } from "./firebase-config.js";

import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const sessionContainer = document.getElementById("sessionContainer");

const sessionsRef = collection(db, "exam_sessions");

onSnapshot(sessionsRef, (snapshot) => {

  sessionContainer.innerHTML = "";

  snapshot.forEach((docSnap) => {

    const data = docSnap.data();

    const card = document.createElement("div");

    card.className = data.active
      ? "card active-card"
      : "card inactive-card";

    card.innerHTML = `

      <div class="subject">
        ${data.title}
      </div>

      <div class="info">
        Durasi: ${data.duration_minutes} menit
      </div>

      <div class="status ${data.active ? "active" : "inactive"}">
        ${data.active ? "AKTIF" : "NONAKTIF"}
      </div>

      <button class="btn">
        ${data.active ? "Session Aktif" : "Aktifkan Session"}
      </button>

    `;

    const button = card.querySelector(".btn");

    button.addEventListener("click", async () => {

      try{

        const allSessions = await getDocs(sessionsRef);

        for(const item of allSessions.docs){

          await updateDoc(
            doc(db, "exam_sessions", item.id),
            { active:false }
          );

        }

        await updateDoc(
          doc(db, "exam_sessions", docSnap.id),
          { active:true }
        );

      }catch(error){

        console.error(error);
        alert("Terjadi kesalahan");

      }

    });

    sessionContainer.appendChild(card);

  });

});