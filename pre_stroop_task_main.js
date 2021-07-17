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
/* Pool 1 */
var words_pool1 = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ACCEPTED</strong></p>`, correct_response: 'r', word: 'accepted', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>ADMIRED</strong></p>`, correct_response: 'b', word: 'admired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>BELONG</strong></p>`, correct_response: 'g', word: 'belong', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>DEVOTED</strong></p>`, correct_response: 'y', word: 'devoted', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>GIVING</strong></p>`, correct_response: 'r', word: 'giving', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>INCLUDED</strong></p>`, correct_response: 'b', word: 'included', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>CARING</strong></p>`, correct_response: 'g', word: 'caring', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>LOVED</strong></p>`, correct_response: 'y', word: 'loved', color: 'yellow', category: 'social_pos'},
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ABUSED</strong></p>`, correct_response: 'r', word: 'abused', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BETRAYED</strong></p>`, correct_response: 'b', word: 'betrayed', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DEFEATED</strong></p>`, correct_response: 'g', word: 'defeated', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>EXCLUDED</strong></p>`, correct_response: 'y', word: 'excluded', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HOSTILE</strong></p>`, correct_response: 'r', word: 'hostile', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INADEQUATE</strong></p>`, correct_response: 'b', word: 'inadequate', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>INSULTED</strong></p>`, correct_response: 'g', word: 'insulted', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>RIDICULED</strong></p>`, correct_response: 'y', word: 'ridiculed', color: 'yellow', category: 'social_neg'},
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>AFRAID</strong></p>`, correct_response: 'r', word: 'afraid', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANGUISH</strong></p>`, correct_response: 'b', word: 'anguish', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BRUTAL</strong></p>`, correct_response: 'g', word: 'brutal', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DISTRESS</strong></p>`, correct_response: 'y', word: 'distress', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>FEAR</strong></p>`, correct_response: 'r', word: 'fear', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>IRRITATED</strong></p>`, correct_response: 'b', word: 'irritated', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PANIC</strong></p>`, correct_response: 'g', word: 'panic', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STRESS</strong></p>`, correct_response: 'y', word: 'stress', color: 'yellow', category: 'emotion_neg'},
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BRAVE</strong></p>`, correct_response: 'r', word: 'brave', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>DELIGHT</strong></p>`, correct_response: 'b', word: 'delight', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>ENJOY</strong></p>`, correct_response: 'g', word: 'enjoy', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HAPPY</strong></p>`, correct_response: 'y', word: 'happy', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>JOYFUL</strong></p>`, correct_response: 'r', word: 'joyful', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LAUGH</strong></p>`, correct_response: 'b', word: 'laugh', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PLEASED</strong></p>`, correct_response: 'g', word: 'pleased', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PRIZE</strong></p>`, correct_response: 'y', word: 'prize', color: 'yellow', category: 'emotion_pos'},
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
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'emotion_pos'},
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>BARREL</strong></p>`, correct_response: 'r', word: 'barrel', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BOARD</strong></p>`, correct_response: 'b', word: 'board', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CHIN</strong></p>`, correct_response: 'g', word: 'chin', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>STATUE</strong></p>`, correct_response: 'y', word: 'statue', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SEAT</strong></p>`, correct_response: 'r', word: 'seat', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SQUARE</strong></p>`, correct_response: 'b', word: 'square', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>STREET</strong></p>`, correct_response: 'g', word: 'street', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>BOWL</strong></p>`, correct_response: 'y', word: 'bowl', color: 'yellow', category: 'emotion_neg'}
];

