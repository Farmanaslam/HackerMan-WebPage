const h = prompt("Enter number to hack...........")
let a = [
  "Initialising Network Please Wait.....",
  "hacking Number....." + h,
  "Connecting to Server..........",
  "Retrieving Facebook Username....",
  "Retrieving Instagram Username....",
  "Hacking  Accounts......",
  "Username Found...:xxxxxxxxx ",
  "Passward :#xxxxxxxx# ",
  "hacked Succesfully "
]

const sleep = async (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)

    }, sec * 1000)
  })
}

const showHack = async (message) => {
  await sleep(3);

  // console.log(message)
  text.innerHTML = text.innerHTML + message + "<br>"


}
(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i])
  }
})()

