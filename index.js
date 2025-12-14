document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/songs')
    .then(res => res.json())
    .then(data => {
      const playlist = document.getElementById('user-playlists');
      data.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.className = 'cursor-pointer hover:text-purple-300';
        li.onclick = () => playSong(song.file_url, song.title);
        playlist.appendChild(li);
      });
    });
});

function playSong(file, title) {
  const audio = new Audio(`/audio/${file}`);
  audio.play();
  alert(`Now playing: ${title}`);
}
