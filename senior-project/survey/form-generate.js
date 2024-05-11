/*
const key = [
	["KtEYVjWoS9Okdl7a", "XsigdzBwLgEpFM7H", "h82hFNIVSncfnnmY"],
	["2nzbX3AjdGB5C0WM", "5TbICDffeC3eeur8", "HpACoEt8TRlz1wB4"],
	["W8WTxxgwSHvunTux", "0qVwYYTYfvDV6gPd", "mgMRUiDaYjhkNcGR"],
	["yXZ8dwN8v5ZrAcGN", "R3rXasJscxJEVt05", "XX9UXrgll6qxmcjw"],
	["TnA3xRyxRuy8BeT6", "ljOloe1ZzvYN8XR1", "k2EUJfJCZ2rYe3Go"],
	["pyt0Ug27uBSGVTKD", "zq1lwfarNiBGzRc1", "rHOwwOLhMuwocLu4"],
	["HwUKkEPEsranbFCC", "M5n0n93cx92AvjGf", "64QflTp9wPA8seES"],
	["n9Qdpqbwif9T5j4W", "7KLcWHwfL8BbQP8w", "joOXWDeDtxMNT33X"],
	["2yad4QuqOR3gxhBa", "hOtsfwXOPgqg6P85", "r6kpZDdA3oLPVgbN"],
	["uRSlrRJPIlokDiDa", "q29F4ABdz4ArInEq", "gnLF4xhnwpxeMf73"]
];
*/

const key = [
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"],
	["ogend", "aiend", "myend"]
];

window.onload = function() {
	var mobileMessage = document.getElementById('mobileMessage');
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
    if (isMobile) {
        mobileMessage.style.display = 'block';
    } else {
        mobileMessage.style.display = 'none';
    }

   	const questionOrder = generateQuestionOrder();

   	const questionOrderElement = document.getElementById("question_order");

	// Set the value attribute of the input element
	questionOrderElement.value = questionOrder.toString();

	displayForm(questionOrder);
}

function shuffleArray(array) {
  	for (let i = array.length - 1; i > 0; i--) {
    	const j = Math.floor(Math.random() * (i + 1));
    	[array[i], array[j]] = [array[j], array[i]];
  	}
  	return array;
}

function generateQuestionOrder() {
    var questionOrder = [];

    for (let i = 1; i <= 10; i++) {
    	var answersOrder = [1, 2, 3];
    	for (let i = 0; i < 10; i++) {
    		answersOrder = shuffleArray(answersOrder);
    	}
    	questionOrder.push([i].concat(answersOrder));
    }

    for (let i = 0; i < 10; i++) {
    	questionOrder = shuffleArray(questionOrder);
    }

    return questionOrder;
}

