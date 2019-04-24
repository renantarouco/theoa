class Season {
    constructor(name, overview, posterPath) {
        this.name = name;
        this.overview = overview;
        this.posterPath = posterPath;
    }
}

function addSeasonComponent(season) {
    let seasonComponent = document.createElement('section');
    seasonComponent.style.display = 'flex';
    let seasonNameElement = document.createElement('div');
    let seasonOverviewElement = document.createElement('div');
}