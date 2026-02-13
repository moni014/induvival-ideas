function saveBirthday() {
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;

    if (!name || !birthday) {
        alert("Please enter both name and birthday");
        return;
    }

    localStorage.setItem("birthdayName", name);
    localStorage.setItem("birthdayDate", birthday);

    document.getElementById("message").innerText =
        "Birthday saved successfully 🎂";
}



function playSong() {
    const song = document.getElementById("birthdaySong");
    song.currentTime=0;
    song.play();
}