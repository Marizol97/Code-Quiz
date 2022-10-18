# Code-Quiz

Created a coding quiz with 4 questions and each question has 4 answers. If answers are choosen incorretly it will reduce time and finish quiz earlier. Once quiz finishes, users are shown their score and record their initials. Once user submits initials they are taken to the last page to show high scores. 

Each page has position tracked for scoring, button utilization, and navigating pages. 

For the first page, the start button is instructed to hide first page, display questions-section, and calls updateQuestion function.


![](img/start%20quiz.PNG)

updateQuestion function dispalys questions one by one. By tracking position, and creating a loop array for each button answer. Each button is setup to change question when clicked. 

Function also tracks users responses, where selected answers are stored in question position, and calls updateScoreSection function

![](img/question%201.PNG)

![](img/question%202.PNG)

![](img/question%203.PNG)

![](img/question%204.PNG)

UpdateScoreSection function updates the score page, and hid question-section to display score section. 

There is also a function for the submit button. Where initials and scores are pushed to questions array to be used for updateHighScores function. 

![](img/score%20and%20initials.PNG)

updateHighScores has a loop array for displaying initials and scores and has a new variable called activeSection, to store the Id for the last page.

The variabe is created to be reused for the go home button. The go home button has a function called goHome, where high scores page is hidden and first page is displayed and resets selected answers, question postion, last score and initials. 

lastly clear high scores button is linked to functions called clearHighScores, setup to restart scores. 

![](img/high%20scores.PNG)