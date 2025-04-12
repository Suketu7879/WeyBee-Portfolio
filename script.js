document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("message").value.trim();
    if (!message) {
        alert("Please enter a message.");
        return;
    }

    const phoneNumber = "9687032379";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    },
    {
        threshold: 0.1,
    }
);

reveals.forEach((reveal) => observer.observe(reveal));
