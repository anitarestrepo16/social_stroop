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

/* create the fixation cross in white */
var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px; color: white;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 750,
    task: "fixation"
}
/* add spatial uncertainty so each word is presented at random location slightly off (50px) the center of the screen */
var random_duration = function() {
    var rand_dur = jsPsych.randomization.sampleWithoutReplacement([500,600,700,800],1)[0];
    return rand_dur;
}

/* add practice block */
/* create array of practice words */
var practice_words = [
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>HAIRPIN</strong></p>`, correct_response: 'r', word: 'hairpin', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>RED</strong></p>`, correct_response: 'b', word: 'red', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>GREEN</strong></p>`, correct_response: 'y', word: 'green', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>ITEM</strong></p>`, correct_response: 'g', word: 'item', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>BLUE</strong></p>`, correct_response: 'r', word: 'blue', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>PENCIL</strong></p>`, correct_response: 'b', word: 'pencil', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>YELLOW</strong></p>`, correct_response: 'g', word: 'yellow', color: 'green', category: 'social_pos'}
];


/* create a practice variable that specifies the aspects of the practice trials (what to click, how long it lasts) and save the relevant trial-level data */
var practice = {
    data: jsPsych.timelineVariable("data"),
    type: "html-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['r', 'b', 'g', 'y'], /* only valid keyboard presses are r, b, g or y */
    trial_duration: 5000, /* if nothing is pressed, move on to next after 5000ms */
    /* record the relevant variables that each item of the "practice_words" array is tagged with */
    data: {
        task: 'response', /* label the word trials as response trials to differentiate from fixation trials */ 
        correct_response: jsPsych.timelineVariable('correct_response'),
        word: jsPsych.timelineVariable('word'),
        color: jsPsych.timelineVariable('color'),
        category: jsPsych.timelineVariable('category')
    },
    on_finish: function(data) {
        data.accuracy = jsPsych.pluginAPI.compareKeys(data.response, data.correct_response)
        }
}

var feedback = {
    on_start: function(trial) {
        var last_trial_accuracy = jsPsych.data.get().last(1).values()[0].accuracy;
        if (last_trial_accuracy == 1) {
            var fdbck = "CORRECT"; // give a variable for feedback
        } else {
            var fdbck = "WRONG";// give a variable for feedback
        }
        var fdbck_trial_stim = "<div style='font-family: Arial, Helvetica, sans-serif; font-size: 60px; color: white;'><b>" + fdbck + "</b></div>";
        trial.data = {task: "feedback", stimulus: fdbck};
        trial.stimulus = fdbck_trial_stim;
    },
    data: "",
    type: "html-keyboard-response",
    stimulus: "",
    choices: jsPsych.NO_KEYS,
    trial_duration: 500
};

var practice_procedure = {
    timeline: [fixation, practice, feedback], /* intersperse fixation, practice word, feedback */
    timeline_variables: jsPsych.randomization.shuffle(practice_words) /* randomize the order of appearance of words */
};

/* add the actual full procedure to the timeline after the instructions */
/*timeline.push(practice_procedure);*/

var end_practice = {
    type: "html-keyboard-response",
    stimulus: `<p style= 'color: white;'> You have completed the practice trials. Press any key to continue. </p>`,
    post_trial_gap: 750
}

timeline.push(end_practice);

/* create trials with questions from Pittsburgh Sleep Quality Index - one item per variable */
var sleep1 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cannot get to sleep within 30 minutes? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week'],
    trial_duration: 60000,
    data: {
        task: "sleep1"
    }
}
var sleep2 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you wake up in the middle of the night or early morning? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep3 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you have to get up to use the bathroom? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep4 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cannot breathe comfortably? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep5 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you cough or snore loudly? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep6 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you feel too cold? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep7 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you feel too hot? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep8 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you had bad dreams? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep9 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble sleeping because you have pain? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}
var sleep10 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how would you rate your sleep quality overall? </p>`,
    choices: ['Very good', 'Fairly good', 'Fairly bad', 'Very bad']
}

var sleep11 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you taken medicine (prescribed or "over the counter") to help you sleep? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}

