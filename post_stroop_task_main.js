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
     color: rgb(232, 0, 0);'><strong>CHARMING</strong></p>`, correct_response: 'r', word: 'charming', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>KIND</strong></p>`, correct_response: 'b', word: 'kind', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>AFFECTION</strong></p>`, correct_response: 'y', word: 'affection', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>DEVOTED</strong></p>`, correct_response: 'g', word: 'devoted', color: 'green', category: 'social_pos'},
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'r', word: 'defeated', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PATHETIC</strong></p>`, correct_response: 'b', word: 'pathetic', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HATED</strong></p>`, correct_response: 'y', word: 'hated', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ABUSED</strong></p>`, correct_response: 'g', word: 'abused', color: 'green', category: 'social_neg'},
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>INSECURE</strong></p>`, correct_response: 'r', word: 'insecure', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>CORRUPT</strong></p>`, correct_response: 'b', word: 'corrupt', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'y', word: 'brutal', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>AGONY</strong></p>`, correct_response: 'g', word: 'agony', color: 'green', category: 'emotion_neg'},
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CHEER</strong></p>`, correct_response: 'r', word: 'cheer', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TERRIFIC</strong></p>`, correct_response: 'b', word: 'terrific', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>COMFORT</strong></p>`, correct_response: 'y', word: 'comfort', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ENJOY</strong></p>`, correct_response: 'g', word: 'enjoy', color: 'green', category: 'emotion_pos'},
    /* Normal Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'emotion_pos'}
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