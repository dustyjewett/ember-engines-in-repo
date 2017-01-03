import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thinger-mabob', 'Integration | Component | thinger mabob', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thinger-mabob}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thinger-mabob}}
      template block text
    {{/thinger-mabob}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
