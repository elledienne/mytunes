// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    // this.on("add",this.render,this) //might not be what I want? - might want to do thi in a entryview

    this.render();

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>The Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }








  // render: function() {
  // initialize: function() {
  // },
  // }

});