var sleep12 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity? </p>`,
    choices: ['Not during the past month', 'Less than once a week', 'Once or twice a week', 'Three or more times a week']
}

var sleep13 = {
    type: "html-button-response",
    stimulus: `<p style = 'color: white;'> During the past month, how much of a problem has it been for you to keep up enough enthusiasm to get things done? </p>`,
    choices: ['No problem at all', 'Only a very slight problem', 'Somewhat of a problem', 'A very big problem']
}

var sleep_wait = {
    type: "html-keyboard-response",
    stimulus: `<p style = 'color: white;'> Please wait a couple seconds for the start of the next color word game. </p>`,
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
        var last_trials_time_elapsed = jsPsych.data.get().last(4).values();
        var duration = 60000 - (last_trials_time_elapsed[0].rt + last_trials_time_elapsed[1].rt + last_trials_time_elapsed[2].rt + last_trials_time_elapsed[3].rt);
        return duration
    }
}

/* create array of words for the stroop with relevant variables to save tagged on */
/* Pool 1 */
var pool1_soc_pos = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ACCEPTED</strong></p>`, correct_response: 'r', word: 'accepted', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>ADMIRED</strong></p>`, correct_response: 'b', word: 'admired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>BELONG</strong></p>`, correct_response: 'g', word: 'belong', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>DEVOTED</strong></p>`, correct_response: 'y', word: 'devoted', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>GIVING</strong></p>`, correct_response: 'r', word: 'giving', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>INCLUDED</strong></p>`, correct_response: 'b', word: 'included', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>CARING</strong></p>`, correct_response: 'g', word: 'caring', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>LOVED</strong></p>`, correct_response: 'y', word: 'loved', color: 'yellow', category: 'social_pos'}
]
var pool1_soc_neg = [
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ABUSED</strong></p>`, correct_response: 'r', word: 'abused', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BETRAYED</strong></p>`, correct_response: 'b', word: 'betrayed', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'g', word: 'defeated', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>EXCLUDED</strong></p>`, correct_response: 'y', word: 'excluded', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HOSTILE</strong></p>`, correct_response: 'r', word: 'hostile', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>INADEQUATE</strong></p>`, correct_response: 'b', word: 'inadequate', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INSULTED</strong></p>`, correct_response: 'g', word: 'insulted', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RIDICULED</strong></p>`, correct_response: 'y', word: 'ridiculed', color: 'yellow', category: 'social_neg'}
]
var pool1_emo_neg = [
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>AFRAID</strong></p>`, correct_response: 'r', word: 'afraid', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANGUISH</strong></p>`, correct_response: 'b', word: 'anguish', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'g', word: 'brutal', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DISTRESS</strong></p>`, correct_response: 'y', word: 'distress', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FEAR</strong></p>`, correct_response: 'r', word: 'fear', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>IRRITATED</strong></p>`, correct_response: 'b', word: 'irritated', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PANIC</strong></p>`, correct_response: 'g', word: 'panic', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>STRESS</strong></p>`, correct_response: 'y', word: 'stress', color: 'yellow', category: 'emotion_neg'}
]
var pool1_emo_pos = [
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BRAVE</strong></p>`, correct_response: 'r', word: 'brave', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DELIGHT</strong></p>`, correct_response: 'b', word: 'delight', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>ENJOY</strong></p>`, correct_response: 'g', word: 'enjoy', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HAPPY</strong></p>`, correct_response: 'y', word: 'happy', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>JOYFUL</strong></p>`, correct_response: 'r', word: 'joyful', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LAUGH</strong></p>`, correct_response: 'b', word: 'laugh', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PLEASED</strong></p>`, correct_response: 'g', word: 'pleased', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PRIZE</strong></p>`, correct_response: 'y', word: 'prize', color: 'yellow', category: 'emotion_pos'}
]
var pool1_color = [
    /* Color Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'emotion_pos'}
]
var pool1_neutral = [
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BARREL</strong></p>`, correct_response: 'r', word: 'barrel', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BOARD</strong></p>`, correct_response: 'b', word: 'board', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHIN</strong></p>`, correct_response: 'g', word: 'chin', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>STATUE</strong></p>`, correct_response: 'y', word: 'statue', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SEAT</strong></p>`, correct_response: 'r', word: 'seat', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SQUARE</strong></p>`, correct_response: 'b', word: 'square', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>STREET</strong></p>`, correct_response: 'g', word: 'street', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BOWL</strong></p>`, correct_response: 'y', word: 'bowl', color: 'yellow', category: 'emotion_neg'}
];

/* Pool 2 */
var pool2_soc_pos = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>CHARMING</strong></p>`, correct_response: 'r', word: 'charming', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>DESIRED</strong></p>`, correct_response: 'b', word: 'desired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>KIND</strong></p>`, correct_response: 'g', word: 'kind', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>FRIENDLY</strong></p>`, correct_response: 'y', word: 'friendly', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>LIKED</strong></p>`, correct_response: 'r', word: 'liked', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>LOYAL</strong></p>`, correct_response: 'b', word: 'loyal', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>KISS</strong></p>`, correct_response: 'g', word: 'kiss', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>FAITHFUL</strong></p>`, correct_response: 'y', word: 'faithful', color: 'yellow', category: 'social_pos'}
]
var pool2_soc_neg = [
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LONELY</strong></p>`, correct_response: 'r', word: 'lonely', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DECEIVED</strong></p>`, correct_response: 'b', word: 'deceived', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DISLIKED</strong></p>`, correct_response: 'g', word: 'disliked', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'y', word: 'inferior', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>HUMILIATED</strong></p>`, correct_response: 'r', word: 'humiliated', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PATHETIC</strong></p>`, correct_response: 'b', word: 'pathetic', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>REJECTED</strong></p>`, correct_response: 'g', word: 'rejected', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'y', word: 'unwanted', color: 'yellow', category: 'social_neg'}
]
var pool2_emo_neg = [
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'r', word: 'frustrated', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SAD</strong></p>`, correct_response: 'b', word: 'sad', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>AGONY</strong></p>`, correct_response: 'g', word: 'agony', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PAIN</strong></p>`, correct_response: 'y', word: 'pain', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ANGRY</strong></p>`, correct_response: 'r', word: 'angry', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANXIOUS</strong></p>`, correct_response: 'b', word: 'anxious', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DEPRESSED</strong></p>`, correct_response: 'g', word: 'depressed', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>MISERY</strong></p>`, correct_response: 'y', word: 'misery', color: 'yellow', category: 'emotion_neg'}
]
var pool2_emo_pos = [
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>CHEER</strong></p>`, correct_response: 'r', word: 'cheer', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>COMFORT</strong></p>`, correct_response: 'b', word: 'comfort', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>SUCCESS</strong></p>`, correct_response: 'g', word: 'success', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HOPE</strong></p>`, correct_response: 'y', word: 'hope', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LUCKY</strong></p>`, correct_response: 'r', word: 'lucky', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PLEASURE</strong></p>`, correct_response: 'b', word: 'pleasure', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>TERRIFIC</strong></p>`, correct_response: 'g', word: 'terrific', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLISS</strong></p>`, correct_response: 'y', word: 'bliss', color: 'yellow', category: 'emotion_pos'}
]
var pool2_color = [
    /* Color Stroop*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'r', word: 'green', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'b', word: 'yellow', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'y', word: 'blue', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'g', word: 'red', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'emotion_pos'}
]
var pool2_neutral = [
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PAPER</strong></p>`, correct_response: 'r', word: 'paper', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TABLE</strong></p>`, correct_response: 'b', word: 'table', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHAIR</strong></p>`, correct_response: 'g', word: 'chair', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CABINET</strong></p>`, correct_response: 'y', word: 'cabinet', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FOOT</strong></p>`, correct_response: 'r', word: 'foot', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LOCKER</strong></p>`, correct_response: 'b', word: 'locker', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>KETTLE</strong></p>`, correct_response: 'g', word: 'kettle', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>TAXI</strong></p>`, correct_response: 'y', word: 'taxi', color: 'yellow', category: 'emotion_neg'}
];



/* create a variable that specifies the aspects of the word trials (what to click, how long it lasts) and save the relevant trial-level data. This doesn't yet
have actual stimuli pulled into it, it's just the mechanics of the trials */
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


/* this creates a nested timeline where the individual items from the array of words (timeline_variables) are iterated with the fixation cross and all of that
becomes itself a block on the larger timeline -- make one nested timeline for each of the blocks (each stroop category) */
var soc_neg_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_soc_neg /* can randomize the order of appearance of words within block if needed */
}
var soc_pos_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_soc_pos /* can randomize the order of appearance of words within block if needed */
}
var emo_pos_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_emo_pos /* can randomize the order of appearance of words within block if needed */
}
var emo_neg_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_emo_neg /* can randomize the order of appearance of words within block if needed */
}
var color_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_color /* can randomize the order of appearance of words within block if needed */
}
var neutral_procedure = {
    timeline: [fixation, test], /* intersperse word and fixation trials */
    timeline_variables: pool1_neutral /* can randomize the order of appearance of words within block if needed */
}


/* attempt to get the blocks randomized */
/* create an array of arrays to get all the blocks into one array */
var blocks = [soc_neg_procedure, soc_pos_procedure, emo_neg_procedure, emo_pos_procedure, color_procedure, neutral_procedure]
/* shuffle the order of the blocks */
var random_order = jsPsych.randomization.shuffle(blocks);


/* create another level of nested timelines where we intersperse the blocks of words with the sleep questionnaire items */
var real_trials = {
    timeline: [sleep1, sleep2, sleep3, sleep4, sleep_wait, random_order[1], sleep5, sleep6, sleep7, sleep8, sleep_wait, random_order[2], sleep9, sleep10, sleep11, sleep12, sleep_wait, random_order[3], random_order[4], random_order[5]]
}
/* add the real trials with their nested timelines to the larger first-level timeline */
timeline.push(real_trials);