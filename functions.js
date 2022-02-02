function present_quiz_instructions(instructions_trial, category, quiz_qs, quiz_answers){

    // Make sure participants understood the instructions, by giving them a short quiz.
    // if they got it wrong, present the instructions again, until they get it right.
    var comprehension_check = {
              type: 'survey-multi-choice',
              questions: quiz_qs,
              data: {category: category},
              on_finish: function(data) {
                  var responses = jsPsych.data.get().filter({category: category}).last(1).values()[0].responses;
                      responses = responses.split(","); // seperate responses by comma
                  var correct_answers = quiz_answers;
                  var repeat = 0;
                  for (i = 0 ; i < correct_answers.length; i++){
                    if (!responses[i].includes(correct_answers[i])){
                      repeat = 1;
                    } // if
                  } // for
                  data.repeat_instructions = repeat;
              } // on_finish
          }; // rating_comprehension_check

          