const character = document.getElementsByClassName("character")[0]; // Retorna o primeiro elemento presente na classe "character".
const containerCharacter = document.getElementsByClassName("container-character")[0]; // Retorna o primeiro elemento presente na classe "container-character".


const VELOCITY = 10; // Define a velocidade dos movimentos de Jaypers.

const SCREEN_WIDTH = screen.width; // Define a largura do jogo como sendo a largura da tela do pc utilizado.
const SCREEN_HEIGHT = screen.height; // Define a altura do jogo como sendo a altura da tela do pc utilizado.

let xPosition = 500; // Determina a coordenada X da posição inicial de Jaypers.
let yPosition = 300; // Determina a coordenada Y da posição inicial de Jaypers.

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] // Define quais teclas podem ser utilizadas para movimentar Jaypers.
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // Define a direção que Jaypers irá após cada uma das teclas serem pressionadas.

window.addEventListener("keydown", (event) => { // configura o "event" para iniciar quando alguma tecla for pressionada.
    const key  = event.key; // Salva qual tecla foi pressionada.

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { // Verifica se algum dos botões possíveis foi pressionado.
        return currentKey === key; // Se a verificação encontrar algum botão, retorna verdadeiro, caso contrário, é falso.
    })

    if(!keyPressedAvaiable) return; // Se a verificação acima deu falso, essa linha é responsável por esperar a próxima tecla pressionada para repetir o processo.

    directions.forEach((direction) => { // Chama uma função para cada elemento do array direction.
        if(character.classList.contains(direction)) character.classList.remove(direction); // Determina que se a classe estiver presente no character, ela deve ser removida.
    })

    if(key === "ArrowUp"){ // Determina se a tecla seta para cima está sendo clicada.
        character.classList.add("turnUp"); // Determina que as características da classe "turnUp" se aplicam ao character.
        yPosition -= VELOCITY; // Determina a mudança na coordenada Y após a seta para cima ser pressionada.
    }

    if(key === "ArrowDown"){ // Determina se a tecla seta para baixo está sendo clicada.
        character.classList.add("turnDown"); // Determina que as características da classe "turnDown" se aplicam ao character.
        yPosition += VELOCITY; // Determina a mudança na coordenada Y após a seta para baixo ser pressionada.
    }

    if(key === "ArrowLeft"){ // Determina se a tecla seta para a esquerda está sendo clicada.
        character.classList.add("turnLeft"); // Determina que as características da classe "turnLeft" se aplicam ao character.
        xPosition -= VELOCITY; // Determina a mudança na coordenada X após a seta para a esquerda ser pressionada.
    }

    if(key === "ArrowRight"){ // Determina se a tecla seta para a direita está sendo clicada.
        character.classList.add("turnRight"); // Determina que as características da classe "turnRight" se aplicam ao character.
        xPosition += VELOCITY; // Determina a mudança na coordenada X após a seta para a direita ser pressionada.
    }

    containerCharacter.style.top = `${yPosition}px`; // Determina a coordenada exata do topo do personagem.
    containerCharacter.style.left = `${xPosition}px` // Determina a coordenada exata da lateral esquerda do personagem.

    xPosition = Math.max(0, Math.min(SCREEN_WIDTH - 180, xPosition)); // Colisão do personagem com as bordas laterais. Os valores escolhidos foram 0 e "SCREEN_WIDTH - 180", pois foram os que se adaptaram melhor ao cenário. 
    yPosition = Math.max(30, Math.min(SCREEN_HEIGHT - 190, yPosition)); // Colisão do personagem com a borda superior e inferior. Os valores escolhidos foram 30 e "SCREEN_HEIGTH - 190", pois foram os que se adaptaram melhor ao cenário.
    // Math.max --> Retorna o maior valor.
    // Math.min --> Retorna o menor valor.
});
