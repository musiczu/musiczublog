document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button.md-clipboard").forEach((btn) => {
      btn.addEventListener("click", () => {
        const codeBlock = btn.parentElement.querySelector("code");
        if (!codeBlock) return;
  
        // Get raw text and remove "$ " from the start of each line
        const lines = codeBlock.innerText.split("\n");
        const cleaned = lines
          .map((line) => line.replace(/^\$\s?/, ""))
          .join("\n");
  
        // Temporarily override clipboard
        navigator.clipboard.writeText(cleaned).then(() => {
          console.log("Shell prompt ($) removed for clipboard copy.");
        });
      });
    });
  });
  