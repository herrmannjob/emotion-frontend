<template>
    <p class="text-5xl font-bold mb-9 text-center">Ouve</p>
    <div class="shadow-lg p-10 rounded">
        <div>
            <label class="font-bold text-xl" for="textType"
                >Que tipo de texto voce deseja analisar?
                <span class="text-lg text-gray-400 font-bold mb-9 text-center">
                    (Isso vai ajudar a customizar sua experiência)
                </span></label
            >
            <br />
            <select
                class="mt-4 mb-8 form-select block w-full px-3 py-1.5 text-base font-normal text-purple-300 bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-purple-300 rounded transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
                v-model="selectedTextType"
                v-on:change="onChangeTextType(selectedTextType)"
            >
                <option disabled value="">Selecione o tipo de dado</option>
                <option
                    v-for="item in textType"
                    v-bind:value="item"
                    v-bind:key="item"
                >
                    {{ item.name }}
                </option>
            </select>
        </div>
        <div>
            <label class="font-bold text-xl" for="dob"
                >Com que frequência você deseja monitorar os textos?</label
            >
            <br />
            <template v-for="(monitor, index) in textMonitor" :key="index">
                <BaseBtn
                    xl
                    class="text-white bg-purple-300 hover:bg-primary mr-4 mt-4 mb-8"
                    :class="activeMonitor === index ? 'branco bg-primary' : ''"
                    @click="onChangeMonitor(index, monitor)"
                >
                    <span>{{ monitor.name }}</span>
                </BaseBtn>
            </template>
        </div>
        <div>
            <label class="font-bold text-xl" for="age"
                >Qual a quantidade de texto que você deseja analisar?</label
            >
            <br />
            <template v-for="(quantity, index) in textQuantity" :key="index">
                <BaseBtn
                    xl
                    class="text-white bg-purple-300 hover:bg-primary mr-4 mt-4 mb-8"
                    :class="activeQuantity === index ? 'branco bg-primary' : ''"
                    @click="onChangeQuantity(index, quantity)"
                >
                    <span>{{ quantity.name }}</span>
                </BaseBtn>
            </template>
        </div>
        <div>
            <label class="font-bold text-xl" for="email"
                >Por favor descreva o que você busca na análise?</label
            >
            <br />
            <textarea
                name="address"
                id="address"
                class="w-full text-xl p-2 border-2 rounded border-purple-300 hover:border-primary focus:border-primary mt-4 mb-4"
                v-model="formValue.textAnalysisDescription"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormFirstStep',
    props: {},
    data() {
        return {
            formValue: {
                textType: '',
                textAnalysisDescription: '',
                textMonitor: '',
                textQuantity: '',
            },
            textMonitor: [{ name: 'Uma vez' }, { name: 'Continuamente' }],
            textQuantity: [
                { name: '<100' },
                { name: '100-1K' },
                { name: '1K-10K' },
                { name: '>10K' },
            ],
            textType: [
                { name: 'CSAT' },
                { name: 'E-mail' },
                { name: 'Midias sociais' },
                { name: 'Notas' },
                { name: 'NPS' },
                { name: 'Páginas da Web' },
                { name: 'Pesquisas' },
                { name: 'Tickets de suporte' },
                { name: 'Reviews' },
            ],
            activeMonitor: 0,
            activeQuantity: 0,
            selectedTextType: {},
        }
    },
    emits: ['formValueChange'],
    methods: {
        onChangeTextType(value) {
            console.log(value.name)
            this.formValue.textType = value.name
            this.$emit('formValueChange', {
                label: 'formFirstStep',
                data: {
                    ...this.formValue,
                },
            })
        },
        onChangeTextAnalysisDescription(value) {
            console.log(value)
            this.formValue.textAnalysisDescription = value
            this.$emit('formValueChange', {
                label: 'formFirstStep',
                data: {
                    ...this.formValue,
                },
            })
        },
        onChangeMonitor(index, value) {
            console.log(value.name)
            this.activeMonitor = index
            this.formValue.textMonitor = value.name
            this.$emit('formValueChange', {
                label: 'formFirstStep',
                data: {
                    ...this.formValue,
                },
            })
        },
        onChangeQuantity(index, value) {
            console.log(value.name)
            this.activeQuantity = index
            this.formValue.textQuantity = value.name
            this.$emit('formValueChange', {
                label: 'formFirstStep',
                data: {
                    ...this.formValue,
                },
            })
        },
    },
}
</script>
