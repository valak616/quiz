function myFunction(myDiv:string, megusta:string) {
  document!.getElementById(myDiv)!.style.borderColor = "blue";
  document!.getElementById("mensaje")!.innerHTML = myDiv;
  document!.getElementById("like")!.innerHTML = megusta;
}
