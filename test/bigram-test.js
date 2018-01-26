const chai = require('chai')
const assert = chai.assert;
const should = chai.should();
const app = require('../app')

describe('Bigram test', function(){

    it('Should list bigram', function(){

        assert.deepEqual(app("The quick brown fox and the quick blue hare."), {
        'the quick': 2,
        'quick brown': 1,
        'brown fox': 1,
        'fox and': 1,
        'and the': 1,
        'quick blue': 1,
        'blue hare': 1})
    })
})