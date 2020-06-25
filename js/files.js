var myGroup = $('#your-list');
myGroup.on('show.bs.collapse','.collapse', function() {
 myGroup.find('.collapse.show').collapse('hide');
});