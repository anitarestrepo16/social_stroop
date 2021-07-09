/* create empty timeline variable to fill with trials */
var timeline = [];

/* show instructions on the screen in white text */
var instructions_block = {
    type: "html-keyboard-response",
    stimulus: `<p style= 'color: white;'>In this task a word will appear in the middle of the screen. 
    When the word appears respond with the <strong>color of the text</strong> as quickly as you can. 
    Press <strong>R</strong> for RED, <strong>Y</strong> for YELLOW, <strong>G</strong> for GREEN, 
    and <strong>B</strong> for BLUE. Press any key to continue.</p>`,
    post_trial_gap: 750
};

/* add instructions to timeline variable */
timeline.push(instructions_block);

/* create array of words for the stroop with relevant variables to save tagged on */
var words = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>INCLUDED</strong></p>`, correct_response: 'r', word: 'alone', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>BELONG</strong></p>`, correct_response: 'b', word: 'belong', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>DESIRED</strong></p>`, correct_response: 'y', word: 'desired', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>LIKED</strong></p>`, correct_response: 'g', word: 'liked', color: 'green', category: 'social_pos'},
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'r', word: 'inferior', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SELFISH</strong></p>`, correct_response: 'b', word: 'selfish', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'y', word: 'unwanted', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INSULTED</strong></p>`, correct_response: 'g', word: 'insulted', color: 'green', category: 'social_neg'},
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'r', word: 'frustrated', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STRESS</strong></p>`, correct_response: 'b', word: 'stress', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>SAD</strong></p>`, correct_response: 'y', word: 'sad', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PANIC</strong></p>`, correct_response: 'g', word: 'panic', color: 'green', category: 'emotion_neg'},
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LUCKY</strong></p>`, correct_response: 'r', word: 'lucky', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LAUGH</strong></p>`, correct_response: 'b', word: 'laugh', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HOPE</strong></p>`, correct_response: 'y', word: 'hope', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DELIGHT</strong></p>`, correct_response: 'g', word: 'delight', color: 'green', category: 'emotion_pos'},
    /* Normal Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'lucky', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'laugh', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'hope', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'delight', color: 'green', category: 'emotion_pos'}
];

/* create the fixation cross in white */
var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px; color: white;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 750,
    task: "fixation"
}

/* create a test variable that specifies the aspects of the word trials (what to click, how long it lasts) and save the relevant trial-level data */
var test = {
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['r', 'b', 'g', 'y'], /* only valid keyboard presses are r, b, g or y */
    trial_duration: 5000, /* if nothing is pressed, move on to next after 5000ms */
    /* record the relevant variables that each item of the "words" array is tagged with */
    data: {
        task: 'response', /* label the word trials as response trials to differentiate from fixation trials */ 
        correct_response: jsPsych.timelineVariable('correct_response'),
        word: jsPsych.timelineVariable('word'),
        color: jsPsych.timelineVariable('color'),
        category: jsPsych.timelineVariable('category')
    }
}

var test_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: jsPsych.randomization.shuffle(words) /* randomize the order of appearance of words */
}

/* add the actual full procedure to the timeline after the instructions */
timeline.push(test_procedure);