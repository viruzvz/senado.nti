var $ = require('jquery')
var feature = require('./feature')


console.log($.fn.jquery)
console.log(feature.add(1, 2))
console.log(feature.pow(9))
console.log(feature.valor_padrao)

$('body').on('click',function () {
    $('body').css({
        background: 'purple'
    })
})
