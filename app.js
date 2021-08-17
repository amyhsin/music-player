const title = document.querySelector('.title');
const prev = document.querySelector('.prev i');
const playPause = document.querySelector('.playPause i');
const playPause_sec = document.querySelector('.playPause');
const next = document.querySelector('.next i');
const audio = document.querySelector('audio');

// CREATE A MUSIC LIST
const musicList = [
  {
    path: './music/Alive in the summer time.m4a',
    songName: 'Alive in the summer time'
  },
  {
    path: './music/Breakbeat background.m4a',
    songName: 'Breakbeat background'
  },
  {
    path: './music/Elegance.m4a',
    songName: 'Elegance'
  },
  {
    path: './music/The best moments in life.m4a',
    songName: 'The best moments in life'
  },
  {
    path: './music/Time to travel.m4a',
    songName: 'Time to travel'
  }
];


// PLAY OR PAUSE MUSIC
let musicPlaying = false;

function playMusic() {
  musicPlaying = true;
  audio.play();

  // CHANGE TO PLAY ICON
  playPause_sec.innerHTML = '<i class="fal fa-play active"></i>';
}
function pauseMusic() {
  musicPlaying = false;
  audio.pause();

  // CHANGE TO PAUSE ICON
  playPause_sec.innerHTML = '<i class="fal fa-pause"></i>';
  // playPause.classList.remove('active');
}

playPause_sec.addEventListener('click', () => {
  musicPlaying ? pauseMusic() : playMusic();
});


// LOAD MUSIC
function loadMusic(musicList) {
  title.textContent = musicList.songName;
  audio.src = musicList.path;
}

let i = 0;

loadMusic(musicList[i]);

// PREVIOUS MUSIC
prev.addEventListener('click', () => {
  i--;
  if (i < 0) i = musicList.length - 1;
  loadMusic(musicList[i]);
  playMusic();
});

// NEXT MUSIC
next.addEventListener('click', () => {
  i++;
  if (i > musicList.length - 1) i = 0;
  loadMusic(musicList[i]);
  playMusic();
});


// WHEN MUSIC ENDS, AUTOPLAY THE NEXT
audio.addEventListener('ended', () => {
  i++;
  if (i > musicList.length - 1) i = 0;
  loadMusic(musicList[i]);
  playMusic();
});