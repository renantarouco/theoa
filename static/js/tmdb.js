const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7e41f8c308e8c9521fbd018d53440a05';

function retrieveTVShowDetail(id) {
    return fetch(`${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json());
}

function retrieveTVShowSeasonsList(id) {
    return retrieveTVShowDetail(id)
        .then(tvShow => tvShow.seasons);
}

function retrieveSeasonDetail(id, seasonNumber) {
    return fetch(`${SPI_BASE_URL}/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json());
}

function retrieveSeasonEpisodesList(id, seasonNumber) {
    return retrieveSeasonDetail(id, seasonNumber)
        .then(seasonDetail => seasonDetail.episodes);
}