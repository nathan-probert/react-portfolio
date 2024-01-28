// light/dark mode
function dayNight() {
    const toggleSwitch = document.querySelector(".toggle");
    toggleSwitch.addEventListener("click", function(){
        document.body.classList.toggle("switch");
        this.classList.toggle("night");
        this.classList.toggle("day");
    })
}
dayNight();

// wordle stuff
function input() {
    document.getElementById(1).focus();
    document.getElementById(1).classList.toggle("active");

    fetch("./lib/possible_wordle_answers.txt").then((res) => res.text()).then((text) => {
        fetch("./lib/possible_guesses.txt").then((res) => res.text()).then((dict) => {

            var words = text.split(/\r\n|\n|\r/);
            var allWords = dict.split(/\r\n|\n|\r/);

            var randInt = Math.floor(Math.random() * words.length);
            var realWord = words[randInt];
            


            // for clicking            
            const buttons = document.querySelectorAll("button");
            buttons.forEach(button => {
                button.addEventListener('pointerdown', event => {
                    const activeElement = document.querySelector(".active");
                    var id = activeElement.id
                    var ogid = id;

                    if (button.id == "enter") {

                        // check if word is in file of all possible words
                        // return false if not, else continue
                        while ((id%5) != 0) {
                            id++;
                        }

                        var attempt = "";
                        id=id-4;
                        for (var i=0; i<5; i++) {
                            attempt += document.getElementById(id++).value;
                        }
                        attempt = attempt.toLowerCase();

                        if (attempt.length > 4 && allWords.includes(attempt)) {
                            // real word
                            for (var i=0; i<5; i++) {
                                var curId = (parseInt(ogid) + parseInt(i) - 4);

                                if (attempt[i] == realWord[i]) {
                                    document.getElementById(curId).classList.add("green");
                                }
                                else if (realWord.includes(attempt[i])) {
                                    document.getElementById(curId).classList.add("yellow");
                                }
                                else {
                                    document.getElementById(curId).classList.add("grey");
                                }
                            }

                            // set row disabled, enable next row
                            var newId = parseInt(ogid) + 6;
                            var oldId = parseInt(ogid) - 4;
                            for (var i=0; i<5; i++) {
                                document.getElementById(oldId++).disabled = true;
                            }
                            if (newId > 51) {
                                // disable keyboard, user lost
                                for (let i=0; i<26; i++){
                                    let tempId = String.fromCharCode(65 + i)
                                    document.getElementById(String(tempId)).disabled = true;
                                }
                                document.getElementById("enter").disabled = true;
                                document.getElementById("delete").disabled = true;

                                // display you lost, word is XXXXX
                                document.getElementById("gameLost").innerText = 'You Lost! The word was "' + realWord.toUpperCase() + '"'; 
                                document.getElementById("gameLost").style.display = "block";
                                document.getElementById("gameBoard").style.opacity = "0.5";
                                document.getElementById("resetGameBtn").style.scale = "1.5";
                            }
                            else if (attempt == realWord) {
                                // disable keyboard, user won
                                for (let i=0; i<26; i++){
                                    let tempId = String.fromCharCode(65 + i)
                                    document.getElementById(String(tempId)).disabled = true;
                                }
                                document.getElementById("enter").disabled = true;
                                document.getElementById("delete").disabled = true;

                                // display you won, word is XXXXX
                                document.getElementById("gameWon").innerText = 'You Won! The word was "' + realWord.toUpperCase() + '"'; 
                                document.getElementById("gameWon").style.display = "block";
                                document.getElementById("gameBoard").style.opacity = "0.5";
                                document.getElementById("resetGameBtn").style.scale = "1.5";

                            }
                            else{
                                for (var i=0; i<5; i++) {
                                    document.getElementById(newId++).disabled = false;
                                }
                                newId=newId-5;
                                const allElements = document.querySelectorAll("*");
                                allElements.forEach((element) => {
                                    element.classList.remove('active');
                                });
                                document.getElementById(newId).focus();
                                document.getElementById(newId).classList.toggle("active");
                            }

                        }
                        else {
                            // fake word
                            document.getElementById(ogid).focus();

                            // flash all box borders red
                            id--;
                            for (var i=0; i<5; i++) {
                                document.getElementById(id--).classList.toggle("wrong");
                            }

                            // triggers after animation ends (1s)
                            id++;
                            setTimeout(function(){
                                for (var i=0; i<5; i++) {
                                    document.getElementById(id++).classList.toggle("wrong");
                                }
                            },1000);
                        }
                    }
                    else if (button.id == "delete") {
                        const activeElement = document.querySelector(".active");
                        if (activeElement.value == "" && ((id%10)>1)) {
                            id--;
                            document.getElementById(id).value = "";
                            document.getElementById(id).focus();
                            const allElements = document.querySelectorAll("*");
                            allElements.forEach((element) => {
                                element.classList.remove('active');
                            });
                            document.getElementById(id).classList.toggle("active");
                        }
                        else{
                            document.getElementById(id).value = "";
                            document.getElementById(id).focus();
                            const allElements = document.querySelectorAll("*");
                            allElements.forEach((element) => {
                                element.classList.remove('active');
                            });
                            document.getElementById(id).classList.toggle("active");
                        }
                    }
                    else{
                        const activeElement = document.querySelector(".active");
                        var id = activeElement.id
                        activeElement.value=button.id;
            
                        if ((id%10) < 5) {
                            const allElements = document.querySelectorAll("*");
                            allElements.forEach((element) => {
                                element.classList.remove('active');
                            });
                            document.getElementById(++id).focus();
                            document.getElementById(id).classList.toggle("active");
                        }
                        else {
                            document.getElementById(id).focus();
                        }
                    }

                });
            });



            [...document.querySelectorAll(".element")].forEach(input => {
                input.addEventListener("input", function(e) {
                    var id = this.id;

                    if ((id%10)<5){
                        if (this.value != ""){
                            id++;
                            document.getElementById(id).focus();
                            const allElements = document.querySelectorAll("*");
                            allElements.forEach((element) => {
                                element.classList.remove('active');
                            });
                            document.getElementById(id).classList.toggle("active");
                        }
                    }
                })
            });

            [...document.querySelectorAll(".element")].forEach(input => {
                input.addEventListener("keydown", function(e) {
                    var id = this.id;
                    var ogid = id;

                    if (this.value == "" && ((id%10)>1) && (e.key == "Backspace" || e.key == "Delete")){
                        id--;
                        document.getElementById(id).focus();
                        const allElements = document.querySelectorAll("*");
                        allElements.forEach((element) => {
                            element.classList.remove('active');
                        });
                        document.getElementById(id).classList.toggle("active");
                    }
                    else if (e.key == "Enter" || e.key == "Return") {
                        // check if word is in file of all possible words
                        // return false if not, else continue
                        while ((id%5) != 0) {
                            id++;
                        }

                        var attempt = "";
                        id=id-4;
                        for (var i=0; i<5; i++) {
                            attempt += document.getElementById(id++).value;
                        }
                        attempt = attempt.toLowerCase();

                        if (attempt.length > 4 && allWords.includes(attempt)) {
                            // real word
                            for (var i=0; i<5; i++) {
                                var curId = (parseInt(ogid) + parseInt(i) - 4);

                                if (attempt[i] == realWord[i]) {
                                    document.getElementById(curId).classList.add("green");
                                    document.getElementById(attempt[i].toUpperCase()).classList.add("green");
                                }
                                else if (realWord.includes(attempt[i])) {
                                    document.getElementById(curId).classList.add("yellow");
                                    document.getElementById(attempt[i].toUpperCase()).classList.add("yellow");

                                }
                                else {
                                    document.getElementById(curId).classList.add("grey");
                                    document.getElementById(attempt[i].toUpperCase()).classList.add("grey");

                                }
                            }

                            // set row disabled, enable next row
                            var newId = parseInt(ogid) + 6;
                            var oldId = parseInt(ogid) - 4;
                            for (var i=0; i<5; i++) {
                                document.getElementById(oldId++).disabled = true;
                            }

                            if (attempt == realWord) {
                                // disable keyboard, user won
                                for (let i=0; i<26; i++){
                                    let tempId = String.fromCharCode(65 + i)
                                    document.getElementById(String(tempId)).disabled = true;
                                }
                                document.getElementById("enter").disabled = true;
                                document.getElementById("delete").disabled = true;

                                // display you won, word is XXXXX
                                document.getElementById("gameWon").innerText = 'You Won! The word was "' + realWord.toUpperCase() + '"'; 
                                document.getElementById("gameWon").style.display = "block";
                                document.getElementById("gameBoard").style.opacity = "0.5";
                                document.getElementById("resetGameBtn").style.scale = "1.5";

                            }
                            else if (newId > 51) {
                                // disable keyboard, user lost
                                for (let i=0; i<26; i++){
                                    let tempId = String.fromCharCode(65 + i)
                                    document.getElementById(String(tempId)).disabled = true;
                                }
                                document.getElementById("enter").disabled = true;
                                document.getElementById("delete").disabled = true;

                                // display you lost, word is XXXXX
                                document.getElementById("gameLost").innerText = 'You Lost! The word was "' + realWord.toUpperCase() + '"'; 
                                document.getElementById("gameLost").style.display = "block";
                                document.getElementById("gameBoard").style.opacity = "0.5";
                                document.getElementById("resetGameBtn").style.scale = "1.5";
                            }
                            else{
                                for (var i=0; i<5; i++) {
                                    document.getElementById(newId++).disabled = false;
                                }
                                newId=newId-5;
                                const allElements = document.querySelectorAll("*");
                                allElements.forEach((element) => {
                                    element.classList.remove('active');
                                });
                                document.getElementById(newId).focus();
                                document.getElementById(newId).classList.toggle("active");
                            }

                        }
                        else {
                            // fake word
                            document.getElementById(ogid).focus();

                            // flash all box borders red
                            id--;
                            for (var i=0; i<5; i++) {
                                document.getElementById(id--).classList.toggle("wrong");
                            }

                            // triggers after animation ends (1s)
                            id++;
                            setTimeout(function(){
                                for (var i=0; i<5; i++) {
                                    document.getElementById(id++).classList.toggle("wrong");
                                }
                            },1000);
                        }
                    }
                    else if (e.key == "ArrowLeft" && ((id%10)>1)) {
                        const allElements = document.querySelectorAll("*");
                        allElements.forEach((element) => {
                            element.classList.remove('active');
                        });
                        document.getElementById(--id).focus();
                        document.getElementById(id).classList.toggle("active");
                    }
                    else if (e.key == "ArrowRight" && ((id%10)<5)) {
                        const allElements = document.querySelectorAll("*");
                        allElements.forEach((element) => {
                            element.classList.remove('active');
                        });
                        document.getElementById(++id).focus();
                        document.getElementById(id).classList.toggle("active");
                    }
                    else if (this.value != "" && (e.keyCode >= 65 && e.keyCode <= 90)) {
                        this.value="";
                    }
                })
            });
        })
    })
};
input();

function checkMobile() {
    var windowWidth = window.screen.width < window.outerWidth ?
                  window.screen.width : window.outerWidth;
    var mobile = windowWidth < 500;
    
    if (mobile) {
        allInputs = document.getElementsByClassName("element");
        let i = 0;

        while (i < allInputs.length) {
            allInputs[i].readOnly = true;
            i++;
        }

    }
}
checkMobile();

function resetBtn() {
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function(){
        location.reload();
    })
}
resetBtn();