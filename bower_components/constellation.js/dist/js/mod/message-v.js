define(["lib/jquery","lib/backbone","./grid-c","./grid-m"],function(e,t,n,r){var i=t.View.extend({el:"#message",empty:!1,initialize:function(){this.listenTo(n,"alert",this.onAlert),this.listenTo(r,"change",this.onTestEmpty),this.$el.hide()},onTestEmpty:function(){r.getNumNodes()?this.empty&&(this.$el.clearQueue().fadeOut(500),this.empty=!1):(this.$el.clearQueue().html("Double-click to add nodes...<span>Click and drag for selection marquee</span>").fadeIn(),this.empty=!0)},onAlert:function(e,t){r.getNumNodes()>0?this.$el.clearQueue().html(e+(t?"<span>SHIFT+click adds to selection</span>":"")).show().delay(2500).fadeOut(500):this.$el.clearQueue().animate({marginLeft:"-=5px"},50).animate({marginLeft:"+=10px"},100).animate({marginLeft:"-=10px"},100).animate({marginLeft:"+=10px"},100).animate({marginLeft:"-=5px"},50)}});return new i});