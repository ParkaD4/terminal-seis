var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cPAPAI! TIRARAM A MINHA CONTA DO YOUTUBE KIDS, ME AJUDA PFVR😭",
  "color: #14ff29; font-weight: bold; font-size: 24px;"
);
console.log("%cOlha!: '" + luan + "' - Eu amo esse vídeo papai😄", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("Inserindo: " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}
function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "comandos":
      loopLines(comandos, "color2 margin", 80);
      break;
    case "dadosatuais":
      loopLines(dadosatuais, "color2 margin", 80);
      break;
    case "navemae":
      loopLines(navemae, "color2 margin", 80);
      break;
    case "catálogo":
      loopLines(catálogo, "color2 margin", 80);
      break;
    case "seita":
      loopLines(seita, "color2 margin", 80);
      break;
    case "locaisdeinteresse":
      loopLines(locaisdeinteresse, "color2 margin", 80);
      break;
    case "projetos":
      loopLines(projetos, "color2 margin", 80);
      break;
    case "inglaterra":
      loopLines(inglaterra, "color2 margin", 80);
      break;
    case "oceanopacífico":
      loopLines(oceanopacífico, "color2 margin", 80);
      break;
    case "climatização":
      loopLines(climatização, "color2 margin", 80);
      break;
    case "eletricidade":
      loopLines(eletricidade, "color2 margin", 80);
      break;
    case "limpar":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "wallpaper":
      addLine("...", "color2", 0);
      newTab(wallpaper);
      break;
    case "bailao":
      addLine('Iniciando bailão do <span class="liam">Seis</span>...', "color2", 0);
      newTab(bailao);
      break;
    case "confidencial":
      addLine('Arquivo de extrema importância.', "color2", 0);
      newTab(confidencial);
      break;
    case "taodiolhoinnois":
      addLine('<span class="liam">Eles tão di olho in nois</span>', "color2", 0);
      newTab(taodiolhoinnois);
      break;
    case "alheios":
      loopLines(alheios, "color2 margin", 80);
      break;
    case "parasitas":
      loopLines(parasitas, "color2 margin", 80);
      break;
    case "camuflados":
      loopLines(camuflados, "color2 margin", 80);
      break;
    case "psicônicos":
      loopLines(psicônicos, "color2 margin", 80);
      break;
    case "descartáveis":
      loopLines(descartáveis, "color2 margin", 80);
      break;
    case "magnumopus":
      loopLines(magnumopus, "color2 margin", 80);
      break;
    case "loki":
      loopLines(loki, "color2 margin", 80);
      break;
    case "nicolau":
      loopLines(nicolau, "color2 margin", 80);
      break;
    case "ninki":
      loopLines(ninki, "color2 margin", 80);
      break;
    case "kaori":
      loopLines(kaori, "color2 margin", 80);
      break;
    case "ryomenkaori":
      loopLines(kaori, "color2 margin", 80);
      break;
    case "ryomen":
      loopLines(kaori, "color2 margin", 80);
      break;
    case "kehhev":
      loopLines(kehhev, "color2 margin", 80);
      break;
    case "keh-hev":
      loopLines(kehhev, "color2 margin", 80);
      break;
    case "yahan":
      loopLines(yahan, "color2 margin", 80);
      break;
    case "nana":
      loopLines(nana, "color2 margin", 80);
      break;
    case "sussurro":
      loopLines(sussurro, "color2 margin", 80);
      break;
    case "cole":
      loopLines(cole, "color2 margin", 80);
      break;
    case "morgana":
      loopLines(morgana, "color2 margin", 80);
      break;
    case "doppelgänger":
      loopLines(doppelgänger, "color2 margin", 80)
      break;
    case "doppelganger":
      loopLines(doppelgänger, "color2 margin", 80)
      break;
    case "doppelgängers":
      loopLines(doppelgänger, "color2 margin", 80)
      break;
    case "doppelgangers":
      loopLines(doppelgänger, "color2 margin", 80)
      break;  
    case "estrangeiro":
    addLine('<span class="liam">                                                                                                                                      ██▓▒▒▓▒▓▓██</span>', "color2", 0);
    addLine('<span class="liam">                                                                                                                                  ██▓▓▒▒▒▒▒▓▓▒▓▓▓▒▒███ </span>', "color2", 0);                                                                                                                                      
    addLine('<span class="liam">                                                                                                                             ███▓▒▓▒▒▒▒▒▒▒▒▓▓▒▓▓▓▒▒▒▒▒▓███</span>', "color2", 0);                                                                                                                                    
    addLine('<span class="liam">                                                                                                                             ██▓▓▓▒▒▒▒▒▒▒▒▒▓▓▒▓▓▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                                                    
    addLine('<span class="liam">                                                                                                                             █▓█▓▓▒▓▒▓▓▒▒▒▒▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓</span>', "color2", 0);                                                                                                                                    
    addLine('<span class="liam">                                                                                                                             █▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓▒▒▒▒▓▓▓▓▓▓█▓██</span>', "color2", 0);                                                                                                                                   
    addLine('<span class="liam">                                                                                                                             █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                                                   
    addLine('<span class="liam">                                                                                                                             █▓▓▒█▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓█▓▓▓█</span>', "color2", 0);                                                                                                                                   
    addLine('<span class="liam">                                                                                                                             ███▓▓▓▓▓▓▓▓▓▓▓█▓▒▓▓▓▓▓▓▓▓▓▓███</span>', "color2", 0);                                                                                                                                   
    addLine('<span class="liam">                                                                                                                            ██▓██▒▓▓▓▓▓▓▓▓▓█▓▒▓▓▓▓▓▓▓▓▓██▓██</span>', "color2", 0);                                                                                                                                  
    addLine('<span class="liam">                                                                                                                           ███▓█▓▓█▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▒▒▒▓▓▓████</span>', "color2", 0);                                                                                                                                  
    addLine('<span class="liam">                                                                                                                           ██████▓▒▓▓▓▓▓▓▓▓██▓▓▓▒▓▒▓▒▓▓██████</span>', "color2", 0);                                                                                                                                 
    addLine('<span class="liam">                                                                                                                          ██████████▓▓▓▓▓▓▓██▓▓▓▓█▓▓█████████</span>', "color2", 0);                                                                                                                                 
    addLine('<span class="liam">                                                                                                                          ████████▓▓▓█▓▓▓▓▒██▓▓▓▓██▓▒▓█▒▓████</span>', "color2", 0);                                                                                                                                
    addLine('<span class="liam">                                                                                                                          █████▓▓██▓▒▒▓█▒▒▒██▒▒▓█▓▒▒▓█▓▒▓█████</span>', "color2", 0);                                                                                                                             
    addLine('<span class="liam">                                                                                                                         ██████▓█▓▓█▓▓▓█▓▓███▓▒▒▓▓▓▓▓▓█████████</span>', "color2", 0);                                                                                                                               
    addLine('<span class="liam">                                                                                                                        ███████▓█▓▓▓▓▓▒▒▒▒▒██▒▒▓▒▓▓▒▓▒▓████████</span>', "color2", 0);                                                                                                                               
    addLine('<span class="liam">                                                                                                                        ███ █████▓▓█▓▓▒▓▓▓▓█▓▒▓▓▓▓▓▓▓▓▓█████ ███</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        ███ ██████▓▓▓▓▓▓▓▓▓█▓▒▓▓▓▓▓▓▓▓██████ ███</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        ███ ███████▓▓▓█▓▓█▓█▓▒▓▓█▓▓▓▓▓██████ ███</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        ███ ███████▓█▓██▓█▓██▓█▓▓█▓▓▓███████ ███</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        ███ █████████▓████▓██████▓▓▓████████ ███</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        █████████████▓▓▓█▓█▓██▓▓▓▓▓██████ ██████</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                        █████████████▓▓▓▓▒█▓▓█▓▓████████ █████</span>', "color2", 0);                                                                                                                              
    addLine('<span class="liam">                                                                                                                         ███████████████▓▓▓█▓▓▓▓██████████ ████</span>', "color2", 0);                                                                                                                            
    addLine('<span class="liam">                                                                                       █████                             █████████████████▓██▓██████▓██████ ███                             ██▓▓██</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                        █████████                      █████████████████████████████████████ ███                       ██▓▓▓▓▓███</span>', "color2", 0);                                                                                             
    addLine('<span class="liam">                                                                                         ███████▓▓▓████              ██████████████████████████████▓█████████████               ████▓▓▓▓▓▓▓▓▓████</span>', "color2", 0);                                                                                             
    addLine('<span class="liam">                                                                                          ███████▓▓▓▓▓▓█▓▓▓▓█████  █████████████████████████████████████████████████   █████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                           ███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓███████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                            ███████▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓██████████▓████▓████████▓███████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                             ███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓██████████▓███████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██████████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                             ███████▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████▓████████████████▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                             ████████▓▓▓▓█▓█▓▓▓▓▓█▓▓▓▓████████████████████████████████████████▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓█████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ███████▓▓█▓▓█▓▓▓▓▓▓▓▓█▓▓███████████████████████▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ███████▓▓▓█▓█▓██▓▓▓▓▓▓▓█▓████▓██▓███████████████████████████████▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓█▓▓▓████████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ████████▓▓▓█▓▓▓█▓▓▓▓▓▓▓▓████▓███▓████████████████████████████████▓▓▓▓█▓█▓▓▓▓▓▓██▓▓▓▓████████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ████████▓▓▓▓██▓▓█▓▓▓▓▓▓████████▓▓█▓██████████████████████████▓███▓▓▓▓██▓▓▓▓▓▓▓▓█▓▓▓▓████████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ████████▓▓▓▓██▓▓███▓▓▓▓▓██████▓▓▓█▓██████████████████████████▓▓███▓▓▓██▓▓▓▓█▓▓█▓▓▓▓█▓██████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              ████████▓▓▓▓▓█▓▓▓█▓█▓▓▓▓▓█████▓▓▓█▓███████████▒▒███████████▓█▓▓▓███▓▓██▓▓▓▓▓▓███▓▓▓▓███████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓██▓▓███▓▓▓▓▓████▓▓▓▓██████████▓▓▓█▓█████████▓█▓█▓▓▓▓██▓▓██▓▓▓▓▓▓▓█▓▓▓█▓███████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓██▓▓▓██▓▓▓▓▓███▓▓▓▓▓▓█████████▓▓▓▓▓████████▓▓█▓█▓▓█▓███▓██▓▓▓█▓▓▓█▓▓▓▓███████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓██▓▓▓██▓▓▓▓████▓▓▓▓▓▓██████████▓▓▓▓████████▓▓█▓█▓▓▓▓▓██▓██▓▓▓▓▓▓█▓▓▓▓▓███████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓▓█▓▓▓██▓▓▓█████▓▓▓▓█▓██████████▓▓▓█████▓▓▓█▓▓█▓▓▓▓▓▓▓▓████▓▓▓▓▓▓█▓▓▓▓████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓▓█▓▓▓██▓▓▓█████▓▓▓▓█▓███████████▓▓████▓▓▓▓█▓▓█▓▓▓▓▓▓▓▓████▓▓▓▓▓▓█▓▓▓▓█▓██████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███████▓▓▓▓▓▓█▓▓▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓███████▓█████▓██▓▓▓████▓██▓▓▓▓▓▓▓▓███▓▓▓▓▓▓███▓▓█▓██████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██████▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓██▓▓▓▓▓███▒▓█████████▓██▓▓██▓▓█▓██▓█▓▓▓▓▓▓█▓█▓▓▓▓▓▓██▓▓█▓▓██████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██████▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓██▓▓▓▓████▓▓████▓████▓█▓▓▓██▒██▓██▓█▓▓▓▓▓▓█▓█▓▓▓▓▓▓██▓▓█▓▓██████████</span>', "color2", 0);                                                                                  
    addLine('<span class="liam">                                                                                               ██████▓▓▓▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓██▓▓▓▓████▓▓▓███▓████▓█▓▓██▓█▓████▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓██▓▓▓▓▓██████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █████▓▓▓▓▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓██▓▓▓▓████▓▓▓▓██▓████▓██▓█▓▓▓▓████▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓██████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █████▓▓▓▓▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓██▓▓▓▓████▓▓▓▓██▓████▓█▓▓█▓▓▓▓▓███▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓████████▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █████▓▓▓▓▓▓▓▓▓█▓▓▓█▓▓▓▓▓▓█▓▓▓▓█████▓▓▓████▓██▓██▓▓█▓▓▓▓██▓█▓██▓▓▓█▓██▓▓▓▓▓▓▓██▓▓▓▓▓███████▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ████▓▓▓▓█▓▓▓▓█▓▓▓▓█▓▓▓▓▓▓█▓▓▓▓█████████████▓███▓▓▓█████████▓▓█▓▓▓█▓██▓▓▓▓▓▓▓██▓▓▓▓▓███████▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ████▓▓▓▓█▓▓▓▓█▓▓▓▓█▓▓▓▓▓▓█▓▓▓▓████████████████▓▓▓███▓███████▓█▓▓▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓██████▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███▓▓▓▓█▓▓▓▓▓█▓▓▓▓█▓▓▓▓▓██▓▓▓▓████████████████▓▓▓██▓▓▓████▓▓▓▓█▓▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓█████▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ███▓▓▓██▓▓▓▓▓█▓▓▓▓█▓▓▓▓▓██▓▓▓▓████████████████▓▓▓█▓▓▓▓████▓▓▓▓█▓▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓████▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓█▓▓▓▓▓▓█▓▓▓██▓▓▓▓▓██▓▓▓████████████████▓▓▓█▓▓▓▓██████▓▓▓█▓▓▓▓██▓█▓▓▓▓▓██▓▓▓▓▓████▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓█▓▓▓▓▓▓█▓▓▓██▓▓▓▓▓██▓▓▓████▒████████████▓▓█▓▓▓████▒██▓▓▓▓█▓▓▓██▓▓▓▓▓▓▓██▓▓▓▓▓███▓▓▓▓▓███</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ██▓▓▓▓█▓▓▓▓▓▓█▓▓▓██▓▓▓▓██▓▓▓▓█████▓███████████▓█▓▓▓▓███▓▓██▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓▓▓▓██▓▓▓▓███▓▓▓▓███████████▓▓▓▓▓█▓▓▓▓██▓▓▓▓▓█▓▓██▓█▓▓▓▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓▓▓▓██▓▓▓█████▓▓▓▓██████▓██▓▓▓▓▓██▓▓▓▓▓█▓▓▓▓▓▓█▓██▓█▓▓█▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓▓▓███▓▓▓██████▓▓▓██████████▓█▓██▓▓▓█████▓▓▓▓▓▓▓██▓█▓▓█▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓▓▓██▓▓▓▓█████████▓▓█████████▓▓█▓▓██▓████▓▓▓▓▓▓███▓█▓▓█▓▓█▓▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓███▓▓██▓▓▓███████████▓██████▓▓██▓█▓▓▓▓██████▓▓▓▓▓▓▓█▓█▓▓█▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓█▓▓▓▓▓▓▓█▓█▓███▓███▓▓▓██████████████████▓▓████▓▓▓▓██████▓▓▓▓▓▓▓▓██▓▓█▓▓▓█▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓█▓▓▓▓▓▓▓█▓█▓███▓███▓▓██▓███▓████████████▓▓████▓▓▓███████▓▓▓▓▓▓▓▓██▓▓█▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓█▓▓▓▓▓▓▓█▓▓████▓██▓▓▓██▓███▓▓███████████▓█████▓▓████████▓▓▓▓▓▓▓▓██▓▓█▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               █▓▓▓▓█▓▓▓▓▓▓▓█▓▓███████▓▓▓█▓▓████▓███████████▓██████▓██▓▓█████▓▓▓▓▓▓▓██▓▓█▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █▓▓▓▓▓▓▓▓▓▓█▓██▓███▓███▓▓▓█▓█████▓▓██████▓██████▓▓▓▓███▓▓█████▓▓▓▓▓▓▓██▓▓█▓▓█▓▓▓▓▓▓█▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █▓▓▓▓▓▓▓▓▓▓█▓██▓███▓██▓▓▓██▓██████▓▓████████████▓▓▓███▓▓▓█████▓▓▓▓▓▓▓▓█▓▓█▓▓█▓▓▓▓█▓█▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               █▓▓▓▓▓▓▓▓▓▓█▓██▓███▓██▓▓▓█▓▓███████▓████████████▓▓▓██▓▓▓▓███████▓▓▓▓▓▓█▓▓█▓██▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █▓▓▓▓▓▓▓▓▓▓█▓█▓▓███▓██▓▓██▓▓███████▓▓███████████▓▓███▓▓▓████████▓▓▓▓▓▓█▓▓███▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█████▓▓▓█▓▓█████████▓███████████▓▓██▓▓▓▓██▓██████▓▓▓▓▓██████▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓█</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓█▓▓▓▓▓▓▓▓█▓█████▓▓▓█▓▓█████████▓▓██████████▓███▓▓▓███▓████████▓▓███████▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓████▓▓██▓▓█████████▓▓██████████▓███▓▓▓█████████████████████▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓████▓▓█▓▓▓██████████▓▓████████▓▓██▓▓▓███▓█████████████████▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓████▓██▓▓▓██████████▓▓████████▓███▓▓▓██████▓██████████████▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓███████████▓▓████████▓████▓▓████▓▓███████████████▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓▓██████▓█████▓███████▓▓████▓███▓██████████████████▓▓▓▓▓▓██▓▓▓▓▓▓▓███</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████▓▓▓██████▓█████▓███████▓███████▓▓███████████████████▓▓▓▓▓▓██▓▓▓▓▓▓████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓████████████████▓█████▓████████████▓▒█████████████████████▓▓▓▓▓▓▓██▓▓█▓▓▓████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓██████▓████▓██████████▓█████████▓▓████████████████████████▓▓▓▓▓▓▓██▓▓█▓▓█████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓█████▓▓████▓██████▓▒▓▓▓▓▓▒▒▒▓▓▓██████████████▓████████████▓▓▓▓▓▓▓██▓▓█▓██████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓█▓▓▓█▓██▓▓▓████▓█▒▓██████████████████████████████▓████████████▓▓█▓▓▓███▓▓████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓████▓▓███▒███████████████▓█████████████▓▓███████████▓████▓███▓▓████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓████▓▓██████▓▓▒▓██▓█▓▓▓▓▓▓████▓▒▒▓▓████▓▓███████████▓█████▓██▓▓████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓████▓▓████▓▓██▓████████████▓▓▓▓▓▓▓▓▓██████████▓███████████▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓████▓▓████▓▓███▓▓█████████████████████████████▓███████████▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓▓█▓▓▓▓▓▓▓▓▓▓▓███▓▓▓████▓▓█████▒▓███████████████████████████▓▓█████████▓▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓▓███▓▓▓████▓▓███████▒▓█████████████████████████▓▓█████████▓▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓▓███▓▓█████▓▓▓████████▓▒▓██████████████████████▓▓█████████▓▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓█▓██▓▓█████▓▓▓███████████▓▒▓██████████████████▓▓▓█████████▓▓██████████████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓█▓██▓▓█████▓▓▓███████████████▓▓▓██████████████▓▓▓█████████▓▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓█▓██▓▓█████▓▓▓███████████████████▓▒▒▓█████████▓▓▓▓████████▓▓███████████████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓█▓██▓▓████▓▓▓▓█████████████████████████▓▒▒████▓▓▓▓████████▓▓██████████████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               ██▓██▓▓▓▓▓▓▓▓▓▓████▓▓█████▓▓▓▓██████████████████████████████▓▓▓▓▓█████▓██▓▓█████████▓████████</span>', "color2", 0);                                                                                                  
    addLine('<span class="liam">                                                                                               █████▓▓▓▓▓▓▓▓▓▓█▓██▓▓█████▓▓▓▓██████████████████████████████▓▓▓▓▓█████▓▓█▓▓█████████▓█████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               ████▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓█████▓▓▓▓██████████████████████████████▓▓▓▓▓████▓▓▓█▓▓████████▓▓█████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              ██▓██▓▓▓▓▓▓▓▓▓▓▓█▓██▓█████▓▓▓▓▓██████████████████████████████▓▓▓▓▓███▓▓▓▓██▓█████████▓█████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                               █▓██▓▓▓▓▓▓▓▓▓▓▓█▓██▓█████▓█████████████████████████████████▓████████▓▓▓██▓▓████████▓██████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              █████▓▓▓▓▓▓▓▓▓▓▓█▓██▓████████████████████████████████████████████████▓▓▓███▓████████▓█▓████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              █████▓▓▓▓▓▓▓▓▓▓▓█▓██▓███████████████████████████████████████████████▓▓▓▓███▓████████▓▓█████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              █████▓▓▓▓▓▓▓▓▓▓█████▓███████████████████████████████████████████████▓▓▓▓███▓████████▓█▓████████</span>', "color2", 0);                                                                                                 
    addLine('<span class="liam">                                                                                              █████▓▓▓▓▓▓▓▓▓▓█████▓███████████████████████████████████████████████▓▓▓▓▓██▓▓█████████▓▓████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ████▓▓▓▓▓▓▓▓▓▓▓████▓▓████████████████████████████████████████████████▓▓▓▓██▓▓█████████▓▓████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                              ████▓▓▓▓▓▓▓▓▓▓▓████▓██████████████████████████████████████████████████▓▓▓██▓▓█████████▓▓████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                             █████▓▓▓▓▓▓▓▓▓▓▓█▓██▓████████████████████████████████████████████████████▓██▓▓████████▓█▓████████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                             ████▓▓▓▓▓▓▓▓▓▓▓██▓█▓▓████████████████████████████████████████████████████▓██▓▓██████████▓▓███████</span>', "color2", 0);                                                                                                
    addLine('<span class="liam">                                                                                             ██▓█▓▓▓▓▓▓▓▓▓▓▓██▓█▓▓████████████████████████████████████████▓▓██████████▓███▓██████████▓▓████████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                             ██▓█▓▓▓▓▓▓▓▓▓▓▓██▓█▓▓███████████▓▓██████████████████████████▓▓▓▓█████████▓███▓▓█████████▓▓████████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            ███▓█▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓███████████▓▓██████████████████████████▓▓▒▒█████████▓▓██▓▓█████████▓▓▓███████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            ███▓█▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓██████████▓▓▓▓████████████████████████▓▓▓▒▓▓████████▓▓██▓▓██████████▓▓███████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            ██▓▓▓▓▓▓▓▓▓▓▓▓███▓█▓▓▓█████████▓▓▓▒▓███████████████████████▓▒▒▒▒▒▓████████▓▓██▓▓██████████▓▓███████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓██████████▒▓▓▓█▒██████████████████████▓▓▓▓▓▒▓███████▓▓███▓██████████▓▓▓██████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓█████████▓▒▒▓▓▓██████████████████████▓▓▓▒▓▓██████████▓███▓▓█████████▓▓▓██████</span>', "color2", 0);                                                                                               
    addLine('<span class="liam">                                                                                            █▓█▓▓▓▓▓▓▓▓▓▓▓██▓██▓▓▓█████████▒▒▒▓▓▓█████████████████████▓▓▓▒▒▓▓██████████▓███▓▓███████▓██▓▓███████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                           ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓██▓▓▓█████████▓▓▒▓▓▓▓████████████████████▓▓▓▓▓▓▓██████████▓▓██▓▓██████████▓▓███████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                           ███▓▓▓▓▓▓▓▓▓▓▓██▓▓██▓▓▓████████▓▓▓▓▓▓▓▓▒██████████████████▓▓▓▓▓▓▓▓▓█████████▓▓██▓▓██████████▓▓▓██████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                           ███▓▓▓▓▓▓▓▓▓▓▓██▓▓█▓▓▓▓██████████▓▓▓▓▓▓████████████████████▓▓▓▒▓████████████▓▓██▓▓▓███████▓██▓▓██████</span>', "color2", 0);                                                                                              
    addLine('<span class="liam">                                                                                           ███▓▓▓▓▓▓▓▓▓▓▓██▓██▓▓▓▓██████████▓▒█▓▓▓▓██████████████████▓▓▓▒▓▓█████████████▓███▓▓███████▓██▓▓███████</span>', "color2", 0);                                                                                             
    addLine('<span class="liam">                                                                                          ███▓▓▓▓▓▓▓▓▓▓▓▓█▓▓██▓▓▓███████████▓▓▓▓▓▓▓▒▒███████████████▓▓▓▒██▒▒████████████▓▓██▓▓███████▓██▓▓███████</span>', "color2", 0);                                                                                             
    addLine('<span class="liam">                                                                                          ███▓▓▓▓▓▓▓▓▓▓▓▓█▓██▓▓▓█████████████▓▓█▓▓██████████████▓███▓▓▓█▓▓▓█████████████▓▓██▓▓███████████▓▓██████</span>', "color2", 0);                                                                                             
    addLine('<span class="liam">                                                                                          ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓████████████▓██▓▓▓████████████████████▓▓▓▓███████████████▓▓██▓▓███████▓██▓▓███████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                          ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓███████████████▓▓▒▒▒░░▓██████████▓▓▒▓▒▒▓▓████████████████▓▓▓█▓▓███████▓██▓▓███████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                          ██▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓▓██████████████▓▒▓▒▓▒▒░▓██████████▓▒░▓▒▓▒▓▓███████████████▓▓██▓▓██████████▓▓███████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                         ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓██████████████▓▒▒▓▒▒▒░░░██████████▒▒▒▒▓▒▒▒▓▓███████████████▓▓▓█▓████████▓██▓▓██████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                         ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓██████████████▓▒▒▒▒▒▓▒░░█████████▒▒▒▒▒▓▒▒▒▓████████████████▓▓█▓▓▓███████▓██▓▓██████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                         ██▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓███████████████▓▒▒▒▒▒▒▒▒▒▓████████▓▓▒▒▒▓▒▒▒▓█████████████████▓█▓▓▓███████▓██▓▓██████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                        ██▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓███████████████▓▒▒▒▓▒▒▓▒▒▓████████▓▓▓▓▓▓▓▓▓▓█████████████████▓▓▓▓▓████████▓█▓▓▓█████</span>', "color2", 0);                                                                                            
    addLine('<span class="liam">                                                                                        ██▓▓▓▓▓▓▓▓▓▓▓▓█▓▓██▓▓▓███████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓██████████████████▓█▓▓████████▓█▓▓▓██████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                        ██▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓█████████████▓████▓█▓▓▓███████▓██▓▓██████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                       ███▓▓▓▓▓▓▓█▓▓▓▓█▓██▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓█████████████▓████▓▓▓▓▓███████▓▓█▓▓▓█████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                       ██▓▓▓▓▓▓▓▓█▓▓▓█▓▓█▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓█▓▓█████████████▓█████▓▓▓▓███████▓▓█▓▓▓█████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                       ██▓▓▓▓▓▓▓█▓▓▓▓█▓██▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓█▓▓▓████████████▓▓████▓▓▓▓▓██████▓▓██▓▓▓████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                       █▓▓▓▓▓▓▓▓█▓▓▓██▓█▓▓▓▓████████████████▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓█████████████▓███▓▓▓▓▓▓███████▓▓█▓▓▓████</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                      ██▓▓▓▓▓▓▓██▓▓▓██▓█▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓█████████████▓▓██▓▓▓▓▓▓███████▓▓█▓▓▓▓███</span>', "color2", 0);                                                                                           
    addLine('<span class="liam">                                                                                      █▓▓▓▓▓▓▓▓█▓▓▓▓█▓▓█▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓██▓▓▓▓▓███████▓▓▓▓▓▓▓████</span>', "color2", 0);                                                                                          
    addLine('<span class="liam">                                                                                     ██▓▓▓▓▓▓▓██▓▓▓██▓█▓▓▓▓██████████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓█▓▓▓▓█████████████▓▓▓██▓▓▓▓▓▓███████▓▓█▓▓▓▓███</span>', "color2", 0);                                                                                          
    addLine('<span class="liam">                                                                                     ██▓▓▓▓▓▓██▓▓▓▓██▓█▓▓▓▓██████████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓██▓▓▓▓▓▓███████▓▓█▓▓▓▓▓███</span>', "color2", 0);                                                                                         
    addLine('<span class="liam">                                                                                    ██▓▓▓▓▓▓▓██▓▓▓▓███▓▓▓▓▓██████████████████▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓█████████████▓▓▓▓█▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓███</span>', "color2", 0);                                                                                         
    addLine('<span class="liam">                                                                                    ██▓▓▓▓▓▓██▓▓▓▓██▓█▓▓▓▓██████████████████▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓▓████████████▓▓▓▓▓▓▓▓▓▓▓▓██████▓▓▓█▓▓▓▓▓██</span>', "color2", 0);                                                                                         
    addLine('<span class="liam">                                                                                   ██▓▓▓▓▓▓███▓▓▓▓██▓▓▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓█▓▓▓▓▓████████████▓▓▓▓█▓▓▓▓▓▓██████▓▓▓▓█▓▓▓▓███</span>', "color2", 0);                                                                                        
    addLine('<span class="liam">                                                                                   ██▓▓▓▓▓███▓▓▓▓████▓▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓▓▓███████████▓▓▓▓▓▓▓▓▓▓▓▓▓██████▓▓▓█▓▓▓▓▓██</span>', "color2", 0);                                                                                        
    addLine('<span class="liam">                                                                                  ██▓▓▓▓▓█▓██▓▓▓████▓▓▓▓▓██████████████████▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓█▓▓▓▓▓████████████▓▓▓▓▓▓▓▓▓▓▓▓██████▓▓▓██▓▓▓▓██</span>', "color2", 0);                                                                                        
    addLine('<span class="liam">                                                                                  █▓▓▓▓▓▓█▓█▓▓▓▓███▓▓▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓█▓▓▓▓▓▓████████████▓▓▓▓██▓▓▓▓▓███████▓▓▓█▓▓▓▓▓██</span>', "color2", 0);                                                                                       
    addLine('<span class="liam">                                                                                 ██▓▓▓▓▓█▓▓▓▓▓▓▓███▓▓▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓███████████▓█▓▓▓▓█▓▓▓▓▓▓██████▓▓▓██▓▓▓▓██</span>', "color2", 0);                                                                                       
    addLine('<span class="liam">                                                                                 ██▓▓▓▓█▓▓▓▓▓▓▓████▓▓▓▓▓█████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████▓▓▓▓▓▓█▓▓▓▓▓██████▓▓▓▓██▓▓▓▓█</span>', "color2", 0);                                                                                       
    addLine('<span class="liam">                                                                                 █▓▓▓▓█▓▓█▓▓▓▓▓███▓▓▓▓▓▓████████████████▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓█████▓▓▓▓██▓▓▓▓██</span>', "color2", 0);                                                                                      
    addLine('<span class="liam">                                                                                ██▓▓▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓█████████████████▒▒██▒▓▓▓▓▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓▓█▓▒▒▓█████████▓█▓▓▓▓█▓▓▓▓▓▓██████▓▓▓███▓▓▓▓█</span>', "color2", 0);                                                                                      
    addLine('<span class="liam">                                                                               ██▓▓▓▓▓▓█▓▓▓▓▓████▓▓▓▓▓▓████████████████▒▒▓█▓▒▒▒▒▓▓▓▓▓▓███████████▓▓▓▓▓▓▓▓▓▒▒▓█▓▒▒█████████▓▓▓▓▓▓▓█▓▓▓▓▓▓██████▓▓▓██▓▓▓▓██</span>', "color2", 0);                                                                                     
    addLine('<span class="liam">                                                                              ███▓▓▓▓▓█▓▓▓▓▓████▓▓▓▓▓▓▓███████████████▓▒▓██▓▒▒▒▒▓▓▓▓▓▓███████████▓▓▒▓▓▓▒▓▓▒▒▓██▒▒▓█████████▓▓▓▓▓▓██▓▓▓▓▓▓█████▓▓▓███▓▓▓▓█</span>', "color2", 0);                                                                                     
    addLine('<span class="liam">                                                                              ██▓▓▓▓▓█▓▓▓▓▓▓████▓▓▓▓▓▓███████████████▓▒▓███▓▒▒▓▒▓██▓▒▒███████████▓▒▒▓██▒▒▓▒▒▒███▒▒█████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████▓▓█▓█▓▓▓▓█</span>', "color2", 0);                                                                                     
    addLine('<span class="liam">                                                                              ██▓▓▓▓█▓▓▓▓▓▓████▓▓▓▓▓▓▓███████████████▒▓████▒▒▓▒▒███▒▒▒███████████▓▒▒▓███▒▒▓▒▒████▒▒████████▓▓▓▓▓▓▓█▓▓▓▓▓▓▓█████▓▓▓███▓▓▓██</span>', "color2", 0);                                                                                    
    addLine('<span class="liam">                                                                             ██▓▓▓▓██▓▓▓▓▓████▓▓▓▓▓▓▓▓██████████████▓▓█████▒▒▓▒████▓▒▒███████████▓▒▒████▓▒█▒▒█████▒▒████████▓▓▓▓▓▓▓█▓▓▓▓▓▓██████▓▓▓▓██▓▓▓██</span>', "color2", 0);                                                                                   
    addLine('<span class="liam">                                                                             █▓▓▓▓▓█▓▓▓▓▓█████▓▓▓▓▓▓▓█████████████▓▓▓█████▓▒▓▓▒█████▒▒▒██████████▓▒▒█████▒█▒▒▓█████▓▓███████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████▓▓▓███▓▓▓▓█</span>', "color2", 0);                                                                                   
    addLine('<span class="liam">                                                                            ██▓▓▓▓█▓▓▓▓▓█████▓▓▓▓▓▓▓████████████▓▓▓███████▓▒█▒▓▓████▒▒▒██████████▒▒▒█████▒▒▓▒▒███████▓▓█████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▓█▓▓▓███▓▓▓██</span>', "color2", 0);                                                                                  
    addLine('<span class="liam">                                                                            █▓▓▓▓█▓▓▓▓▓▓████▓▓▓▓▓▓▓▓███████▓▓▓▓▓█████████▓▓█▓▒██████▓▒▒██████████▓▒██████▓▒█▓▓██████████▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓█▓▓▓████▓▓██</span>', "color2", 0);                                                                                  
    addLine('<span class="liam">                                                                           ██▓▓▓█▓▓▓▓▓██████▓▓▓▓▓▓▓█████▓████████████████▓██▓▓██████▓▓████████████▓███████▒▓██▓████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓█▓▓▓███▓▓▓██</span>', "color2", 0);                                                                                 
    addLine('<span class="liam">                                                                          ██▓▓▓█▓▓▓▓▓██████▓▓▓▓▓▓▓▓████████████████████▓▓█▓▓▓████████▓████████████▓███████▓▓▓██▓█████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓█▓▓▓███▓▓██</span>', "color2", 0);                                                                                 
    addLine('<span class="liam">                                                                          █▓▓▓█▓▓▓▓▓██████▓▓▓▓▓▓▓▓████████████████████▓▓██▓█████████▓▓█████████████▓████████▓▓██▓█████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓█▓▓▓██▓▓▓██</span>', "color2", 0);                                                                                
    addLine('<span class="liam">                                                                         ██▓██▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓███████████████████▓▓██▓██████████▓▓█████████████▓██████████▓██▓█████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██▓▓▓▓█</span>', "color2", 0);                                                                               
    addLine('<span class="liam">                                                                        ██▓██▓▓▓▓▓█▓█████▓▓▓▓▓▓▓▓▓██████████████████▓███▓██████████▓▓██████████████▓███████████▓███▓███████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██▓▓███</span>', "color2", 0);                                                                              
    addLine('<span class="liam">                                                                       ██▓██▓▓▓▓▓▓▓█████▓▓▓▓▓▓▓▓▓▓████████████████▓███▓████████████▓███████████████▓▓████████████▓███▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓█▓▓▓██</span>', "color2", 0);                                                                              
    addLine('<span class="liam">                                                                       █▓██▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓███████████████▓▓███▓█████████████▓████████████████▓█████████████▓███▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓██</span>', "color2", 0);                                                                             
    addLine('<span class="liam">                                                                      ████▓▓▓▓▓▓▓▓██▓██▓▓▓▓▓▓▓█▓▓██████████████▓██████████████████▓█████████████████▓████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██▓▓▓██</span>', "color2", 0);                                                                            
    addLine('<span class="liam">                                                                     ████▓▓▓▓▓▓▓▓█▓▓██▓▓▓▓▓▓▓█▓▓██████████████████████████████████▓███████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██▓▓▓██</span>', "color2", 0);                                                                           
    addLine('<span class="liam">                                                                    █▓██▓▓▓▓▓▓▓██▓▓██▓▓▓▓▓▓▓▓█▓▓█████████████████████████████████▓█▓███████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓██▓▓██</span>', "color2", 0);                                                                           
    addLine('<span class="liam">                                                                   ████▓▓▓▓▓▓▓██▓▓███▓▓▓▓▓▓▓█▓▓████████████████████████████████████▓████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓█</span>', "color2", 0);                                                                          
    addLine('<span class="liam">                                                                  ███▓▓▓▓▓▓▓▓█▓▓▓███▓▓▓▓▓▓▓█▓▓▓████████████████████████████████████▓█████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓██</span>', "color2", 0);                                                                        
    addLine('<span class="liam">                                                                ███▓▓▓▓▓█▓▓█▓▓▓▓███▓▓▓▓▓▓▓██▓▓█████████████████████████████████████▓████████████████████████████████████████████████▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓██▓▓███</span>', "color2", 0);                                                                       
    addLine('<span class="liam">                                                               ████▓▓▓▓▓▓█▓▓▓▓▓████▓▓▓▓▓▓▓█▓█▓███████████████████████████████████████████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓███▓▓███</span>', "color2", 0);                                                                      
    addLine('<span class="liam">                                                              ████▓▓▓████▓▓▓▓▓█▓██▓▓▓▓▓▓▓██▓▓█████████████████████████████████████▓███████████████████████████████████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓█▓▓████</span>', "color2", 0);                                                                    
    addLine('<span class="liam">                                                            █████▓▓▓████▓▓▓▓██▓██▓▓▓▓▓▓▓██▓▓▓███████████████████████████▓█████████▓████████████████████████████████████████▓█████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓█████</span>', "color2", 0);                                                                  
    addLine('<span class="liam">                                                           █████▓▓▓████▓▓▓▓██▓██▓▓▓▓▓▓▓██▓▓▓██████████████████████████████████████▓████████████████████████████████████████▓███████████▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓█▓▓██████</span>', "color2", 0);                                                                
    addLine('<span class="liam">                                                         ██▓██▓▓▓█████▓▓▓▓██▓▓█▓▓▓▓▓▓▓██▓▓▓████████████████████████████▓████████████████████████████████████████████████████████████████▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓█▓████████</span>', "color2", 0);                                                              
    addLine('<span class="liam">                                                       ██▓▓███▓▓████▓▓▓▓▓▓█▓▓█▓▓▓▓▓▓▓███▓▓███████████████████████████████████████████████████████████████████████████████████████████████▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓█▓█████████</span>', "color2", 0);                                                            
    addLine('<span class="liam">                                                    ███▓▓▓███▓▓████▓▓▓▓▓██▓▓█▓▓▓▓▓▓▓███▓▓▓████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓█▓██████████</span>', "color2", 0);                                                          
    addLine('<span class="liam">                                                 ████▓▓▓████▓▓████▓▓▓▓▓▓█▓▓██▓▓▓▓▓▓▓██▓▓▓██████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓█▓████████████</span>', "color2", 0);                                                       
    addLine('<span class="liam">                                              ████▓▓▓▓█████▓▓███▓▓▓▓▓▓▓█▓▓██▓▓▓▓▓▓▓█▓▓▓▓███████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓██████████████</span>', "color2", 0);                                                     
    addLine('<span class="liam">                                          █████▓▓▓▓▓███████▓███▓▓▓▓▓▓▓█▓▓██▓▓▓▓▓▓██▓▓▓▓█████████████████████████████▓███████████████████████████████████████████████████████████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓█▓▓▓▓▓▓▓▓████████████████</span>', "color2", 0);                                                  
    addLine('<span class="liam">                                      ████▓▓▓▓▓▓▓█████████▓██▓▓▓▓▓▓▓██▓▓██▓▓▓▓▓▓██▓█▓▓███████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓█▓▓▓▓▓▓▓▓██████████████████</span>', "color2", 0);                                               
    addLine('<span class="liam">                                 █████▓▓▓▓▓▓▓██████████████▓▓▓▓▓▓▓▓██▓▓██▓▓▓▓▓▓██▓█▓▓█████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓▓██▓▓▓▓▓▓▓▓▓▓██▓▓▓▓█▓▓▓▓▓▓▓▓███████████████████</span>', "color2", 0);                                             
    addLine('<span class="liam">                        █████████▓▓▓▓▓████████████████████▓▓▓▓▓▓▓▓██▓▓██▓▓▓▓▓████▓▓███████████████████████████████▓█████████████████████████████████████████████████████████████████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓███▓▓▓██▓▓▓▓▓▓▓█████▓████████████████</span>', "color2", 0);                                          
    addLine('<span class="liam">                ████████▓▓██████████████████████████████▓▓▓▓▓▓▓▓▓██▓▓██▓▓▓▓▓████▓▓▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓██▓▓▓▓▓▓▓▓▓███▓▓▓██▓▓▓█▓▓▓█████████████████████████</span>', "color2", 0);                                      
    addLine('<span class="liam">              █████████████████████████████████████████▓▓▓▓▓▓▓▓███▓▓██▓▓▓▓▓████▓▓▓█████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓███▓▓▓▓▓▓▓▓███▓▓▓██▓▓██▓▓▓█████████████████████████████</span>', "color2", 0);                                 
    addLine('<span class="liam">               ███████████████████████████████████████▓▓▓▓▓▓▓▓███▓▓██▓▓▓▓████▓▓▓▓████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓██▓▓▓▓▓▓▓▓▓██▓▓▓██▓▓███▓▓▓█████████████████████████████</span>', "color2", 0);                               
    addLine('<span class="liam">                █████████████████████████████████████▓▓▓▓▓▓▓▓███▓███▓▓▓▓████▓▓▓███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓██▓▓▓▓▓▓▓▓▓███▓███▓████▓▓▓██████████████████████████████████</span>', "color2", 0);                         
    addLine('<span class="liam">               █████████████████████████▓▓▓█████████▓▓▓▓▓▓▓▓███████▓▓▓█████▓▓▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓██▓▓▓▓▓▓▓▓████████████▓▓▓███████████████████████▓█▓▓███████████████████████</span>', "color2", 0);        
    addLine('<span class="liam">           ███████████████████████▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓███████▓▓▓████▓▓▓█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓███▓▓▓▓▓▓▓████████████▓▓▓█████████████████████████████████████████████████</span>', "color2", 0);        
    addLine('<span class="liam">       █████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓█████████▓█████▓▓▓▓███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓████████▓▓▓███████████▓▓▓▓██████████████████████████████████████████████</span>', "color2", 0);         
    addLine('<span class="liam">    █████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓████████▓▓▓████████████▓▓▓▓████████▓█████████████████████████████████</span>', "color2", 0);           
    addLine('<span class="liam">   ███████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓█████████▓▓█████████████▓▓▓▓████████▓█████████████████████▓████▓▓██████</span>', "color2", 0);        
    addLine('<span class="liam">  ██████████████████████▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓▓████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓████████████████████████▓▓▓▓████████▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███</span>', "color2", 0);       
    addLine('<span class="liam">  ██████████████████████▓▓▓▓▓▓▓▓████████▓▓▓▓▓▓▓▓▓▓▓████████████▓▓█▓▓█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓███████████████████████▓▓▓▓▓█████████▓██████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██</span>', "color2", 0);      
    addLine('<span class="liam">    █████████████████████▓▓▓▓█████████▓▓▓▓▓▓▓▓▓▓▓███████████▓▓▓████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓█████████████████████████▓▓▓▓▓████████▓██████████████▓▓▓▓▓▓▓▓▓███████</span>', "color2", 0);     
    addLine('<span class="liam">      ███████████████████▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓█████████▓▓▓████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓▓▓▓███████▓██████████████████████████</span>', "color2", 0);      
    addLine('<span class="liam">         █████████████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓▓▓▓▓███████▓▓█████████████████████</span>', "color2", 0);        
    addLine('<span class="liam">              ████████████▓▓▓▓▓██▓▓▓▓▓▓▓▓███████▓███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓▓█████████▓████████████████</span>', "color2", 0);          
    addLine('<span class="liam">                 ███████▓▓███▓▓█████████████▓▓██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████</span>', "color2", 0);              
    addLine('<span class="liam">                     ██████████████████▓▓▓███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▓██████████████████████████████████</span>', "color2", 0);                          
    addLine('<span class="liam">                        ██████████████████████████████████████████████████ ██ ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ ████████▓▓██▓▓▓▓████████████████████</span>', "color2", 0);                               
    addLine('<span class="liam">                                ███████████████████████████                         ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████     █████████▓▓▓▓▓▓▓▓▓████</span>', "color2", 0);                                           
    addLine('<span class="liam">                                     ███████████████████                              ███████████████████████████████████████████████████ ██████     ████████████████████████████████████████████████████████████████           ███████████▓█████</span>', "color2", 0);                                             
    addLine('<span class="liam">                                       █████████████                                   ██████████████████████████████████████████████                ███████████████████████████████████████████████████████████                    ███████</span>', "color2", 0);                                                  
    addLine('<span class="liam">                                                                                           █████████████████████████████████████████                     ████████████████████████████████████ ███████████████</span>', "color2", 0);                                                                                 
    addLine('<span class="liam">                                                                                               █████████████████████████████████                             ████████████████████████</span>', "color2", 0);                                                                                                         
    addLine('<span class="liam">                                                                                                    ██████████████████████                                           █████████</span>', "color2", 0);                                                                                                                
      setTimeout(function() {
        terminal.innerHTML = close;
      }, 4000);
      break;
    default:
      addLine("<span class=\"inherit\">Comando não detectado. Para uma lista de comandos ativos digite <span class=\"command\">'comandos'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
