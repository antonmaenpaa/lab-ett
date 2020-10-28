
            // let text = document.getElementById('text');
            // let buttonOne = document.getElementById('button-one');
            // let buttonTwo = document.getElementById('button-two');
          

            // function goItaly() {
            //     console.log('jeu')
            //     advanceTo(scenario.one);
            //     document.getElementById('buttonOne').onclick = scenario.button;
        
            // }
            // function goSpain() {
            //     advanceTo(scenario.three);
            // }



            // function advanceTo(s) {
            //     changeText(s.text)
            //     changeButtonOne(s.button)
            //     changeButtonTwo(s.secondButton)
            
            // }

            let text = document.getElementById('text');
            let button = document.getElementById('button-box');
   

            function advanceTo(s) {
                changeText(s.text)
                changeButtons(s.button)

            }


            function changeText(newText) {
                text.innerHTML = newText;
                
            }

            function changeButtons(newButtons) {
                button.innerHTML = '';
                for (var i = 0; i < newButtons.length; i++) {
                    button.innerHTML += "<button onclick=" + newButtons[i][1] + ">" + newButtons[i][0] + "</button>";
                  }
                }

            // function changeButtonOne(oneB) {
            //     buttonOne.innerHTML = '';
            //     for (var i = 0; i < twoB.length; i++) {
            //         buttonOne.innerHTML += "<button onclick="+oneB[i][1]+">" + oneB[i][0] + "</button>";
            //       };
 
            //     };
            // function changeButtonTwo(twoB) {
            //     buttonTwo.innerHTML = '';
            //     for (var i = 0; i < twoB.length; i++) {
            //         buttonTwo.innerHTML += "<button onclick="+twoB[i][1]+">" + twoB[i][0] + "</button>";
            //       };
            //     };
                
            
            let scenario = {
                one: {
                    text: 'Du har varit sugen ett tag nu på att fara och resa. <br>Du vill komma iväg så snabbt som möjligt och då finns det två alternativ. Planen går till Italien och Spanien. <br>Vilket land är du mer sugen på? ',

                    button: [["Italien", "advanceTo(scenario.two)"], ["Spanien", "advanceTo(scenario.three)"]],
                },

                // Italien 
                two: {
                    text: 'Vilket bra val, Italien har många mysiga byar att utforska. Du har lite tid innan planet lyfter, vill du gå och ta en öl i väntan?',

                    button: [["Ja", "advanceTo(scenario.four)"], ["Nej", "advanceTo(scenario.five"]],
                },

                // Spanien
                three: {
                    
                    text: 'Hola amigo! Spanien är ett utmärkt val. Fullt med salsaklubbar som du längtar att få besöka! Vill du strosa runt tax free lite innan planet lyfter?',

                    button: [["Ja", "advanceTo(scenario.one)"], ["Nej", "advanceTo(scenario.five)"]],
                },

                // Italien 
                four: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här.....😒 ',

                    button: [["Avsluta", "advanceTo(scenario.one)"]],
                },

                // Spanien
                five: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här.....😒 ',

                    button: [["Avsluta", "advanceTo(scenario.one)"]],
                },
                six: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här.....😒 ',

                    button: [["Avsluta", "advanceTo(scenario.one)"]],
                },
                seven: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här.....😒 ',

                    button: [["Avsluta", "advanceTo(scenario.one)"]],
                },
            };

            advanceTo(scenario.one);
