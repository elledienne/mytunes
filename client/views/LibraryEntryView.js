// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  // model: SongModel,
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>PLAYED: <%= playCount %> times <span class="glyphicon glyphicon-thumbs-up"></span></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      //this.model.play();
    }
  },




  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
