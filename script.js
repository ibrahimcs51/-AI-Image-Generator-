// Theme Toggle
const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("change", () => {
    document.body.setAttribute("data-theme", themeSwitch.checked ? "light" : "dark");
});

// Mock AI Image Generation
document.getElementById("generate-btn").addEventListener("click", () => {
    const promptInput = document.getElementById("prompt-input");
    const loadingSpinner = document.getElementById("loading-spinner");
    const errorMessage = document.getElementById("error-message");
    const imageResult = document.getElementById("image-result");

    if (!promptInput.value.trim()) {
        errorMessage.style.display = "flex";
        loadingSpinner.style.display = "none";
        imageResult.style.display = "none";
        return;
    }

    // Show loading state
    loadingSpinner.style.display = "flex";
    errorMessage.style.display = "none";
    imageResult.style.display = "none";

    // Simulate API call delay
    setTimeout(() => {
        loadingSpinner.style.display = "none";
        
        // Mock success response
        imageResult.innerHTML = `
            <img src="https://source.unsplash.com/random/512x512/?${encodeURIComponent(promptInput.value)}" alt="AI Generated Image">
            <p class="image-caption">"${promptInput.value}"</p>
        `;
        imageResult.style.display = "block";
    }, 2000);
});

// Suggestion buttons
document.querySelectorAll(".suggestion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("prompt-input").value = btn.textContent;
    });
});