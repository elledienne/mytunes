// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults:{
    queued: false;
  },
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){

    MyTunes.get("songQueue").add(this);

  },
  dequeue:function(){
    MyTunes.get("songQueue").remove(this);

  }




});
