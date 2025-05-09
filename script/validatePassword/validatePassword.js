document.addEventListener("DOMContentLoaded", () => {
    const btnVerify = document.getElementById("btn-verify");
  
    btnVerify.addEventListener("click", () => {
      const fPasswordSave = document.getElementById('inp-firstPassword').value;
      const sPasswordSave = document.getElementById('inp-secondPassword').value;
      const messageOutput = document.getElementById('password-message');
  
      console.log("Primera contraseña:", fPasswordSave);
      console.log("Segunda contraseña:", sPasswordSave);
  
      if (fPasswordSave === "" || sPasswordSave === "") {
        messageOutput.textContent = "❌ Ambas contraseñas son obligatorias";
      
        console.warn("Alerta: campos vacíos");
      } else if (fPasswordSave === sPasswordSave) {
        messageOutput.textContent = "✅ Las contraseñas coinciden";
    
        console.log("Éxito: las contraseñas coinciden");
      } else {
        messageOutput.textContent = "❌ Las contraseñas no coinciden";
    
        console.error("Error: las contraseñas no coinciden");
      }
    });
  });
  