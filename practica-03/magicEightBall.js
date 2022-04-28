const value = Math.floor(Math.random() * 20);
let mensaje = "";
if (value === 0) {
  mensaje = "Try Again";
} else if (value >= 1 && value <= 10) {
  mensaje = "Lucky you, ";
  switch (value) {
    case 1:
      mensaje += "It is certain.";
      break;
    case 2:
      mensaje += "It is decidedly so.";
      break;
    case 3:
      mensaje += "Without a doubt.";
      break;
    case 4:
      mensaje += "Yes definitely.";
      break;
    case 5:
      mensaje += "You may relay on it.";
      break;
    case 6:
      mensaje += "As I see it, yes.";
      break;
    case 7:
      mensaje += "Most likely.";
      break;
    case 8:
      mensaje += "Outlook good.";
      break;
    case 9:
      mensaje += "Yes.";
      break;
    default:
      mensaje += "Signs point to yes.";
      break;
  }
} else if (value >= 11 && value <= 15) {
  switch (value) {
    case 11:
      mensaje = "Reply hazy, try again.";
      break;
    case 12:
      mensaje = "Ask again later.";
      break;
    case 13:
      mensaje = "Better not tell you now.";
      break;
    case 14:
      mensaje = "Cannot predict now.";
      break;
    default:
      mensaje = "Concentrate and ask again.";
      break;
  }
} else {
  mensaje = "Sorry, ";
  switch (value) {
    case 16:
      mensaje += "Don't count on it.";
      break;
    case 17:
      mensaje += "My reply is no.";
      break;
    case 18:
      mensaje += "My sources say no.";
      break;
    case 19:
      mensaje += "Outlook not so good.";
      break;
    default:
      mensaje += "Very doubtful.";
      break;
  }
}

console.log(mensaje);
