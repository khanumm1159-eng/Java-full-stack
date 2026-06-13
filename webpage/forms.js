document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("details").addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("Mobile").value;
        let age = document.getElementById("Age").value;
        let gender = document.getElementById("Gender").value;
        let address = document.getElementById("Address").value;

        document.getElementById("p1").innerText = "Name: " + name;
        document.getElementById("p2").innerText = "Email: " + email;
        document.getElementById("p3").innerText = "Mobile Number: " + mobile;
        document.getElementById("p4").innerText = "Age: " + age;
        document.getElementById("p5").innerText = "Gender: " + gender;
        document.getElementById("p6").innerText = "Address: " + address;

        let image = document.getElementById("image").files[0];

        if (image) {
            let reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById("dp").src = e.target.result;
            };

            reader.readAsDataURL(image);
        }
    });

});