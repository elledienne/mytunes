// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  events:{

  },

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // el: '<audio id="the_player" controls autoplay />',
  el: '<audio id="the_player" controls autoplay />',

  initialize: function() {
    var theQueue = MyTunes.get("songQueue");
    this.$el.bind('ended', function(){
      theQueue.remove(theQueue.at(0));
    });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
