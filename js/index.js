var movment = 1;

document.getElementById("rd1").checked = true;

setInterval(function () {
  nextPicture();
}, 5000);

function nextPicture() {
  movment++;
  if (movment > 4) {
    movment = 1;
  }
  document.getElementById("rd"+movment).checked = true;
}

function logo() {
  //  Swal.fire({
  //     title: "You will be Pumped",
  //     text: "",
  //     icon: "success",
  //   });

    Swal.fire({
  title: "You've been Pumped",
  imageUrl: './img/backgroud/hand.jpeg', // Caminho src local
  width: '320px', // Define a largura aqui
  height: '100',
  imageWidth: 140,
  imageHeight: 200,
  color: 'black',
  confirmButtonColor: 'rgb(243, 105, 55)',
  confirmButtonColor: 'black'
});

}