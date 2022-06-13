const jimp = require('jimp')

const gray = [
    { apply: 'hue', params: [-90] },
    { apply: 'lighten', params: [50] },
    { apply: 'xor', params: ['#06D'] }
]

const main = async () => {
    const image = await jimp.read('./input/head.png')

    image.color(gray)
    image.writeAsync('./output/head-gray.png')
}

main()
