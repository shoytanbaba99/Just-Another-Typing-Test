// Get references to the HTML elements
const timerElement = document.querySelector(".timer");
const wpmElement = document.querySelector(".wpm");
const inputElement = document.querySelector("#input-text");
const restartButton = document.querySelector(".restartbtn");
const sentenceLayer = document.querySelector("#sentence-layer");

let timer = 0;
let isTypingStarted = false;
let interval;
let correctWords = 0;
let currentWordIndex = 0;
let typedWords = []; // To store typed words

// Predefined sample text
const sampleText =
	"the be to of and a in that have I it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take person into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us no man find here thing with them almost through much where help long set well place own work part tell great hand high every under number men live off change some problem those during school try let start keep in turn point always line share why over call state one talk seem mean few head or play change school land never different great back last large move mother write country turn problem ask each follow out door during time keep around hand need always ask seem call world no help keep talk remember too all head really part tell far outside house try back place hour story enough give small power few side grow area run high as well keep group question those old system see talk great possible heard complete word less around course family case side body come keep feet open above always interest part allow fact business major tell same right hour listen group part think close still speak five might speak anything study remain stand less someone change speak whole better study down several top walk letter forward continue add always least better develop rate group since believe develop play look feel decide risk late family wonder rather read student rest continue point job report some plan some point course decision thing such example class story follow law or step stop everything raise place increase kind people look home under job question check example future another matter test pretty one couple set event clear per question search research level follow month reason follow least check door side firm practice cause thank full last build ready best mean hour part opportunity walk situation turn across know market nothing best cause every worker price learn least trade change later learn note future leave teacher outside sort left test should game give close stop more catch thought difficult per already small business ready ahead should light enjoy possible step even care put true decide stage strong start open against try night school put complete apply high talk search number mind test major lead hard might part right check road individual while bring up grow need wait turn chance full chance to those look reduce enough full anything appear just current reach effect choose rather open final tell add report each worker record expect new turn there later member leave result ever best series hour simple time develop story reduce decide remember market any light present reduce no happen someone sort law follow accept project class real name same material try place point study team provide current note key return quickly appear house set top situation fact class continue later thought try side less develop work small better test try let expect higher manage thing large build able stage meet build mind choice full need read finally successful job movement voice consider determine number call ready long know early start term rather avoid anything moment level less good still number hope prepare last keep follow check project continue ever full drop better home finish call detail effort lead body let role recognize others grow before thought form apply environment per forward better important speak situation strong much life let rest move voice maintain try several quick solve manage wrong worker remain explain walk group right move full low type begin buy raise sort always voice final explain move at develop check can consider place step safe final in follow remain another give job explain apply correct story listen someone list explain common matter ready save only side decide main others history form hope right through early better continue present leave before create task next turn some response sure open lead apply better try solve open learn necessary list family ready follow show form wait go look forward arrive often big week listen thing develop role question learn check grow drop prepare situation even someone sure check change talk later speak figure develop list task fall particular meet week full visit drop stage lead possible prepare understand reduce focus group already consider hope finally wide protect something question support need easy head small lead at major accept go across others leave except week enough interest ask main already create solution tell deal material at raise decision meet manage fine strong teacher follow support face remember already no describe notice check problem best expect watch lead listen trade ready correct think believe enough money subject suggest prove talk grow major manager good sure lead best support reduce press ask moment deal suggest believe let leave continue open test handle state later job choice ready major leave allow same final any major hold place manage set risk control face might industry role perfect act ready sure buy continue explain pass fact project tell voice condition stay able next change response history risk manager lead listen opportunity have prepare try give choice face apply stop try better in anyone let change wait set solve story continue keep enough something solve thing task easy mind expect perfect answer fact term manage others want apply understand test best continue change plan move raise choose become material lead process perfect drop wide manager might respond finally perform anything future enough voice test ready sure ahead right anyone believe end leave write give care except accept keep get simple sure before task done industry remain right reduce still expect market point particular finally test manager hold protect believe money industry need take year example new provide ahead consider consider time final quick grow wide test accept change particular support same maintain sure ever role let section team teach stage push industry ask explain lead gain support teach build develop project lead take remain speak stage at now simple take support care talk protect ready test go meet position state answer subject result left solve time number keep question risk term fact quick move subject raise project small care matter keep simple lead support stage major rise future follow discuss against new section forward class follow explain wish always full meet trade manage chance finish history continue forward believe build pass reduce remain continue show talk major describe perform study form base process main begin realize provide stage prepare gain goal set expect save important complete clear ready explain reduce full moment tell manage best follow goal good full result explain whole issue meet start top allow set follow receive buy choose right expect team stay think consider project notice response manage team long value rate give reach stay base add now any fall base available believe at save need quick pass explain call group result let leave realize form simple issue stay find remember full call set lead bring perfect present rise solve particular plan expect stay stage particular better save project rate teach agree next growth find case study believe reason remain give answer raise gain key large value take give apply state process better final class manager expect study simple challenge expect across let ready handle grow follow material ahead family form voice deal run expect under always raise problem teach history wait explain test raise raise long close grow other pass people same present value teach rate except share lead for past finish course continue process fall clear perform remain leave still reduce final day teach explain able let explain teach able available perform find pass know group test want pass already recognize explain term choose manage never next save large apply solve wait teach solve always rise job increase complete stage part lead open follow explain down handle major consider whole sure house necessary believe make current finish ask hope want keep next teach major continue growth ready response teach clear ahead problem final build common rise term always success ready share push expect support help grow term particular project next give simple study best right main top solve case share grow forward act ready ahead tell right let write push test hope speak result term use able in lead grow any type section expect term increase improve explain at change common final manage recognize complete term large accept year period choose situation believe show understand stage believe subject focus team care control decision project follow speak choose in respond perform full case ask clear final period want meet hope still term keep at person let explain available best press continue particular point explain opportunity explain perfect system term ahead support hope stay answer decision section read allow agree period allow keep lead at share ready raise plan pass term job meet explain already complete hold solution process answer real believe buy information support check current pass case check amount stay again current major year tell raise period choice research goal reach consider group set class read period move head buy group teach raise increase allow better meet term end build study research share clear best leave expect ready speak team use receive limit close wait increase share manage number project after particular decision long offer section raise respond list allow control class right care able need require period apply ready finish build grow come grow support base head major provide period number read period share believe term teach base notice ready close term task class allow support rise ahead wait check matter support turn turn major step raise improve grow project ahead test share common always let future simple raise task share current form pass pass form speak grow want after consider idea ahead group keep form raise expect set task develop teach term final get let period hold available want stay explain write major next follow ahead form expect role major group build push stay point reach understand study stay explain continue result finish research need project section grow support expected sure major job receive respond grow form move major press wait believe pass test speak hope next plan section give chance try follow lead start rise offer solution expect manage grow raise major lead group reach prepare raise gain important ready final move knowledge create give group action ready complete stay explain reach take full major always forward ready end rise final ready base move save research hope best ahead same time form increase build gain teach wait start rise manage next add ready project continue improve next rise explain finish class perform lead perform answer work complete done";
