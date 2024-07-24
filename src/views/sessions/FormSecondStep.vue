<template>
    <p class="text-5xl font-bold mb-9 text-center">Ouve</p>
    <div class="shadow-lg p-10 rounded">
        <div>
            <label class="font-bold text-xl" for="fileUploader"
                >Upload de arquivo</label
            >
            <Upload label="Apenas .csv" class="mt-5"></Upload>
            <input
                type="file"
                name="fileUploader"
                id="fileUploader"
                class="hidden"
                ref="fileUploader"
                @change="uploadFile"
            />
        </div>
        <div>
            <label class="font-bold text-xl" for="bio"
                >Entre os termos de busca do twitter</label
            >
            <br />
            <BaseSelect
                @changeSelect="updateTag"
                @tagRemoved="removeTag"
                class="mt-4 mb-4"
            ></BaseSelect>
        </div>
        <div>
            <label class="font-bold text-xl" for="bio"
                >Entre tópicos relevantes para a análise</label
            >
            <br />
            <BaseSelect
                @changeSelect="updateTopic"
                @tagRemoved="removeTopic"
                class="mt-4 mb-4"
            ></BaseSelect>
            <p class="mt-2 text-sm text-gray-400 hover:text-gray-600">
                Comece digitando o tópico com
                <span class="font-bold">#</span> ou
                <span class="font-bold">@</span>
            </p>
        </div>
    </div>
</template>
<script>
import Upload from './Upload.vue'
import _ from 'lodash'
export default {
    name: 'FormSecondStep',
    components: { Upload },
    props: {},
    data() {
        return {
            formValue: {
                csv: '',
                tag: [],
                topic: [],
            },
            topic: '',
            tag: '',
        }
    },
    emits: ['formValueChange'],
    methods: {
        uploadFile(e) {
            const file = e.target.files[0]
            if (!file) {
                return
            }
            const fileReader = new FileReader()
            fileReader.onload = () => {
                this.$emit('formValueChange', {
                    label: 'formSecondStep',
                    data: {
                        ...this.formValue,
                    },
                })
            }
            fileReader.readAsDataURL(file)
        },
        updateTag: _.debounce(function (payload) {
            console.log('updateTag', payload)
            this.formValue.tag.push(payload.data)
            console.log('formValueTag', this.formValue.tag)
            this.$emit('formValueChange', {
                label: 'formSecondStep',
                data: {
                    ...this.formValue,
                },
            })
        }, 1000),
        updateTopic(payload) {
            console.log('updateTopic', payload)
            this.formValue.topic.push(payload.data)
            console.log('formValueTopic', this.formValue.topic)
            this.$emit('formValueChange', {
                label: 'formSecondStep',
                data: {
                    ...this.formValue,
                },
            })
        },
        removeTag(index) {
            console.log('removeTag', index)
            this.formValue.tag.splice(index, 1)
            console.log('formValueTag', this.formValue.tag)
            this.$emit('formValueChange', {
                label: 'formSecondStep',
                data: {
                    ...this.formValue,
                },
            })
        },
        removeTopic(index) {
            console.log('removeTopic', index)
            this.formValue.topic.splice(index, 1)
            console.log('formValueTopic', this.formValue.topic)
            this.$emit('formValueChange', {
                label: 'formSecondStep',
                data: {
                    ...this.formValue,
                },
            })
        },
    },
}
</script>
<style scoped>
.tags-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.tags-input input {
    flex: 1;
    background: transparent;
    border: none;
}

.tags-input input:focus {
    outline: none;
}

.tags-input input[type='text'] {
    color: #495057;
}

.tags-input-wrapper-default {
    padding: 0.5em 0.25em;

    background: #fff;

    border: 1px solid transparent;
    border-radius: 0.25em;
    border-color: #dbdbdb;
}

.tags-input-wrapper-default.active {
    border: 1px solid #8bbafe;
    box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);
    outline: 0 none;
}

/* The tag badges & the remove icon */
.tags-input span {
    margin-right: 0.3em;
}

.tags-input-remove {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    right: 0.3em;
    top: 0.3em;
    padding: 0.5em;
    overflow: hidden;
}

.tags-input-remove:focus {
    outline: none;
}

.tags-input-remove:before,
.tags-input-remove:after {
    content: '';
    position: absolute;
    width: 75%;
    left: 0.15em;
    background: #5dc282;

    height: 2px;
    margin-top: -1px;
}

.tags-input-remove:before {
    transform: rotate(45deg);
}
.tags-input-remove:after {
    transform: rotate(-45deg);
}

/* Tag badge styles */
.tags-input-badge {
    position: relative;
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tags-input-badge-pill {
    padding-right: 1.25em;
    padding-left: 0.6em;
    border-radius: 10em;
}
.tags-input-badge-pill.disabled {
    padding-right: 0.6em;
}

.tags-input-badge-selected-default {
    color: #212529;
    background-color: #f0f1f2;
}

/* Typeahead */
.typeahead-hide-btn {
    color: #999 !important;
    font-style: italic;
}

/* Typeahead - badges */
.typeahead-badges > span {
    margin-top: 0.5em;
}

.typeahead-badges > span {
    cursor: pointer;
    margin-right: 0.3em;
}

/* Typeahead - dropdown */
.typeahead-dropdown {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
}

.typeahead-dropdown li {
    padding: 0.25em 1em;
    cursor: pointer;
}

/* Typeahead elements style/theme */
.tags-input-typeahead-item-default {
    color: #fff;
    background-color: #343a40;
}

.tags-input-typeahead-item-highlighted-default {
    color: #fff;
    background-color: #007bff !important;
}
</style>
