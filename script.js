var app = new Vue ({
    el: '#app',
    /*
    data: {
      arrayMovies: [],
      thisSearch: '',
    },
  
    methods: {
      //Ricerca di un film all'interno del sito
      searchFunction: function() {  
        
        axios
        .get('https://api.themoviedb.org/3/search/movie',
          { params:
            {
              api_key: '2cd3ef7f0cd27a179b24f4410ce0e944',
              query: this.thisSearch,          
            }
          }
        )
  
        .then(risposta => {
          this.arrayMovies = risposta.data.results;   
  
          this.thisSearch = '';          
        });  
      },
  
    },*/
    data: {
      arrayFilm: [],
      arraySerieTv: [],
      arrayFlags: ['de', 'en', 'es', 'fr', 'it', 'pt','ru', 'zh', 'ja'],
      thisSearch: ''
    },
    methods: {
      searchFunction() {
        this.searchFilm();
        this.searchSerieTv();
      },
  
      searchFilm(){
        //Chiamata per movie:
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
  
      searchSerieTv(){
        //chiamata serie tv
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