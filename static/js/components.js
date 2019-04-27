const IMAGES_BASE_URL = 'http://image.tmdb.org/t/p';

function addSeasonDetailComponent(parentElement, season, posterPosition) {
    let seasonComponentHTML =
    `
    <div class="card-header">
        <div class="card-header-title">
            <h3>${season.name}</h3>
        </div>
        <div class="card-header-subtitle">
            ${season.air_date}
        </div>
    </div>
    <div class="card-content poster-${posterPosition}">
        <div class="card-content-poster">
            <img
                src="${IMAGES_BASE_URL}/original${season.poster_path}"
                alt="The OA's season poster.">
        </div>
        <div class="card-content-body">
            <section class="season-overview">
                <h2>Overview</h2>
                <p>
                    ${season.overview}
                </p>
            </section>
            <section class="season-episodes">
                <table hidden="true">
                    <thead>
                        <tr style="background-color: #564d4d">
                            <th style="text-align: center">#</th>
                            <th style="text-align: left">NAME</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody-season-${season.season_number}">
                    </tbody>
                </table>
            </section>
        </div>
    </div>
    `;

    let seasonComponent = document.createElement('article');
    seasonComponent.classList.add('card');
    seasonComponent.innerHTML = seasonComponentHTML;

    document.getElementById(parentElement).appendChild(seasonComponent);
}

function addSeasonEpisodesListComponent(seasonNumber, episodesList) {
    let tbodyElement = document.getElementById(`tbody-season-${seasonNumber}`);
    for (let episode of episodesList) {
        let episodeRowElement = document.createElement('tr');
        episodeRowElement.innerHTML =
        `
        <td style="text-align: center">${episode.episode_number}</td>
        <td>${episode.name}</td>
        <td>${episode.vote_average}</td>
        `;
        tbodyElement.appendChild(episodeRowElement);
    }
    tbodyElement.parentElement.hidden = false;
}