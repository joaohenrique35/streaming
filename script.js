const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const creditsSpan = document.getElementById('credits');
const adContainer = document.querySelector('.ad-container');
const adVideo = document.getElementById('ad-video');
const watchAdBtn = document.getElementById('watch-ad-btn');
const adMessage = document.getElementById('ad-message');

let currentSongIndex = 0;
let credits = 0;
let adTriggerCounter = 0;
const AD_INTERVAL = 2; // Show ad every 2 songs
const AD_CREDITS_REWARD = 10;

const songs = [
    { title: 'Música 1', artist: 'Artista A', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Música 2', artist: 'Artista B', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Música 3', artist: 'Artista C', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

const ads = [
    'https://www.w3schools.com/html/mov_bbb.mp4', // Example ad video
    'https://www.w3schools.com/html/movie.mp4' // Another example ad video
];

function loadSong(song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.load();
}

function playSong() {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
}

function pauseSong() {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    adTriggerCounter++;
    if (adTriggerCounter >= AD_INTERVAL) {
        showAd();
        adTriggerCounter = 0;
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function updateCredits(amount) {
    credits += amount;
    creditsSpan.textContent = credits;
}

function showAd() {
    pauseSong();
    adContainer.style.display = 'block';
    adVideo.src = ads[Math.floor(Math.random() * ads.length)];
    adVideo.load();
    adMessage.textContent = 'Assista ao vídeo para ganhar ' + AD_CREDITS_REWARD + ' créditos.';
    watchAdBtn.style.display = 'block';
    adVideo.play();
}

function hideAd() {
    adContainer.style.display = 'none';
    adVideo.pause();
    adVideo.currentTime = 0;
    playSong(); // Resume music after ad
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audioPlayer.addEventListener('ended', nextSong); // Play next song when current ends

watchAdBtn.addEventListener('click', () => {
    // In a real application, you'd verify if the ad was actually watched.
    // For this simple example, clicking the button grants credits.
    updateCredits(AD_CREDITS_REWARD);
    adMessage.textContent = `Você ganhou ${AD_CREDITS_REWARD} créditos!`;
    watchAdBtn.style.display = 'none'; // Hide button after claiming
    setTimeout(hideAd, 2000); // Hide ad after a short delay
});

// Initial load
loadSong(songs[currentSongIndex]);
updateCredits(0); // Initialize credits display

