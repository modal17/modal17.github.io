
// This is specialized for a RGB array. [ r, g, b, r1, g1, b1, ... , rn, gn, bn ]
export function shuffle( data ) {
    let index = data.length, temp, randIndex

    while ( index !== 0 ) {
        
         randIndex = Math.floor( Math.random() * (index-3))
         
         temp = data.slice(index, index+3)
         data.splice(index, 0, ...data.slice(randIndex+3))
         data.splice(randIndex, 0, ...temp)
    }

    return data
}

// Given red, blue, green values(0-255), get the hue.
export function hue( r, g, b ) {
    let min = Math.min( r, g, b )
    let max = Math.max( r, g, b )

    if (min == max) {
        return 0
    }

    let hue = 0.0
    if ( max == r ) {
        hue = ( g - b )/( max - min )
    } else if ( max == g ) {
        hue = 2.0 + ( b - r )/( max - min )
    } else {
        hue = 4.0 + ( r - g )/( max - min )
    }

    hue *= 60
    if (hue < 0) {
        hue += 360
    }

    return Math.round(hue)
}

export function randomFill( width, height ) {
    let data = new Uint8Array( width * height * 3 ) 

    for ( let x = 0; x < width; x++ ) {
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        for ( let y = 0; y < height; y++ ) {
            let stride = (y * width + x) * 3;
            data[stride] = r
            data[stride+1] = g
            data[stride+2] = b
        }
    }

    return data
}