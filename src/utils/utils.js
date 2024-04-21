export const speechRecognition = () => {
    console.log("first")
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        
        // Set recognition parameters
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        // Event handler when speech recognition starts
        recognition.onstart = function () {
            console.log('Speech recognition started');
        };

        // Event handler for receiving interim results
        recognition.onresult = function (event) {
            var interimTranscript = '';
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    var finalTranscript = event.results[i][0].transcript;
                    return finalTranscript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
        };

        // Event handler when speech recognition ends
        recognition.onend = function () {
            console.log('Speech recognition ended');
        };

        // Event handler for errors
        recognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
        };

    } else {
        console.error('Web Speech API is not supported in this browser');
    }
}