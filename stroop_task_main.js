var timeline = [];

var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin."
};

timeline.push(welcome_block);

var instructions_block = {
    type: "html-keyboard-response",
    stimulus: "<p>In this task a word will appear in the middle of the screen. When the word appears respond with the <strong>color of the text</strong>. Press <strong>R</strong> for RED, <strong>Y</strong> for YELLOW, <strong>G</strong> for GREEN, and <strong>B</strong> for BLUE. Press any key to continue.</p>",
    post_trial_gap: 1000
};

timeline.push(instructions_block);

var words = [
    { stimulus: "<p style='font-size: 50px; color: red;'><strong>ALONE</strong></p>", correct_response: 'r', word: 'alone', color: 'red', category: 'social_neg'},
    { stimulus: "<p style='font-size: 50px; color: blue;'><strong>HAPPY</strong></p>", correct_response: 'b', word: 'happy', color: 'blue', category: 'emotion_pos'}
];

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    task: "fixation"
}

var test = {
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['r', 'b', 'g', 'y'],
    data: {
        task: 'response',
        correct_response: jsPsych.timelineVariable('correct_response'),
        word: jsPsych.timelineVariable('word'),
        color: jsPsych.timelineVariable('color'),
        category: jsPsych.timelineVariable('category')
    }
}

var test_procedure = {
    timeline: [fixation, test],
    timeline_variables: words
}
timeline.push(test_procedure);