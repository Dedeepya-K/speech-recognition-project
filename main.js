const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('how are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I am fine, thank you for asking.';
      texts.appendChild(p)
    }
    if (text.includes("what's your name") || text.includes('what is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My Name is DBot!';
      texts.appendChild(p)
    }

    if (text.includes('what can you do') || text.includes('How can you help me')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'I can assit you in the following ways: reply to some prewritten messages and convert your speech to text.';
        texts.appendChild(p)
        console.log('assistance message')
      }

    if (text.includes('open YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/')
    }

    if (text.includes('open LinkedIn')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'opening linkedin';
        texts.appendChild(p)
        console.log('opening youtube')
        window.open('https://www.linkedin.com/in/dedeepya-k/')
      }

      if (text.includes('thank you') || text.includes('thanks')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = 'You are welcome';
        texts.appendChild(p)
        console.log('assistance message')
      }
    
      if (text.includes('happy birthday') || text.includes('happy birthday song') || text.includes('happy birthday song lyrics')) {
        p = document.createElement('p');
        p.classList.add('replay');
        p.innerText = `Happy Birthday to You
        Happy Birthday to You
        Happy Birthday Dear (name)
        Happy Birthday to You.
        
        From good friends and true,
        From old friends and new,
        May good luck go with you,
        And happiness too.
        
        Alternative ending:
        How old are you?
        How old are you?
        How old, How old
        How old are you?`;
        texts.appendChild(p)
        console.log('assistance message')
      }


    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();