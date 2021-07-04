'use strict'

const { test } = require('tap')
const { build } = require('../helper')

describe('Integration tests', async function() {
  const app = build(t)

  const res = await app.inject({
    url: '/'
  })
  it('default root route', async (t) => {

    i
  })

});

