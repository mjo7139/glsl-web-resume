function showError(errorText) {
    const errorBoxDiv = document.getElementById('error-box');
    const errorTextElement = document.createElement('p');
    errorTextElement.innerText = errorText;
    errorBoxDiv.appendChild(errorTextElement);
    console.log(errorText);
}

function helloTriangle() {
    const canvas = document.getElementById('demo-canvas');
    if(!canvas) {
        showError('Cannot get demo-canvas reference - check for typos or loading script too early in HTML');
        return;
    }
    const gl = canvas.getContext('webgl2');
    if(!gl) {
        showError('This browser does not support webGL 2 - this demo will not work!');
        return;
    }
    gl.clearColor(0.08, 0.08, 0.08, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const circleLoc = [
        0.5, 0.5
    ];
    const circleLocCpuBuffer = new Float32Array(circleLoc);

    const circleGeoBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, circleGeoBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, circleLocCpuBuffer, gl.STATIC_DRAW);

    const vertexShaderSourceCode = '#version 300 es 
    precision mediump Float;
    
    void main() {
        
    }';
}

try {
    helloTriangle();
} catch(e) {
    showError('Uncaught JavaScript exception: ${e}');
}