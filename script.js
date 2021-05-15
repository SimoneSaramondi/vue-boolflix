var app = new Vue ({
    el: '#app',
    data: {
      arrayFilm: [],
      arraySerieTv: [],
      arrayFlags: ['de', 'en', 'es', 'fr', 'it', 'pt','ru', 'zh', 'ja'],
      thisSearch: ''
    },
    methods: {
      //Richaimo sia per serie che per film
      searchFunction() {
        this.searchFilm();
        this.searchSerieTv();
      },
      
      //Film 
      searchFilm(){
        axios
        .get('https://api.themoviedb.org/3/search/movie',
          { params:
            {
              api_key: '2cd3ef7f0cd27a179b24f4410ce0e944',
              query: this.thisSearch,
              language: 'it-IT'
            }
          }
        )
        .then(risposta => {
          this.arrayFilm = risposta.data.results;
        });
      },

      //Serie
      searchSerieTv(){
        axios
        .get('https://api.themoviedb.org/3/search/tv',
          { params:
            {
              api_key: '2cd3ef7f0cd27a179b24f4410ce0e944',
              query: this.thisSearch,
              language: 'it-IT'
            }
          }
        )
        .then(risposta => {
          this.arraySerieTv = risposta.data.results;
        });
      },
  
      flagFunction: function(index) {
        return this.arrayFlags.includes(index);
      },
      voteStarsFunct: function(movie) {
        return Math.ceil( movie.vote_average / 2 );
      },  
      summonPoster: function(poster) {
        return `https://image.tmdb.org/t/p/w342/${poster}`;
      }
    }
  })