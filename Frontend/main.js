function Register() {
    var dataJson = document.getElementById("input").value;
  
    var address = dataJson;
    fetch("http://localhost:3002/people/" + address)
      .then((res) => res.json())
      .then((data) => {
        if (data[0] == undefined) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "http://localhost:3002/register", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(
            JSON.stringify({
              address: dataJson,
            })
          );
          console.log("You have successfully voted");
          window.location.href = "vote.html";
        } else {
          console.log("address has already voted");
        }
      });
  }
  
  function VOTE() {
    const radioButtons = document.querySelectorAll('input[name="contender"]');
    var selectedRadioButton;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedRadioButton = radioButton.value;
        break;
      }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:3002/people/" + selectedRadioButton, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        idPeople: selectedRadioButton,
      })
    );
    setTimeout(Leaderboard, 500);
  }
  
  function Leaderboard() {
    fetch("http://localhost:3002/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("First").innerHTML =
          data[0].name + " " + data[0].votes;
        document.getElementById("Second").innerHTML =
          data[1].name + " " + data[1].votes;
        document.getElementById("Third").innerHTML =
          data[2].name + " " + data[2].votes;
        console.log(data[0].name, data[1].name, data[2].name);
      })
      .catch((err) => console.error(err));
  }