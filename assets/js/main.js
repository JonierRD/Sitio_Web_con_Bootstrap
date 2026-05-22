const projectModal = document.getElementById("projectModal");

if (projectModal) {
  projectModal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;

    if (!trigger) {
      return;
    }

    const title = trigger.getAttribute("data-title") || "Proyecto";
    const description = trigger.getAttribute("data-description") || "";
    const stack = trigger.getAttribute("data-stack") || "";
    const link = trigger.getAttribute("data-link") || "#";
    const github = trigger.getAttribute("data-github") || "#";

    projectModal.querySelector("#projectModalLabel").textContent = title;
    projectModal.querySelector("#projectModalDescription").textContent = description;
    projectModal.querySelector("#projectModalStack").textContent = stack;
    projectModal.querySelector("#projectModalLink").setAttribute("href", link);
    projectModal.querySelector("#projectModalGithub").setAttribute("href", github);
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = [
      "*Nuevo contacto desde Portfolio Bootstrap*",
      "",
      `*Nombre:* ${name}`,
      `*Email:* ${email}`,
      `*Asunto:* ${subject}`,
      "",
      "*Mensaje:*",
      `${message}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/573133865275?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
    contactForm.reset();
  });
}
