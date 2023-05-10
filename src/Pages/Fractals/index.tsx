import React, {useEffect} from 'react';
var math = require("mathjs");

export const FractalsPage = () => {

    useEffect(() => {
           /* // The HTML elements we are using
            var header = document.querySelector('h2')
            var canvas = document.querySelector('canvas')
            var ctx = canvas?.getContext('2d')

        if (canvas && ctx) {

            // The size of our canvas
            var width = 200
            var height = 200

            // Set the size of our canvas
            canvas.width = width
            canvas.height = height

            // The XY coordinates of the mouse over the canvas
            var mouseX = 0
            var mouseY = 0

            // The point we use for C in our Julia Set equation
            var constant = math.complex(0.28, 0.01)

            // The maximum number of times we iterate a point to see if it escapes
            var maxIterations = 64

            // Apply the Julia Set formula to see if point z "escapes"
            const julia: any = (z: any, i = 0) => {
                // Apply the Julia Set formula: z*z+constant
                z = z.mul(z)
                z = z.add(constant)

                // Has our point escaped, or hit the iteration limit?
                if (math.abs(z) > 2 || i == maxIterations)
                    // If so, return number of iterations
                    return i
                else
                    // If not, iterate again!
                    return julia(z, i + 1)
            }

            // Turn a point on the complex plane into a color
            const pointToColor = (point: any) => {
                // How many iterations on this point before it escapes?
                var iterations = julia(point)

                // What percentage of our limit is that?
                var percentage = iterations / maxIterations

                var red = percentage * 255
                var green = percentage * 255
                var blue = percentage * 255

                // Create a color from that percentage
                return `rgb(${red}, ${green}, ${blue})`
            }

            // Turn XY pixel coordinates into a point on the complex plane
            const pixelToPoint = (x: any, y: any) => {
                // Map percentage of total width/height to a value from -1 to +1
                var zx = (x / width) * 2 - 1
                var zy = 1 - (y / height) * 2

                // Create a complex number based on our new XY values
                return math.complex(zx, zy)
            }

            // Draw a single pixel on our canvas
            const drawPixel = (x: any, y: any, color: any) => {
                if (ctx) {
                    ctx.fillStyle = color
                    ctx.fillRect(x, y, 1, 1)
                }
            }

            // Redraw our canvas
            const draw = () => {
                // Loop over every column of pixels
                for (var y = 0; y < height; y++) {
                    // Loop over every row of pixels
                    for (var x = 0; x < width; x++) {
                        // Turn this pixel into a point in the complex plane
                        var point = pixelToPoint(x, y)

                        // Turn that point into a color
                        var color = pointToColor(point)

                        // Draw over this pixel with that color
                        drawPixel(x, y, color)
                    }
                }
            }

            // Update the elements that need to change
            const update = () => {
                if (header) {
                    header.innerHTML = constant.toString()
                    draw()
                }
            }

            // What to do when the mouse moves over the canvas
            const move = (event: any) => {
                if (canvas) {
                    // Get the mouse's XY coordinates on canvas
                    mouseX = event.clientX - canvas.offsetLeft
                    mouseY = event.clientY - canvas.offsetTop

                    // Turn mouse coordinates into a point on the complex plane
                    constant = pixelToPoint(mouseX, mouseY)

                    // Round that point off to the nearest 0.01
                    constant.re = math.round(constant.re * 100) / 100
                    constant.im = math.round(constant.im * 100) / 100

                    // Update everything!
                    update()
                }
            }

            // Trigger move every time the mouse moves over canvas
            canvas.addEventListener('pointermove', move)

            // Update everything!
            update()
        }*/
            // The HTML elements we are using
            var header = document.querySelector('h2')
            var canvas = document.querySelector('canvas')
            var ctx = canvas?.getContext('2d')

        if (canvas && ctx) {
            // The size of our canvas
            var width = 200
            var height = 200

            // Set the size of our canvas
            canvas.width = width
            canvas.height = height

            // The XY coordinates of the mouse over the canvas
            var mouseX = 0
            var mouseY = 0

            // The point we use for C in our Julia Set equation
            var constant = math.complex(0.28, 0.01)

            // The maximum number of times we iterate a point to see if it escapes
            var maxIterations = 64

            // Whether we have clicked yet
            var clicked = false

            // How much we move the image
            var pan = math.complex(0, 0)

            // How much we zoom the image
            var zoom = 1

            // Apply the Julia Set formula to see if point z "escapes"
            const julia: any = (z: any, i = 0) => {
                // Apply the Julia Set formula: z*z+constant
                z = z.mul(z)
                z = z.add(constant)

                // Has our point escaped, or hit the iteration limit?
                if (math.abs(z) > 2 || i == maxIterations)
                    // If so, return number of iterations
                    return i
                else
                    // If not, iterate again!
                    return julia(z, i + 1)
            }

            // Turn a point on the complex plane into a color
            const pointToColor = (point: any) => {
                // How many iterations on this point before it escapes?
                var iterations = julia(point)

                // What percentage of our limit is that?
                var percentage = iterations / maxIterations

                var red = percentage * 255
                var green = percentage * 255
                var blue = percentage * 255

                // Create a color from that percentage
                return `rgb(${red}, ${green}, ${blue})`
            }

            // Turn XY pixel coordinates into a point on the complex plane
            const pixelToPoint = (x: any, y: any) => {
                // Map percentage of total width/height to a value from -1 to +1
                var zx = (x / width) * 2 - 1
                var zy = 1 - (y / height) * 2

                // Create a complex number based on our new XY values
                var z = math.complex(zx, zy)

                // Zoom the camera
                z = z.div(zoom)

                // Pan the camera
                z = z.add(pan)

                return z
            }

            // Draw a single pixel on our canvas
            const drawPixel = (x: any, y: any, color: any) => {
                if (ctx) {
                    ctx.fillStyle = color
                    ctx.fillRect(x, y, 1, 1)
                }
            }

            // Redraw our canvas
            const draw = () => {
                // Loop over every column of pixels
                for (var y = 0; y < height; y++) {
                    // Loop over every row of pixels
                    for (var x = 0; x < width; x++) {
                        // Turn this pixel into a point in the complex plane
                        var point = pixelToPoint(x, y)

                        // Turn that point into a color
                        var color = pointToColor(point)

                        // Draw over this pixel with that color
                        drawPixel(x, y, color)
                    }
                }
            }

            // Update the elements that need to change
            const update = () => {
                if (header) {
                    header.innerHTML = constant.toString() + " at " + zoom + "X"
                    draw()
                }
            }

            // What to do when the mouse clicks the canvas
            const click = (event: any) => {
                if (canvas) {
                    // Ignore the first click
                    if (!clicked) {
                        clicked = true
                        return
                    }

                    // Get the mouse's XY coordinates on canvas
                    mouseX = event.clientX - canvas.offsetLeft
                    mouseY = event.clientY - canvas.offsetTop

                    // Turn mouse coordinates into a point on the complex plane
                    pan = pixelToPoint(mouseX, mouseY)

                    // Zoom in twice as far
                    zoom *= 2

                    // Update everything!
                    update()
                }
            }

            // What to do when the mouse moves over the canvas
            const move = (event: any) => {
                if (canvas) {
                    // Don't move after first click
                    if (clicked) {
                        return
                    }

                    // Get the mouse's XY coordinates on canvas
                    mouseX = event.clientX - canvas.offsetLeft
                    mouseY = event.clientY - canvas.offsetTop

                    // Turn mouse coordinates into a point on the complex plane
                    constant = pixelToPoint(mouseX, mouseY)

                    // Round that point off to the nearest 0.01
                    constant.re = math.round(constant.re * 100) / 100
                    constant.im = math.round(constant.im * 100) / 100

                    // Update everything!
                    update()
                }
            }

            // Trigger click every time the canvas is clicked
            canvas.addEventListener('click', click)

            // Trigger move every time the mouse moves over canvas
            canvas.addEventListener('pointermove', move)

            // Update everything!
            update()
        }
    }, [])

    return (
        <div>
            <h2>Julia</h2>
            <canvas></canvas>
        </div>
    );
};
