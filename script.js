var app = new Vue ({
    el: '#app',
    data: {
      arrayMovies: [],
      thisSearch: ''
    },
  
    methods: {
      searchFunction: function() {  
        
        axios
        .get('https://api.themoviedb.org/3/search/movie',
          { params:
            {
              api_key: '2cd3ef7f0cd27a179b24f4410ce0e944',
              query: this.thisSearch              
            }
          }
        )
  
        .then(risposta => {
          this.arrayMovies = risposta.data.results;       
  
          this.thisSearch = '';          
        });  
      },
  
    },

  })