// Function to shuffle the words
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
}

// Function to get a random set of 100 words
function getRandomWords() {
	const allWords = sampleText.split(" "); // Split the text into words
	shuffleArray(allWords); // Shuffle the words
	const randomWords = allWords.slice(0, 100); // Pick the first 100 words
	return randomWords;
}

// Generate the random words for the test
let sampleWords = getRandomWords(); // Initialize with random 100 words

function updateSentenceLayer() {
	const sentenceHTML = sampleWords
		.map((word, index) => {
			let wordClass = "";

			if (index < currentWordIndex) {
				// Check if the typed word matches the expected word
				if (typedWords[index] === word) {
					wordClass = "correct"; // Green for correct
				} else {
					wordClass = "incorrect"; // Red for incorrect
				}
			} else if (index === currentWordIndex) {
				// Highlight the current word
				wordClass = "selected";
			}

			return `<span class="word ${wordClass}" id="word-${index}">${word}</span>`;
		})
		.join(" ");
	sentenceLayer.innerHTML = sentenceHTML;

	// Scroll the container to focus on the current word
	const currentWordElement = document.getElementById(`word-${currentWordIndex}`);
	if (currentWordElement) {
		currentWordElement.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}
}

// Start timer function
function startTimer() {
	interval = setInterval(() => {
		timer++;
		timerElement.textContent = `Timer: ${timer}s`;
		calculateWPM();
	}, 1000);
}

// Calculate WPM function
function calculateWPM() {
	if (timer > 0) {
		const wpm = Math.floor((correctWords / timer) * 60);
		wpmElement.textContent = `WPM: ${wpm}`;
	}
}

// Handle input change
inputElement.addEventListener("keydown", (e) => {
	if (e.key === " ") {
		e.preventDefault(); // Prevent default space behavior

		// Trim and save the typed word
		typedWord = inputElement.value.trim();

		// Start the timer on first input
		if (!isTypingStarted && typedWord.length > 0) {
			startTimer();
			isTypingStarted = true;
		}

		// Save the typed word to the array
		typedWords[currentWordIndex] = typedWord;

		// Check if the typed word is correct
		if (typedWord === sampleWords[currentWordIndex]) {
			correctWords++;
		}

		currentWordIndex++; // Move to the next word
		typedWord = "";
		inputElement.value = ""; // Clear the input field

		// Update the sentence layer with current typed words
		updateSentenceLayer();

		// If all words are typed, stop the timer
		if (currentWordIndex === sampleWords.length) {
			clearInterval(interval);
			wpmElement.textContent = `WPM: ${Math.floor((correctWords / timer) * 60)}`;
			alert("Typing test completed!");
		}
	}
});

// Restart the test
restartButton.addEventListener("click", () => {
	// Regenerate the random words and reset the game
	sampleWords = getRandomWords();
	timer = 0;
	correctWords = 0;
	currentWordIndex = 0;
	isTypingStarted = false;
	typedWords = []; // Reset typed words
	clearInterval(interval);
	timerElement.textContent = "Timer: 0";
	wpmElement.textContent = "WPM: 0";
	inputElement.value = "";
	updateSentenceLayer();
});

// Initialize the sentence layer on load
updateSentenceLayer();
