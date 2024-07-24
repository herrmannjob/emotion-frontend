<template>
    <div :style="styles">
        <canvas :id="canvasId" :width="canvasWidth" :height="canvasHeight">
            <ul>
                <li v-for="(item, index) in data" :key="index">
                    <a
                        @click.prevent="handleClick(item)"
                        :title="item.title"
                        :style="{ color: item.color, ...item.style }"
                        :class="item.className"
                    >
                        <slot :item="item">
                            <img
                                v-if="item.image"
                                :src="item.image"
                                :alt="item.text"
                            />
                            <span v-else>{{ item.text }}</span>
                        </slot>
                    </a>
                </li>
            </ul>
        </canvas>
    </div>
</template>
<script>
import TagCanvas from '../../plugins/tagcanvas'
/**
 * @module $ui/components/my-tag-canvas
 */
const teste = [
    { text: 'react', color: 'yellow' },
    { text: 'angular', color: '#C6C6C6' },
    { text: 'sample', color: 'red' },
    { text: 'danilogentili', color: 'blue' },
    { text: 'vue', color: '#C6C6C6' },
    { text: 'Xiaomi', color: 'orange' },
    { text: 'iPhone', color: 'pink' },
    { text: 'Samsung', color: 'green' },
    { text: 'LG', color: 'orange' },
    { text: 'Apple', color: 'lightblue' },
]
export default {
    name: 'MyTagCanvas',
    /**
     * @member props
     * @property {Array} data {text, color, image, style, className, title}
     * @property {string} data.text
     * @property {string} data.color
     * @property {string} data.image
     * @property {string} [width=100%]
     * @property {string} [height=100%]
     * @property {object} [options] TagCanvas http://www.goat1000.com/tagcanvas-options.php
     */
    props: {
        data: {
            type: Array,
            default() {
                return teste
            },
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
        options: {
            type: Object,
        },
    },
    data() {
        return {
            canvasWidth: null,
            canvasHeight: null,
        }
    },
    watch: {
        data() {
            this.$nextTick(() => {
                this.reload()
            })
        },
        options: {
            handler() {
                this.update()
            },
        },
    },
    computed: {
        canvasId() {
            return `tag-canvas-${this._uid}`
        },
        styles() {
            return {
                width: this.width,
                height: this.height,
            }
        },
    },
    methods: {
        handleClick(item) {
            /**
             * @event click
             * @param {Object} item
             */
            this.$emit('click', item)
        },
        setCanvasSize() {
            const rect = this.$el.getBoundingClientRect()
            this.canvasWidth = rect.width
            this.canvasHeight = rect.height
        },
        start() {
            TagCanvas.Start(this.canvasId, null, this.options)
        },
        pause() {
            TagCanvas.Pause(this.canvasId)
        },
        resume() {
            TagCanvas.Resume(this.canvasId)
        },
        reload() {
            TagCanvas.Reload(this.canvasId)
        },
        update() {
            TagCanvas.Update(this.canvasId)
        },
        tagToFront(options) {
            TagCanvas.TagToFront(this.canvasId, options)
        },
        rotateTag(options) {
            TagCanvas.RotateTag(this.canvasId, options)
        },
        setSpeed(speed) {
            TagCanvas.SetSpeed(this.canvasId, speed)
        },
    },
    mounted() {
        this.proxySetCanvasSize = this.setCanvasSize.bind(this)
        this.setCanvasSize()
        this.start()
    },
}
</script>
