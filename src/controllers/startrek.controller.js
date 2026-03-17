const shows = [
    { title: 'The Original Series', year: '1966-1969', seasons: 3},
    { title: 'The Next Generation', year: '1987-1994', seasons: 7},
    { title: 'Deep Space Nine', year: '1993-1999', seasons: 7},
    { title: 'Voyager', year: '1995-2001', seasons: 7},
    { title: 'Enterprise', year: '2001-2005', seasons: 4},
    { title: 'Discovery', year: '2017-2024', seasons: 5},
    { title: 'Strange New Worlds', year: '2022-present', seasons: 3},
];

exports.GetHomePage = (req, res) => {
    res.render('index', { title: 'Welcome to Star Trek' });
};

exports.GetShows = (req, res) => {
    res.render('shows', { title: 'Star Trek Shows', shows });
};