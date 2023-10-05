
const handleEmail = event => {
    
    let fn = document.getElementById("fullname");
    let e = document.getElementById("email");
    let m = document.getElementById("message");

    fn.style.borderColor = "rgba(135, 170, 172, 0.3)";
    e.style.borderColor = "rgba(135, 170, 172, 0.3)";
    m.style.borderColor = "rgba(135, 170, 172, 0.3)";

    if (event.key && event.key !== "Enter") {
        return;
    }
    let fnText = document.querySelector(".fullName").value;
    if (!fnText) {
        fn.style.borderColor = "red";
    }


    let eText = document.querySelector(".email").value;
    if (!eText) {
        e.style.borderColor = "red";
    }
    
    let mText = document.querySelector(".message").value;
    if (!mText) {
        m.style.borderColor = "red";
    }


    if (!mText || !fnText || !eText) {
        return;
    }


    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: emailAdress,
    //     Password: "Enter your password",
    //     To: 'steinigernoah@gmail.com',
    //     From: emailAdress,
    //     Subject: "PORTFOLIO CONTACT FORM",
    //     Body: fullName + "\n\n" + text,
    // }).then(
    //     message => alert("mail sent successfully")  
    // );
    message.innerText = "";
};

document.addEventListener('keydown', handleEmail);
document.getElementById("contact-button").addEventListener("click", handleEmail)