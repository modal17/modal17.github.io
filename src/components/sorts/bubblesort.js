import React, { Component } from 'react'
import { randomFill } from '../../utils/random'
import * as THREE from 'three'

class BubbleSort extends Component {
    constructor(props) {
        super(props)
    
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }
    
    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            15,
            width / height,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.PlaneGeometry(1, 1)

        let data = randomFill( width, height )
        let texture = new THREE.DataTexture( data, width, height, THREE.RGBFormat )
        texture.needsUpdate = true
        
        const material = new THREE.MeshBasicMaterial({ map: texture })
        //const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
        const cube = new THREE.Mesh(geometry, material)

        camera.position.z = 4
        scene.add(cube)
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {
        //this.cube.rotation.x += 0.01
        //this.cube.rotation.y += 0.01

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
    return (
        <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
        />
        )
    }
}

export default BubbleSort