/* Pool 2 */
var words_pool2 = [
    /* Social Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>CHARMING</strong></p>`, correct_response: 'r', word: 'charming', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>DESIRED</strong></p>`, correct_response: 'b', word: 'desired', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>KIND</strong></p>`, correct_response: 'g', word: 'kind', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>FRIENDLY</strong></p>`, correct_response: 'y', word: 'friendly', color: 'yellow', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(23, 5, 250);'><strong>LIKED</strong></p>`, correct_response: 'r', word: 'liked', color: 'red', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(232, 0, 0);'><strong>LOYAL</strong></p>`, correct_response: 'b', word: 'loyal', color: 'blue', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(255, 255, 0);'><strong>KISS</strong></p>`, correct_response: 'g', word: 'kiss', color: 'green', category: 'social_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
     color: rgb(0, 125, 0);'><strong>FAITHFUL</strong></p>`, correct_response: 'y', word: 'faithful', color: 'yellow', category: 'social_pos'},
    /* Social Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>LONELY</strong></p>`, correct_response: 'r', word: 'lonely', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DECEIVED</strong></p>`, correct_response: 'b', word: 'deceived', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>DISLIKED</strong></p>`, correct_response: 'g', word: 'disliked', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>INFERIOR</strong></p>`, correct_response: 'y', word: 'inferior', color: 'yellow', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>HUMILIATED</strong></p>`, correct_response: 'r', word: 'humiliated', color: 'red', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>PATHETIC</strong></p>`, correct_response: 'b', word: 'pathetic', color: 'blue', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>REJECTED</strong></p>`, correct_response: 'g', word: 'rejected', color: 'green', category: 'social_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>UNWANTED</strong></p>`, correct_response: 'y', word: 'unwanted', color: 'yellow', category: 'social_neg'},
    /* Emotion Negative*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>FRUSTRATED</strong></p>`, correct_response: 'r', word: 'frustrated', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>SAD</strong></p>`, correct_response: 'b', word: 'sad', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>AGONY</strong></p>`, correct_response: 'g', word: 'agony', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>PAIN</strong></p>`, correct_response: 'y', word: 'pain', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANGRY</strong></p>`, correct_response: 'r', word: 'angry', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>ANXIOUS</strong></p>`, correct_response: 'b', word: 'anxious', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>DEPRESSED</strong></p>`, correct_response: 'g', word: 'depressed', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>MISERY</strong></p>`, correct_response: 'y', word: 'misery', color: 'yellow', category: 'emotion_neg'},
    /* Emotion Positive*/
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CHEER</strong></p>`, correct_response: 'r', word: 'cheer', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>COMFORT</strong></p>`, correct_response: 'b', word: 'comfort', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>SUCCESS</strong></p>`, correct_response: 'g', word: 'success', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>HOPE</strong></p>`, correct_response: 'y', word: 'hope', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>LUCKY</strong></p>`, correct_response: 'r', word: 'lucky', color: 'red', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>PLEASURE</strong></p>`, correct_response: 'b', word: 'pleasure', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>TERRIFIC</strong></p>`, correct_response: 'g', word: 'terrific', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>BLISS</strong></p>`, correct_response: 'y', word: 'bliss', color: 'yellow', category: 'emotion_pos'},
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
    color: rgb(232, 0, 0);'><strong>GREEN</strong></p>`, correct_response: 'g', word: 'green', color: 'green', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>YELLOW</strong></p>`, correct_response: 'y', word: 'yellow', color: 'yellow', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>BLUE</strong></p>`, correct_response: 'b', word: 'blue', color: 'blue', category: 'emotion_pos'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>RED</strong></p>`, correct_response: 'r', word: 'red', color: 'red', category: 'emotion_pos'},
    /* Neutral */
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(232, 0, 0);'><strong>PAPER</strong></p>`, correct_response: 'r', word: 'paper', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TABLE</strong></p>`, correct_response: 'b', word: 'table', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 0);'><strong>CHAIR</strong></p>`, correct_response: 'g', word: 'chair', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(0, 125, 0);'><strong>CABINET</strong></p>`, correct_response: 'y', word: 'cabinet', color: 'yellow', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>FOOT</strong></p>`, correct_response: 'r', word: 'foot', color: 'red', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>LOCKER</strong></p>`, correct_response: 'b', word: 'locker', color: 'blue', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>KETTLE</strong></p>`, correct_response: 'g', word: 'kettle', color: 'green', category: 'emotion_neg'},
    { stimulus: `<p style='font-size: 37.333px; font-family: Arial, Helvetica, sans-serif;
    color: rgb(23, 5, 250);'><strong>TAXI</strong></p>`, correct_response: 'y', word: 'taxi', color: 'yellow', category: 'emotion_neg'}
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