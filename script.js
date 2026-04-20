const API = "https://hiring-1d2e.onrender.com"; // change after deploy

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: name.value,
      skill: skill.value,
      email: email.value,
      resume: resume.value,
      intro: intro.value
    };

    await fetch(API + "/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Application sent 🚀");
    form.reset();
  });
}

const list = document.getElementById("list");

if (list) {
  fetch(API + "/workers")
    .then(res => res.json())
    .then(data => {
      data.forEach(w => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-xl shadow";

        card.innerHTML = `
          <h2 class="font-bold text-lg">${w.name}</h2>
          <p>${w.skill}</p>
          <p>${w.email}</p>
        `;

        list.appendChild(card);
      });
    });
}
