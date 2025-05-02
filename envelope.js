const envelope = document.getElementById("envelope");
const lidOne = document.querySelector(".lid.one");
const lidTwo = document.querySelector(".lid.two");
const letter = document.getElementById("letter");

let tapCount = 0;
let index = 0;

// Use \n for newlines
const text = `
Happy Birthday, Sopass!!!\n

Finally, 15 years old ka na, HAHAHA! 🎉 I just want you to know how incredibly thankful I am that we met. You’ve been such an important part of my life, especially through the ups and downs. I still remember the first time I met you. I remember back then, there were three girls with the name Sophia or Sofia (andi and sofia) — but it was your name that I remembered the most. Somehow, it just stuck with me. And honestly, I’m really glad it did.\n\n

I'm so happy we ended up as groupmates for the BNT. If it weren’t for Sir Laher, it probably would’ve taken even more weeks before we became this close. And thank you to Bianca, too, for putting us together during the third quarter. She didn’t just make us seatmates, she made us inseparable! Even when teachers tried to separate us, they couldn’t (miss aica bruh) 😂\n\n

I just want you to know that I’ll always be here for you, no matter what. Through your happiest and saddest moments, I’ll always have your back. I hope you have the best birthday, filled with love, laughter, and all the things that make you smile.\n\n

I love you, my Dubai chocolate lover, favorite sleeping buddy, my Coke and sinigang partner, the person I always spam for streaks, my matcha buddy, and of course, my favorite comforter and hugger. 😘\n\n

You’re amazing, and I’m so lucky to have you in my life. Here’s to many more birthdays and memories together. ❤️\n\n

Love youuuuuuuuuuuu!!! Enjoy your day, Sopass!
`;

function typeWriter() {
  if (index < text.length) {
    // Handle line breaks
    if (text.charAt(index) === '\n') {
      letter.innerHTML += '<br>';
    } else {
      letter.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(typeWriter, 50); // Typing speed
  }
}

envelope.addEventListener("click", () => {
  tapCount++;

  if (tapCount === 1) {
    lidOne.style.transform = "rotateX(90deg)";
    lidTwo.style.transform = "rotateX(180deg)";
  } else if (tapCount === 2) {
    letter.style.transform = "translateY(-80px)";
  } else if (tapCount === 3) {
    letter.innerHTML = ''; // Clear previous content
    letter.classList.add("open-card");
    typeWriter();
  }
});