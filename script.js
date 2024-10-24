document.getElementById('select-2014').addEventListener('click', function() {
    document.getElementById('content').classList.remove('hidden');
    const music = document.getElementById('background-music');
    music.play();  // Play music when 2014 is selected
    loadMovies();
    loadTVShows();
    loadSportsEvents();
    loadMusicArtists();
    loadControversies();
});

// Load Movies Function
function loadMovies() {
    const moviesSection = document.getElementById('movies-section');
    const movies = [
        {
            title: 'PK',
            image: 'assets/Movies/pk.jpg',
            impact: 'A satirical comedy-drama that challenged religious dogmas and became one of the highest-grossing Indian films of all time.'
        },
        {
            title: 'Haider',
            image: 'assets/Movies/haider.jpg',
            impact: 'An adaptation of Shakespeare\'s Hamlet set in Kashmir, it raised awareness about the socio-political issues in the region.'
        },
        {
            title: 'Happy New Year',
            image: 'assets/Movies/happynewyear.jpg',
            impact: 'A heist film that combined comedy and drama, showcasing the importance of teamwork and family.'
        }
    ];

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('bg-gray-800', 'rounded-lg', 'shadow-md', 'p-4');
        movieCard.innerHTML = `
            <img src="${movie.image}" class="rounded-t-lg h-48 object-cover" alt="${movie.title}">
            <h5 class="text-lg font-bold mt-2">${movie.title}</h5>
            <p class="text-sm mt-1">${movie.impact}</p>
        `;
        moviesSection.appendChild(movieCard);
    });
}

// Load TV Shows Function
function loadTVShows() {
    const tvSection = document.getElementById('tv-section');
    const tvShows = [
        {
            title: 'Kumkum Bhagya',
            description: 'A family drama revolving around the lives of a couple who are connected by fate.'
        },
        {
            title: 'Yeh Hai Mohabbatein',
            description: 'A romantic drama that highlights the bond between a couple from different backgrounds.'
        },
        {
            title: 'Diya Aur Baati Hum',
            description: 'A show about a woman striving to achieve her dreams while balancing her family responsibilities.'
        }
    ];

    tvShows.forEach(show => {
        const tvCard = document.createElement('div');
        tvCard.classList.add('bg-gray-800', 'rounded-lg', 'shadow-md', 'p-4');
        tvCard.innerHTML = `
            <h5 class="text-lg font-bold">${show.title}</h5>
            <p class="text-sm mt-1">${show.description}</p>
        `;
        tvSection.appendChild(tvCard);
    });
}

// Load Sports Events Function
function loadSportsEvents() {
    const sportsSection = document.getElementById('sports-section');
    const sportsEvents = [
        {
            title: 'ICC Cricket World Cup',
            description: 'India reached the semifinals in a thrilling tournament, showcasing remarkable performances.'
        },
        {
            title: 'Indian Premier League (IPL)',
            description: 'The 7th season featured intense matches, with Kolkata Knight Riders winning the trophy.'
        },
        {
            title: 'Commonwealth Games',
            description: 'India performed excellently, finishing 5th on the medal table with a total of 62 medals.'
        }
    ];

    sportsEvents.forEach(event => {
        const sportsCard = document.createElement('div');
        sportsCard.classList.add('bg-gray-800', 'rounded-lg', 'shadow-md', 'p-4');
        sportsCard.innerHTML = `
            <h5 class="text-lg font-bold">${event.title}</h5>
            <p class="text-sm mt-1">${event.description}</p>
        `;
        sportsSection.appendChild(sportsCard);
    });
}

// Load Music Artists Function
function loadMusicArtists() {
    const musicArtistsSection = document.getElementById('music-artists-section');
    const artists = [
        {
            name: 'Arijit Singh',
            description: 'One of the most popular playback singers in India, known for his romantic songs.'
        },
        {
            name: 'Shreya Ghoshal',
            description: 'A renowned playback singer with numerous awards and hits to her name.'
        },
        {
            name: 'Honey Singh',
            description: 'A famous music producer and singer known for his upbeat party tracks.'
        }
    ];

    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('bg-gray-800', 'rounded-lg', 'shadow-md', 'p-4');
        artistCard.innerHTML = `
            <h5 class="text-lg font-bold">${artist.name}</h5>
            <p class="text-sm mt-1">${artist.description}</p>
        `;
        musicArtistsSection.appendChild(artistCard);
    });
}

// Load Controversies Function
function loadControversies() {
    const controversySection = document.getElementById('controversy-section');
    const controversies = [
        {
            title: 'Aamir Khans PK Controversy',
            description: 'The film faced backlash for its portrayal of religious beliefs, sparking nationwide discussions.'
        },
        {
            title: 'Sushant Singh Rajput’s Death',
            description: 'His untimely demise led to widespread media coverage and debates about mental health in Bollywood.'
        },
        {
            title: 'Salman Khan’s Blackbuck Poaching Case',
            description: 'The ongoing legal battles highlighted issues related to wildlife protection and celebrity accountability.'
        }
    ];

    controversies.forEach(contest => {
        const controversyCard = document.createElement('div');
        controversyCard.classList.add('bg-gray-800', 'rounded-lg', 'shadow-md', 'p-4');
        controversyCard.innerHTML = `
            <h5 class="text-lg font-bold">${contest.title}</h5>
            <p class="text-sm mt-1">${contest.description}</p>
        `;
        controversySection.appendChild(controversyCard);
    });
}

// Music Control Functions
document.getElementById('play-music').addEventListener('click', function() {
    const music = document.getElementById('background-music');
    music.play();
});

document.getElementById('stop-music').addEventListener('click', function() {
    const music = document.getElementById('background-music');
    music.pause();
});

document.getElementById('volume-control').addEventListener('input', function() {
    const music = document.getElementById('background-music');
    music.volume = this.value;
});
