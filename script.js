var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");
var arrow = document.querySelector("button[type='submit']");

arrow.addEventListener("click", function() {
    // ตรวจสอบการมีช่องว่าง
    if (/\s/.test(pass.value)) {
        alert("Password must not contain spaces.");
        return;
    }

    // ตรวจสอบตัวเลขซ้ำ 3 ตัวขึ้นไป
    if (/(.)\1\1/.test(pass.value)) {
        alert("Password must not contain repeated characters (3 or more times).");
        return;
    }

    // ตรวจสอบอักษรภาษาอังกฤษพิมพ์เล็กซ้ำ 3 ตัวขึ้นไป
    if (/([a-z])\1\1/.test(pass.value)) {
        alert("Password must not contain repeated lowercase letters (3 or more times).");
        return;
    }

    // ตรวจสอบอักษรภาษาอังกฤษพิมพ์ใหญ่ซ้ำ 3 ตัวขึ้นไป
    if (/([A-Z])\1\1/.test(pass.value)) {
        alert("Password must not contain repeated uppercase letters (3 or more times).");
        return;
    }

    if (pass.value.length < 4) {
        alert("Tip💡: Short Password");
    } else if (pass.value.length >= 1 && pass.value.length < 7) {
        alert("Password seems to be weak, Try more secure passwords.");
    } else if (pass.value.length >= 7 && /[A-Z]/.test(pass.value) && /[!@#$%&-._]/.test(pass.value)) {
        alert("Password Update");
    } else if (pass.value.length >= 7 && /[A-Z]/.test(pass.value) || /[!@#$%&-._]/.test(pass.value)) {
        alert("Password seems to be medium, update it to be more secure.");
    } else if (pass.value.length >= 7) {
        alert("Password seems more UpperCase , Symbol.");
    }
});

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    // ตรวจสอบข้อจำกัดของรหัสผ่านที่ห้ามใช้
    if (/\s/.test(pass.value)) {
        strength.innerHTML = "Password contains spaces";
        arrow.style.borderColor = "#ff5925";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        return;
    }

    if (/(.)\1\1/.test(pass.value)) {
        strength.innerHTML = "Password has repeated characters";
        arrow.style.borderColor = "#ff5925";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        return;
    }

    if (/([a-z])\1\1/.test(pass.value)) {
        strength.innerHTML = "Repeated lowercase letters";
        arrow.style.borderColor = "#ff5925";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        return;
    }

    if (/([A-Z])\1\1/.test(pass.value)) {
        strength.innerHTML = "Repeated uppercase letters";
        arrow.style.borderColor = "#ff5925";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
        return;
    }

    if (pass.value.length >= 7 && /[A-Z]/.test(pass.value) && /[!@#$%&-._]/.test(pass.value)) {
        strength.innerHTML = "Password is Strong";
        arrow.style.borderColor = "#26d730";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    } else if (pass.value.length >= 7 && /[A-Z]/.test(pass.value) || /[!@#$%&-._]/.test(pass.value)) {
        strength.innerHTML = "Password is Medium";
        arrow.style.borderColor = "yellow";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (pass.value.length >= 1) {
        strength.innerHTML = "Password is Weak";
        arrow.style.borderColor = "#ff5925";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (pass.value.length == 0) {
        arrow.style.borderColor = "";
        pass.style.borderColor = "";
        msg.style.color = "";
    }
});

function togglePassword() {
    var pass = document.getElementById("password");

    // Toggle the input type between 'password' and 'text'
    if (pass.type === "password") {
        pass.type = "text";  // Show password
    } else {
        pass.type = "password";  // Hide password
    }
}
