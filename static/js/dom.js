const env = {
    API_BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'http://image.tmdb.org/t/p',
    API_KEY: '7e41f8c308e8c9521fbd018d53440a05'
};

function addSeasonComponent(season, posterPosition) {
    let seasonComponentHTML =
    `<article class="season-container-poster-${posterPosition}">
        <div class="season-title">
            <h2 style="text-align:center;">${season.name}</h2>
        </div>
        <div class="season-poster">
            <img
                src="${env.IMAGE_BASE_URL}/original${season.poster_path}"
                alt="${season.name}'s poster.">
        </div>
        <div class="season-overview">
            <p>
                ${season.overview}
            </p>
            <p>
                <strong>Episodios: </strong> ${season.episode_count}
            </p>
            <p>
                <strong>Estreia: </strong> ${season.air_date}
            </p>
        </div>
    </article>`;
    let seasonComponent = document.createElement('div');
    seasonComponent.innerHTML = seasonComponentHTML;

    document.getElementById('seasons').appendChild(seasonComponent);
}

/*function addSeasonComponent(season, posterPosition) {
    let seasonComponent = document.createElement('div');
    seasonComponent.classList.add(`season-container-poster-${posterPosition}`);

    let seasonTitleElement = document.createElement('div');
    seasonTitleElement.classList.add('season-title');
    seasonTitleElement.appendChild(
        document.createElement('h4').appendChild(
            document.createTextNode(season.name)
        )
    );
    seasonComponent.appendChild(seasonTitleElement);

    let seasonOverviewElement = document.createElement('div');
    seasonOverviewElement.classList.add('season-overview');
    seasonOverviewElement.appendChild(
        document.createElement('p').appendChild(
            document.createTextNode(season.overview)
        )
    );
    seasonComponent.appendChild(seasonOverviewElement);

    let seasonPosterElement = document.createElement('div');
    seasonPosterElement.classList.add('season-poster');
    let posterImgElement = document.createElement('img');
    posterImgElement.src = `${env.IMAGE_BASE_URL}/original${season.poster_path}`;
    seasonPosterElement.appendChild(posterImgElement);
    seasonComponent.appendChild(seasonPosterElement);

    document.getElementById('seasons').appendChild(seasonComponent);
}*/
