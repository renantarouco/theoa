const IMAGES_BASE_URL = 'http://image.tmdb.org/t/p';

function addSeasonDetailComponent(parentElement, season, posterPosition) {
    let seasonComponentHTML =
    `
    <div class="season-name">
        <h3>${season.name}</h3>
    </div>
    <div class="season-air-date">
        <strong>${season.air_date}</strong>
    </div>
    <div class="season-poster">
        <img
            src="${IMAGE_BASE_URL}/original${season.poster_path}"
            alt="${season.name}'s poster.">
    </div>
    <div class="season-overview">
        <p>
            ${season.overview}
        </p>
    </div>
    <div class="season-episodes-list">
        <table>
            <tr>
                <th>#</th>
                <th>NAME</th>
            </tr>
        </table>
    </div>
    `;

    let seasonComponent = document.createElement('article');
    seasonComponent.classList.add('season-detail-container', `poster-${posterPosition}`);
    seasonComponent.innerHTML = seasonComponentHTML;

    document.getElementById(parentElement).appendChild(seasonComponent);
}