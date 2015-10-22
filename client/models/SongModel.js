// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults:{
    playCount:0,
    upvoteCount:0,

  },

  play: function() {
    //this.set("playCount",this.get("playCount")+1);
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue:function(){
    this.trigger("eq",this);
    //MyTunes.get("songQueue").add(this);

  },

  dequeue: function(){
    this.trigger("dq",this);
    // MyTunes.get("songQueue").add(this);

  }



});
