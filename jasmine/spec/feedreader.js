$(function() {
  describe('RSS Feeds', function() {

    /*Test that the allFeeds variable has been defined, does not have length
    of 0, and is not null*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
      expect(allFeeds).not.toBe(null);
    });

    //Test that each URL is defined and that the URL is not empty
    it('url is defined and not empty', function() {
      for (i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe('');
      }
    });

    //Test that each feed has a name defined and that name is not empty
    it('name is defined and not empty', function() {
      for (i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe('');
      }
    });
  });

  describe('The menu', function() {

    //Test that the menu element is hidden by default
    it('menu is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    //Test that the menu changes visibility when the menu icon is clicked
    it('menu will change visibility when the icon is clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    /*Test that when the LoadFeed function is called and completes,
    there is at least a single .entry element within the .feed container.*/
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('.feed container has at least 1 entry', function() {
      var theEntry = $('.feed .entry').length;
      //var theEntry = $('.entry').length;
      expect(theEntry).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function() {
    /*Test that when a new feed is loaded by the loadfeed function,
    the content actually changes*/

    //Save the older and new feeds
    var beforeChange;
    beforeEach(function(done) {
      loadFeed(0, function() {
        beforeChange = $('.feed').html();
        loadFeed(1, done);
      });
    });
    //Test and compare the feeds changed
    it('the conent has changed', function() {
      expect($('.feed').html()).not.toEqual(beforeChange);
    });
  });

}());
