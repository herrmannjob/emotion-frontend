<template>
    <div class="w-1/2 m-auto mt-10">
        <div v-if="!submitted">
            <component
                v-bind:is="steps[currentStep].component"
                v-bind:formValue="formValue[steps[currentStep].label]"
                @formValueChange="updateFormValue"
            />
            <div class="flex items-center justify-center">
                <button
                    v-if="currentStep !== 0"
                    v-on:click="previous"
                    class="p-5 text-5xl mt-4"
                >
                    <font-awesome-icon icon="arrow-left" />
                </button>
                <button
                    v-if="currentStep < steps.length - 1"
                    v-on:click="next"
                    class="p-5 text-5xl mt-4"
                >
                    <font-awesome-icon icon="arrow-right" />
                </button>
                <BaseBtn
                    v-else
                    xl
                    class="bg-primary text-white p-5 rounded mt-4"
                    v-on:click="submit"
                >
                    Enviar
                </BaseBtn>
            </div>
        </div>
        <div v-else class="text-5xl font-bold text-center shadow-lg p-10">
            <span
                ><span class="text-primary"
                    >Agradecemos o envio do formulário.</span
                >
                <br /><br />
                Estamos preparando sua dashboard.</span
            >
        </div>
    </div>
</template>

<script>
import FormFirstStep from './FormFirstStep.vue'
import FormSecondStep from './FormSecondStep.vue'
export default {
    name: 'MultiSteps',
    data() {
        return {
            currentStep: 0,
            submitted: false,
            formValue: {
                formFirstStep: {
                    textType: '',
                    textAnalysisDescription: '',
                    textMonitor: '',
                    textQuantity: '',
                },
                formSecondStep: {
                    csv: '',
                    tag: [],
                    topic: [],
                },
            },
            steps: [
                {
                    component: FormFirstStep,
                    label: 'formFirstStep',
                },
                {
                    component: FormSecondStep,
                    label: 'formSecondStep',
                },
            ],
        }
    },
    methods: {
        next() {
            this.currentStep += 1
        },
        previous() {
            this.currentStep -= 1
        },
        updateFormValue(payload) {
            console.log('payload', payload)
            this.formValue = {
                ...this.formValue,
                [payload.label]: payload.data,
            }
        },
        submit() {
            this.submitted = true
            console.log(this.formValue)
            localStorage.formValue = JSON.stringify(this.formValue)

            // app.provide('formDashboard', 'this.formValue')
            this.$router.push('/dashboard')
        },
    },
    components: [FormFirstStep, FormSecondStep],
}
</script>
