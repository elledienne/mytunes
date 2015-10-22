// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>PLAYED: <%=playCount %> times <span class="glyphicon glyphicon-thumbs-up"></span></td>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  // your code here!
});
