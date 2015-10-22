// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  events:{

  },
  el: '<audio id="the_player" controls autoplay />',

  initialize: function() {
    var self = this;
    //var theQueue = MyTunes.get("songQueue"); //leaving this for my mind.
    //this.$el.bind('ended', function(){
    //  theQueue.remove(theQueue.at(0));
    //});
    this.$el.bind('ended', $.proxy(function(){
      this.model.trigger('ended');
    }, this));

  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
