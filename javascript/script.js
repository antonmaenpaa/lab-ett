
            let text = document.getElementById('text');
            let buttonOne = document.getElementById('button-one');
            let buttonTwo = document.getElementById('button-two');
          

            function goItaly() {
                console.log('jeu')
                advanceTo(scenario.one);
                document.getElementById('buttonOne').onclick = scenario.button;
        
            }
            function goSpain() {
                advanceTo(scenario.three);
            }

            function advanceTo(s) {
                changeText(s.text)
                changeButtonOne(s.button)
                changeButtonTwo(s.secondButton)
            
            }


            function changeText(okej) {
                text.innerHTML = okej;
                
            }

            function changeButtonOne(oneB) {
                buttonOne.innerHTML = '';
                for (var i = 0; i < twoB.length; i++) {
                    buttonOne.innerHTML += "<button onclick="+oneB[i][1]+">" + oneB[i][0] + "</button>";
                  };
 
                };
            function changeButtonTwo(twoB) {
                buttonTwo.innerHTML = '';
                for (var i = 0; i < twoB.length; i++) {
                    buttonTwo.innerHTML += "<button onclick="+twoB[i][1]+">" + twoB[i][0] + "</button>";
                  };
                };
                
            
            let scenario = {
                one: {
                    text: 'Vilket bra val, Italien har många mysiga byar att utforska, Du har lite tid innan planet lyfter, vill du gå och ta en öl i väntan?',

                    button: [["Ja", "advanceTo(scenario.two)"]], 

                    secondButton: [["Nej", "advanceTo(scenario.four)"]],
                          
                },

                two: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här..... ',

                    button: [["Avsluta"]],

                },

                three: {
                    
                    text: 'Hola amigo! Spanien är ett utmärkt val. Fullt med salsaklubbar som du längtar att få besöka!',

                    button: [["Ja", "advanceTo(scenario.one)"]], 

                    secondButton: [["Nej", "advanceTo(scenario.four)"]],
                },

                four: {
                    text: 'jeuu',
                }
            };
