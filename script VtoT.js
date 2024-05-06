click_to_record.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true; 
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
          
       convert_text.innerHTML = transcript;
        console.log(transcript);
    });
    
    if (speech == true) {
        recognition.start();


    }

})

click_to_copy1.addEventListener('click', function(){
    const text = document.getElementById('convert_text').innerHTML;
    navigator.clipboard.writeText(text);
 })
 