// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  events:{
    // "click"


  },

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // el: '<audio id="the_player" controls autoplay />',
  el: '<audio id="the_player" controls autoplay /><div>\
      <button onclick="document.getElementById("the_player").play()">Play the Audio</button>\
      <button onclick="document.getElementById("the_player").pause()">Pause the Audio</button>\
      <button onclick="document.getElementById("the_player").volume+=0.1">Increase Volume</button>\
      <button onclick="document.getElementById("the_player").volume-=0.1">Decrease Volume</button>\
      </div>',

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