function generateQuestion(qnum, array) {
    const questionMarkers = ["A", "B", "C"];
    const questionNum = array[0];

    var questionHtml = `
    <div>
		<h2>Question ${qnum}</h2>
			<table>
				<tbody>
					<tr>
						<td class="audiotable"><b>Main Audio Clip</b></td>
						<td>
							<audio src="./actual/q${questionNum}/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
						</td>
					</tr>
				</tbody>
			</table>

		<br>

		<label for="q${questionNum}_identify"><b>Identify:</b> Which ending to the main audio clip do you believe was written by AI? <span class="required_question">*</span></label><br><br>

		<div id="q${questionNum}-options-container">`;

	for (let i = 1; i <= 3; i++) {
		let currentQuestion = array[i];

		questionHtml += `
		<div>
        	<input type="radio" id="q${questionNum}o${currentQuestion}" name="q${questionNum}" value="${currentQuestion}" required>
        	<label for="q${questionNum}o${currentQuestion}"><b>Ending ${questionMarkers[i - 1]}</b></label><br>
        	<audio controls>
        	    <source src="./actual/q${questionNum}/${key[questionNum - 1][currentQuestion - 1]}.wav" type="audio/mpeg">
        	    Your browser does not support the audio element.
        	</audio><br>
        </div>`;
	}

	questionHtml += `
	<br>

	<label for="q${questionNum}_happy"><b>Happiness Rating:</b> For each of the audio clips, rank on a scale of 1 to 5 how happy the music made you feel. (1 = music did not make you happy at all, 5 = music made you extremely happy) <span class="required_question">*</span></label>

	<br><br>

    <table>
    	<tr>
      		<th class="optionmarker"></th>
      			<th>😐<br>1</th>
      			<th>🙂<br>2</th>
      			<th>😀<br>3</th>
      			<th>😁<br>4</th>
      			<th>😆<br>5</th>
    		</tr>
    		<tr>
      			<td class="optionmarker"><b>Main</b></td>
      			<td><input type="radio" name="q${questionNum}happy0" value="1" required></td>
      			<td><input type="radio" name="q${questionNum}happy0" value="2" required></td>
      			<td><input type="radio" name="q${questionNum}happy0" value="3" required></td>
      			<td><input type="radio" name="q${questionNum}happy0" value="4" required></td>
      			<td><input type="radio" name="q${questionNum}happy0" value="5" required></td>
    		</tr>`;

    for (let i = 1; i <= 3; i++) {
    	questionHtml += `
		<tr>
      		<td class="optionmarker"><b>Ending ${questionMarkers[i - 1]}</b></td>
      		<td><input type="radio" name="q${questionNum}happy${array[i]}" value="1" required></td>
      		<td><input type="radio" name="q${questionNum}happy${array[i]}" value="2" required></td>
      		<td><input type="radio" name="q${questionNum}happy${array[i]}" value="3" required></td>
      		<td><input type="radio" name="q${questionNum}happy${array[i]}" value="4" required></td>
      		<td><input type="radio" name="q${questionNum}happy${array[i]}" value="5" required></td>
    	</tr>`;
	}

	questionHtml += `</table>`;

	questionHtml += `
	<br>

	<label for="q${questionNum}_sad"><b>Sadness Rating:</b> For each of the audio clips, rank on a scale of 1 to 5 how sad the music made you feel. (1 = music did not make you sad at all, 5 = music made you extremely sad) <span class="required_question">*</span></label><br><br>

    <table>
    	<tr>
      		<th class="optionmarker"></th>
      		<th>😐<br>1</th>
      		<th>☹️<br>2</th>
      		<th>😞<br>3</th>
      		<th>😖<br>4</th>
      		<th>😭<br>5</th>
    	</tr>
    	<tr>
      		<td class="optionmarker"><b>Main</b></td>
      		<td><input type="radio" name="q${questionNum}sad0" value="1" required></td>
      		<td><input type="radio" name="q${questionNum}sad0" value="2" required></td>
      		<td><input type="radio" name="q${questionNum}sad0" value="3" required></td>
      		<td><input type="radio" name="q${questionNum}sad0" value="4" required></td>
      		<td><input type="radio" name="q${questionNum}sad0" value="5" required></td>
    	</tr>`;

    for (let i = 1; i <= 3; i++) {
	questionHtml += `
		<tr>
      		<td class="optionmarker"><b>Ending ${questionMarkers[i - 1]}</b></td>
      		<td><input type="radio" name="q${questionNum}sad${array[i]}" value="1" required></td>
      		<td><input type="radio" name="q${questionNum}sad${array[i]}" value="2" required></td>
      		<td><input type="radio" name="q${questionNum}sad${array[i]}" value="3" required></td>
      		<td><input type="radio" name="q${questionNum}sad${array[i]}" value="4" required></td>
      		<td><input type="radio" name="q${questionNum}sad${array[i]}" value="5" required></td>
    	</tr>`;
	}

	questionHtml += `
		</table>
    </div>`;

    return questionHtml;
}

function generateForm(array) {
    let formHtml = ``;

    for (let i = 0; i < 10; i++) {
    	formHtml += generateQuestion(i + 1, array[i]);
    	formHtml += `<br>`;
    }

    return formHtml;
}

function displayForm(array) {
    var mainForm = document.getElementById("main-form");
    var formHtml = generateForm(array);
    var formContainer = mainForm.nextElementSibling;
    formContainer.innerHTML = formHtml;
}