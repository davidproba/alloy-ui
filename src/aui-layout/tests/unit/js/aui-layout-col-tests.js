YUI.add('aui-layout-col-tests', function(Y) {

    var Assert = Y.Assert,
        suite = new Y.Test.Suite('aui-layout-col');

    suite.add(new Y.Test.Case({
        name: 'Layout Col Tests',

        setUp: function() {
            var Content = Y.Base.create('content', Y.Base, [], {}, {
                ATTRS: {
                    content: {
                        value: 'foo'
                    }
                }
            });

            this.layoutCol = new Y.LayoutCol({
                size: 4,
                value: new Content()
            });
        },

        tearDown: function() {
            this.layoutCol.destroy();
        },

        'should add bootstrap class according to it\'s size': function() {
            var colTemplate = this.layoutCol.getContent(),
                colSize = this.layoutCol.get('size');

            Assert.isTrue(colTemplate.hasClass('col-md-' + colSize));
            Assert.areEqual('foo', colTemplate.text());
        }
    }));

    Y.Test.Runner.add(suite);
}, '', {
    requires: ['test', 'aui-layout-col']
});