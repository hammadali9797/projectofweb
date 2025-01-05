document.getElementById("furniture-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const furnitureType = document.getElementById("furniture-type").value;
    const material = document.getElementById("material").value;
    const color = document.getElementById("color").value;
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
  
    // Build preview container for the selected furniture
    const previewContainer = document.getElementById("preview-container");
    previewContainer.innerHTML = ""; // Clear previous preview
  
    const furniturePreview = document.createElement("div");
    furniturePreview.classList.add("furniture");
  
    // Set furniture size based on user input
    furniturePreview.style.width = `${width}px`;
    furniturePreview.style.height = `${height}px`;
    furniturePreview.style.backgroundColor = color;
  
    if (furnitureType === "chair") {
      furniturePreview.style.borderRadius = "10px"; // Chair-like shape
    } else if (furnitureType === "table") {
      furniturePreview.style.borderRadius = "0"; // Table-like shape
    } else if (furnitureType === "sofa") {
      furniturePreview.style.height = `${height / 2}px`; // Sofa is usually wider and shorter
    }
  
    // Set material (just as an example, not a visual change here)
    furniturePreview.setAttribute("data-material", material);
  
    previewContainer.appendChild(furniturePreview);
  
    // Display a simple confirmation message below the preview
    const previewMessage = document.createElement("p");
    previewMessage.textContent = `Your custom ${furnitureType} made from ${material} is ready with dimensions: ${length}cm x ${width}cm x ${height}cm.`;
    previewContainer.appendChild(previewMessage);
  });
  