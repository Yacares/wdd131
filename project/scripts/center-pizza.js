document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.classList.add("modal-open");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  } else {
    console.warn("Close button not found.");
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
  }

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });
  } else {
    console.warn("Hamburger menu or nav-menu not found.");
  }

  const ageSelect = document.getElementById("age");
  const ages = Array.from({ length: 83 }, (_, i) => i + 18);

  if (ageSelect) {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- Select your age --";
    placeholder.disabled = true;
    placeholder.selected = true;
    ageSelect.appendChild(placeholder);

    ages.forEach((age) => {
      const option = document.createElement("option");
      option.value = age;
      option.textContent = age;
      ageSelect.appendChild(option);
    });
  }

  let visitCount = localStorage.getItem("visitCount");
  if (!visitCount) {
    visitCount = 0;
  } else {
    visitCount = Number(visitCount);
  }
  visitCount++;
  localStorage.setItem("visitCount", visitCount);

  const footer = document.querySelector("footer");
  if (footer) {
    const visitCounterDiv = document.createElement("div");
    visitCounterDiv.style.color = "white";
    visitCounterDiv.style.fontSize = "0.8rem";
    visitCounterDiv.style.marginTop = "0.5rem";
    visitCounterDiv.textContent = `You have visited this site ${visitCount} time${visitCount > 1 ? "s" : ""}.`;
    footer.appendChild(visitCounterDiv);
  }

  const sourcesDiv = document.getElementById("sources");
  const sources = {
    social: "Social Media",
    friend: "Friend Recommendation",
    search: "Search Engine",
    walkby: "Walked by Store",
    other: "Other",
  };

  if (sourcesDiv) {
    for (const key in sources) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "source";
      input.value = key;

      label.appendChild(input);
      label.appendChild(document.createTextNode(` ${sources[key]}`));
      sourcesDiv.appendChild(label);
      sourcesDiv.appendChild(document.createElement("br"));
    }
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const message = document.getElementById("message")?.value || "";
      const age = document.getElementById("age")?.value || "";
      const sourceInputs = document.querySelectorAll("input[name='source']:checked");
      const sourceValues = Array.from(sourceInputs).map((input) => sources[input.value]);

      const userData = {
        name,
        email,
        message,
        age,
        sources: sourceValues,
      };

      localStorage.setItem("contactData", JSON.stringify(userData));

      const formatted = `
        Name: ${name}
        Email: ${email}
        Age: ${age}
        Sources: ${sourceValues.join(", ")}
        Message: ${message}
      `;

      alert(`Your message has been saved:\n${formatted}`);
      form.reset();
    });
  }
});
