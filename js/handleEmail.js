
const handleEmail = event => {

    if (event.key && event.key !== "Enter") {
        return;
    }
    const fullName = document.querySelector(".fullName");
    let fN_text = fullName.value;
    if (!fN_text) {
        fullName.placeholder = "You need to write your name";
    }

    const email = document.querySelector(".email");
    let e_text = email.value;
    if (!e_text) {
        email.placeholder = "You need to write your email adress";
    }
    
    const message = document.querySelector(".message");
    let m_Text = message.value;
    if (!m_Text) {
        message.placeholder = "You need to write me a message";
    }


    if (!m_Text || !fN_text || !e_text) {
        return;
    }


    console.log("wtf");

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