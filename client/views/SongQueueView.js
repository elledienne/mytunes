// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  // collection:SongQueue,

  tagName: "table",

  initialize: function() {

    this.collection.on('add remove', this.aName, this);
  },

  aName: function() {

    if(this.collection.length !== 0){
      this.collection.at(0).play();
    }
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();


    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model:song}).render();
      })
    );
    $("div").append(this.$el)
    // $("div").append(this.el)
  }

  // initialize: function() {
  // },

  // render: function() {
  // initialize: function() {
  // },
  // }

});

