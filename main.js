let selectedColors = [
    "LightSalmon", "DarkSeaGreen", "SlateBlue", "MediumPurple", "OliveDrab",
    "GoldenRod", "Tomato", "SteelBlue", "MediumAquaMarine", "DarkOrange"
  ];
  let computerChoice = selectedColors[Math.floor(Math.random() * selectedColors.length)];
  let attempts = 3;
  
  initializeGame();
  
  function initializeGame() {
    document.body.style.backgroundColor = '#FFFFFF';

    const colorButtonsDiv = document.getElementById("colorButtons");
    colorButtonsDiv.innerHTML = "";
  
    selectedColors.forEach(color => {
        const button = document.createElement("button");
        button.classList.add("color-button");
        button.style.backgroundColor = color;
    
       
        button.addEventListener("click", () => guessColor(color));
        colorButtonsDiv.appendChild(button);
      });
  
    attempts = 3;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("result").textContent = "";
    computerChoice = selectedColors[Math.floor(Math.random() * selectedColors.length)];
  }
  
  function guessColor(userInput) {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll(".color-button");
  
    if (userInput === computerChoice) {
      document.body.style.backgroundColor = userInput;
      resultElement.textContent = "Parabéns! Você acertou!";
      disableButtons();
    } else {
      attempts--;
      document.getElementById("attempts").textContent = attempts;
      if (attempts === 0) {
        resultElement.textContent = `Suas tentativas acabaram! A cor era ${computerChoice}. Você perdeu.`;
        resultElement.style.backgroundColor = computerChoice;
        disableButtons();
      } else {
        resultElement.textContent = `Errado! Tente novamente.`;
        resultElement.style.backgroundColor = '';
      }
    }
  }
  
  function disableButtons() {
    const buttons = document.querySelectorAll(".color-button");
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
  
  
  
  function disableButtons() {
    const buttons = document.querySelectorAll(".color-button");
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
  
  function resetGame() {
    initializeGame();
  }
  