// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  url:"http://54.183.147.110:1337",

  model: SongModel,
  initialize:function(){
  },
  update: function(){
    this.fetch({
      reset: true,
      complete: function(xhr, textStatus) {
        console.log(textStatus,xhr);
      },
  
      success: function (message) {
        console.log("NOERROR: ",message);
        console.log("This is this: ",this)
        // messagesView = new MessageColView({ collection: message.toJSON()[0].results })
        // messagesList = message.toJSON();
      },
      error:function(e){
        console.log("ERROR",e)
      }
    });
  }


});