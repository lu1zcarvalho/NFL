function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'rel': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

// Utilize a chave de API para fazer uma solicitação à API do YouTube Data v3 e obter informações do vídeo.
fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet`, {
    method: 'GET',
})
    .then(response => response.json())
    .then(data => {
        console.log('Informações do vídeo:', data);
    })
    .catch(error => {
        console.error('Erro ao obter informações do vídeo:', error);
    });