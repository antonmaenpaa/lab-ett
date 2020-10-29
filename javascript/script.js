

            let text = document.getElementById('text');
            let button = document.getElementById('button-box');
   
            /** Moves game forward */
            function advanceTo(s) {
                changeText(s.text)
                changeButtons(s.button)
            }

            /** Change text on new scenarios */
            function changeText(newText) {
                text.innerHTML = newText;           
            }

            /** Change buttons on new scenario */
            function changeButtons(newButtons) {
                button.innerHTML = '';
                for (var i = 0; i < newButtons.length; i++) {
                    button.innerHTML += "<button onclick=" + newButtons[i][1] + ">" + newButtons[i][0] + "</button>";
                  }
                }

            /**
             * @type {object} object with all the scenarios
             */
            let scenario = {
                one: {
                    text: 'Du har varit sugen ett tag nu på att fara och resa. <br>Du vill komma iväg så snabbt som möjligt och då finns det två alternativ. Planen går till Italien och Spanien. <br>Vilket land är du mer sugen på? ',

                    button: [["Italien", "advanceTo(scenario.two)"], ["Spanien", "advanceTo(scenario.three)"]],
                },

                // Italien 
                two: {
                    text: 'Vilket bra val, Italien har många mysiga byar att utforska. Du har lite tid innan planet lyfter, vill du gå och ta en öl i väntan?',

                    button: [["Ja", "advanceTo(scenario.four)"], ["Nej", "advanceTo(scenario.nine)"]],
                },

                // Spanien
                three: {
                    
                    text: 'Hola amigo! Spanien är ett utmärkt val. Fullt med salsaklubbar som du längtar att få besöka! Vill du strosa runt tax free lite innan planet lyfter?',

                    button: [["Ja", "advanceTo(scenario.five)"], ["Nej", "advanceTo(scenario.six)"]],
                },

                // Italien 
                four: {
                    text: 'Du hade missberäknat tiden och satt lite väl länge och njöt av din öl. Tyvärr missade du planet och resan slutar här.....😒 ',

                    button: [["Avsluta", "advanceTo(scenario.one)"]]
                },

                // Spanien
                five: {
                    text: 'Du hittar massor med gott som du skulle vilja köpa men du nöjer dig med en bok du tänkte läsa på planet. ',

                    button: [["Fortsätt", "advanceTo(scenario.seven)"]],
                },

                //spanien
                six: {
                    text: 'Du sätter dig vid gaten och väntar på att planet ska bli redo för avfärd. ',

                    button: [["Fortsätt", "advanceTo(scenario.seven)"]],
                },
                
                // Spanien
                seven: {
                    text: 'Nu är planet redo och du ställer dig i kön för att stiga på. Nu är det sista chansen att ändra dig och åka hem igen. Vill du verkligen stiga på planet och flyga till Spanien? ',

                    button: [["Ja, självklart!", "advanceTo(scenario.eight)"], ["Nej, ångrat mig.", "advanceTo(scenario.one)"]],
                },

                // Spanien
                eight: {
                    text: 'Pjuh, tur att du inte fått kalla fötter, Spanien är verkligen superfint. Nu har planet landat och äventyret på Spaniens salsaklubbar kan börja! ',

                    button: [["Börja om", "advanceTo(scenario.one)"]],
                },

                // Italien
                nine: {
                    text: 'Planet var precis i tid och har nu lyft från svensk mark och din resa mot Italien har börjat. På planet så erbjuder de dig lunch, vill du äta något? ',

                    button: [["Ja", "advanceTo(scenario.ten)"], ["Nej", "advanceTo(scenario.eleven)"]],
                },

                // Italien
                ten: {
                    text: 'oj så gott det var med lite mat i magen. Timmar flyger iväg (bokstavligen) och nu har du landat i Italien. Välkommen och hoppas du får en fin resa. ',

                    button: [["Börja om", "advanceTo(scenario.one)"]],
                },

                // Italien
                eleven: {
                    text: 'Vilken tur att du inte tog någon mat för det har varit lite turbulens under flygresan och du blir så lätt illamående. Nu är du äntligen framme i Italien. Hoppas du får en fin vistelse här!  ',

                    button: [["Börja om", "advanceTo(scenario.one)"]],
                },

            };

            /* Starts the game, moves to scenario one*/
            advanceTo(scenario.one);
