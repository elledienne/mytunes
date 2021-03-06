var AppModel = Backbone.Model.extend({
  


  initialize: function(params) {
    // this.set("library", new Songs());

    this.set('currentSong', new SongModel());

    this.set('songQueue', new SongQueue());

    this.get("songQueue").on("ended",function(){
      this.get("songQueue").remove(this.get("songQueue").at(0));
    },this);

    this.get("songQueue").on("dq",function(song){
        this.get("songQueue").remove(song);
    }, this);

    this.get("library").on("eq",function(song){  
        this.get("songQueue").add(song);
    }, this);
    
    this.get("library").on('play', function(song) {
      this.set('currentSong', song);
    }, this);
  }

});
