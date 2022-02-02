function present_quiz_instructions(instructions_trial, ttype, quiz_qs, quiz_answers){

    // Make sure participants understood the instructions, by giving them a short quiz.
    // if they got it wrong, present the instructions again, until they get it right.
    var comprehension_check = {
              type: 'survey-multi-choice',
              questions: quiz_qs,
              data: {ttype: ttype},
              on_finish: function(data) {
                  var responses = jsPsych.data.get().filter({ttype: ttype}).last(1).values()[0].responses;
                      responses = responses.split(","); // seperate responses by comma
                  var correct_answers = quiz_answers;
                  var repeat = 0;
                  console.log(repeat);
                  for (i = 0 ; i < correct_answers.length; i++){
                    if (!responses[i].includes(correct_answers[i])){
                      repeat = 1;
                      console.log(repeat);
                    } // if
                  } // for
                  data.repeat_instructions = repeat;
              } // on_finish
          }; // rating_comprehension_check
  
  var if_missed_instructions = {
      timeline: [missed_instruction_checkup],
      conditional_function: function(data){
          if (jsPsych.data.get().filter({ttype: ttype}).last(1).values()[0].repeat_instructions){
            return true;
          } else {
          return false;
        } // else
      } // conditional function
    } // if_confirmation

var repeat_instructions = {
      timeline: [instructions_trial,comprehension_check,if_missed_instructions],
      loop_function: function(){
        if (jsPsych.data.get().filter({ttype: ttype}).last(1).values()[0].repeat_instructions){
          return true;
        } else {
          return false;
        } // else
      } // loop_function function
    } // repeat_rating_instructions
    return repeat_instructions
}