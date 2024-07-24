<script setup>
import {
    dashboardOne,
    dashboardTwo,
    splineAreaWidgetTwo,
    splineAreaWidgetThree,
    dashboardThree,
} from '@/data/dashboard.js'
</script>

<script>
import ApiService from '@/services/request'
import MyTagCanvas from '../components/TagCanvas.vue'
import HeaderSearch from '../../components/HeaderSearch.vue'
export default {
    components: [MyTagCanvas, HeaderSearch],
    data() {
        return {
            checkFilter: false,
            activeTab: 4,
            activeButton: 1,
            activeContentFilterButton: 0,
            tabs: [
                {
                    name: 'Calendário',
                    textColor: 'text-primary',
                    icon: '',
                    iconColor: '',
                },
                {
                    name: 'Sentimentos',
                    textColor: 'text-primary',
                    icon: 'meh',
                    iconColor: 'text-warning',
                },
                {
                    name: 'Emoções',
                    textColor: 'text-primary',
                    icon: 'heart',
                    iconColor: 'text-danger',
                },
                {
                    name: 'Mais Filtros',
                    textColor: 'text-primary',
                    icon: 'filter',
                    iconColor: 'text-light',
                },
                {
                    name: 'Filtros',
                    textColor: 'text-primary',
                    icon: 'times',
                    iconColor: '',
                },
            ],
            shareAndExportButton: [
                { name: 'Exportar CSV', icon: 'link' },
                {
                    name: 'Compartilhar',
                    icon: 'share',
                },
            ],
            contentFilterButton: [
                { name: 'Mais populares', icon: 'users' },
                {
                    name: 'Mais seguidos',
                    icon: 'thumbs-up',
                },
                {
                    name: 'Mais novos',
                    icon: 'bell',
                },
            ],
            demoByTopic: [
                {
                    name: 'iPhone',
                    demo: '80',
                    demoStyle: 'width: 80%',
                    demoClass: 'bg-yellow-500',
                },
                {
                    name: 'Samsung',
                    demo: '90',
                    demoStyle: 'width: 90%',
                    demoClass: 'bg-yellow-500',
                },
                {
                    name: 'Xiaomi',
                    demo: '50',
                    demoStyle: 'width: 50%',
                    demoClass: 'bg-yellow-500',
                },
                {
                    name: 'LG',
                    demo: '40',
                    demoStyle: 'width: 40%',
                    demoClass: 'bg-yellow-500',
                },
            ],
            feelingsByTopic: [
                {
                    name: 'iPhone',
                    happiness: '80',
                    happinessStyle: 'width: 80%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '10',
                    sadnessStyle: 'width: 10%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '10',
                    fearStyle: 'width: 10%',
                    fearClass: 'bg-purple-500',
                    angry: '10',
                    angryStyle: 'width: 10%',
                    angryClass: 'bg-red-500',
                },
                {
                    name: 'Samsung',
                    happiness: '10',
                    happinessStyle: 'width: 10%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '30',
                    sadnessStyle: 'width: 30%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '20',
                    fearStyle: 'width: 20%',
                    fearClass: 'bg-purple-500',
                    angry: '40',
                    angryStyle: 'width: 40%',
                    angryClass: 'bg-red-500',
                },
                {
                    name: 'Xiaomi',
                    happiness: '10',
                    happinessStyle: 'width: 10%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '30',
                    sadnessStyle: 'width: 30%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '20',
                    fearStyle: 'width: 20%',
                    fearClass: 'bg-purple-500',
                    angry: '40',
                    angryStyle: 'width: 40%',
                    angryClass: 'bg-red-500',
                },
                {
                    name: 'LG',
                    happiness: '0',
                    happinessStyle: 'width: 0%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '30',
                    sadnessStyle: 'width: 30%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '20',
                    fearStyle: 'width: 20%',
                    fearClass: 'bg-purple-500',
                    angry: '40',
                    angryStyle: 'width: 40%',
                    angryClass: 'bg-red-500',
                },
            ],
            emotionsByTopic: [
                {
                    name: 'iPhone',
                    happiness: '80',
                    happinessStyle: 'width: 80%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '10',
                    sadnessStyle: 'width: 10%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '10',
                    fearStyle: 'width: 10%',
                    fearClass: 'bg-purple-500',
                    angry: '10',
                    angryStyle: 'width: 10%',
                    angryClass: 'bg-red-500',
                },
                {
                    name: 'Samsung',
                    happiness: '10',
                    happinessStyle: 'width: 10%',
                    happinessClass: 'bg-yellow-500',
                    sadness: '30',
                    sadnessStyle: 'width: 30%',
                    sadnessClass: 'bg-indigo-500',
                    fear: '20',
                    fearStyle: 'width: 20%',
                    fearClass: 'bg-purple-500',
                    angry: '40',
                    angryStyle: 'width: 40%',
                    angryClass: 'bg-red-500',
                },
            ],
        }
    },
    async mounted() {
        if (localStorage.formValue) {
            this.checkTagStorage()
            this.checkTopicStorage()
        }
    },
    methods: {
        checkTagStorage() {
            let payload = JSON.parse(localStorage.formValue)
            if (
                payload.formSecondStep &&
                payload.formSecondStep.tag.length > 0
            ) {
                this.postResults(payload.formSecondStep.tag)
            }
        },
        checkTopicStorage() {
            let payload = JSON.parse(localStorage.formValue)
            if (
                payload.formSecondStep &&
                payload.formSecondStep.topic.length > 0
            ) {
                this.postResults(payload.formSecondStep.topic)
            }
        },
        postResults(result) {
            result.forEach(async (item, i) => {
                if (item.startsWith('@')) {
                    item = item.replace('@', '')
                    await this.getPerson(item)
                }
                if (item.startsWith('#')) {
                    item = item.replace('#', '')
                    await this.getWord(item)
                }
            })
        },
        onChangeFilter() {
            console.log(this.checkFilter)
            this.checkFilter != this.checkFilter
            return this.checkFilter
        },
        async getWord(item) {
            let body = {
                query: item,
            }
            const resp = await ApiService.queryWord(item)

            console.log(resp)
            return resp
        },
        async getPerson(item) {
            let body = {
                query: item,
            }
            const resp = await ApiService.queryPerson(body)

            console.log(resp)
            return resp
        },
    },
}
</script>

<template>
    <div class="container mx-auto">
        <div class="mb-3 lg:flex lg:items-center lg:justify-between">
            <div class="pl-1 flex min-w-0">
                <h6>Jan 12 - Nov 30</h6>
            </div>
            <div class="flex min-w-0">
                <div
                    class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-2"
                >
                    <template v-for="(tab, index) in tabs" :key="index">
                        <BaseBtn
                            class="text-primary border border-white hover:border-primary"
                            :class="
                                activeTab === index ? 'branco bg-primary' : ''
                            "
                            @click="activeTab = index"
                            ><font-awesome-icon
                                :class="tab.iconColor"
                                :icon="tab.icon"
                                class="mr-1"
                            />
                            <span>{{ tab.name }}</span>
                        </BaseBtn>
                    </template>
                </div>
            </div>
            <div class="mt-1 flex lg:mt-0 lg:ml-4">
                <template
                    v-for="(button, index) in shareAndExportButton"
                    :key="index"
                >
                    <BaseBtn
                        class="text-primary border border-white hover:border-primary"
                        :class="
                            activeButton === index ? 'branco bg-primary' : ''
                        "
                        @click="activeButton = index"
                        ><font-awesome-icon
                            :class="button.color"
                            :icon="button.icon"
                            class="mr-1"
                        />
                        {{ button.name }}
                    </BaseBtn>
                </template>
            </div>
        </div>
        <div class="flex flex-wrap -mx-2 overflow-hidden">
            <div class="my-2 px-2 w-1/5 overflow-hidden pb-1">
                <BaseCard>
                    <div class="flex items-center">
                        <i class="i-Happy text-4xl text-yellow-200"></i>
                        <div class="m-auto text-center">
                            <p class="text-sm text-gray-400">
                                Emoção predominante
                            </p>
                            <p class="text-sm font-bold text-yellow-400">
                                {{ emotion }}
                            </p>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <div class="my-2 px-2 w-1/5 overflow-hidden pb-1">
                <BaseCard>
                    <div class="flex items-center">
                        <i class="i-Information text-4xl text-green-200"></i>
                        <div class="m-auto">
                            <p class="text-sm text-gray-400">
                                Total de Amostras
                            </p>
                            <p
                                class="text-sm text-green-400 font-bold text-center"
                            >
                                {{ totalSamples }}
                            </p>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <div class="my-2 px-2 w-1/5 overflow-hidden pb-1">
                <BaseCard>
                    <div class="flex items-center">
                        <i
                            class="i-Monitor-Analytics text-4xl text-red-200"
                        ></i>
                        <div class="m-auto">
                            <p class="text-sm text-gray-400">
                                Alcance estimado
                            </p>
                            <p
                                class="text-sm text-red-400 font-bold text-center"
                            >
                                {{ estimatedRange }}
                            </p>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <div class="my-2 px-2 w-1/5 overflow-hidden pb-1">
                <BaseCard>
                    <div class="flex items-center">
                        <i class="i-Like text-4xl text-blue-200"></i>
                        <div class="m-auto">
                            <p class="text-sm text-gray-400">Curtidas</p>
                            <p
                                class="text-sm text-blue-400 font-bold text-center"
                            >
                                {{ likes }}
                            </p>
                        </div>
                    </div>
                </BaseCard>
            </div>

            <div class="my-2 px-2 w-1/5 overflow-hidden pb-1">
                <BaseCard>
                    <div class="flex items-center">
                        <i class="i-Font-Window text-4xl text-purple-200"></i>
                        <div class="m-auto">
                            <p class="text-sm text-gray-400">Comentários</p>
                            <p
                                class="text-sm text-purple-400 font-bold text-center"
                            >
                                {{ comments }}
                            </p>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
        <div class="mt-3 grid grid-cols-2 gap-3">
            <div>
                <BaseCard style="max-height: 700px; overflow: auto">
                    <HeaderSearch />
                    <div class="flex justify-center">
                        <template
                            v-for="(button, index) in contentFilterButton"
                            :key="index"
                        >
                            <BaseBtn
                                class="text-primary border border-white hover:border-primary mt-3 mb-3"
                                :class="
                                    activeContentFilterButton === index
                                        ? 'branco bg-primary'
                                        : ''
                                "
                                @click="activeContentFilterButton = index"
                                ><font-awesome-icon
                                    :class="button.color"
                                    :icon="button.icon"
                                    class="mr-1"
                                />
                                {{ button.name }}
                            </BaseBtn>
                        </template>
                    </div>
                    <table class="table text-gray-400 text-sm">
                        <thead class="text-gray-500">
                            <tr>
                                <th class="p-3">Conteúdo</th>
                                <th class="p-3 text-left">Tópico</th>
                                <th class="p-3 text-left">Sentimento</th>
                                <th class="p-3 text-left">Emoção</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tweet in tweets" v-bind:key="tweet">
                                <td class="p-3">
                                    <div class="flex align-items-center">
                                        <div class="ml-3">
                                            <div class="">
                                                {{ tweet.sentence }}
                                            </div>
                                            <div class="text-gray-500">
                                                {{ tweet.user }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3 font-bold">
                                    <span
                                        class="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-xs"
                                        >{{ tweet.topic }}</span
                                    >
                                </td>
                                <td class="p-3 font-bold">
                                    <span
                                        class="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-xs"
                                        >{{ tweet.feeling }}</span
                                    >
                                </td>
                                <td class="p-3">
                                    <div class="flex items-center">
                                        <font-awesome-icon
                                            icon="smile"
                                            class="text-warning"
                                            size="2x"
                                        ></font-awesome-icon>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table
                ></BaseCard>
            </div>

            <div
                class="grid overflow-hidden grid-cols-2 px-1 auto-rows-auto gap-3"
            >
                <BaseCard style="max-height: 200px; overflow: auto">
                    <h4 class="card-title mb-4">Amostras por tópico:</h4>
                    <template v-for="(demo, index) in demoByTopic" :key="index">
                        <div class="flex flex-wrap -mx-2 overflow-hidden">
                            <div class="px-2 w-1/2 overflow-hidden">
                                <span class="mr-2">{{ demo.name }}</span>
                            </div>

                            <div class="pr-2 w-1/2 overflow-hidden">
                                <div
                                    class="overflow-hidden h-4 text-xs flex rounded bg-gray-200"
                                >
                                    <div
                                        v-if="demo.name && demo.name != ''"
                                        :style="demo.demoStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="demo.demoClass"
                                    >
                                        {{ demo.demo }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </BaseCard>
                <BaseCard style="max-height: 200px; overflow: auto">
                    <h4 class="card-title mb-4">Sentimento por tópico:</h4>
                    <template
                        v-for="(feeling, index) in feelingsByTopic"
                        :key="index"
                    >
                        <div class="flex flex-wrap -mx-2 overflow-hidden">
                            <div class="px-2 w-1/2 overflow-hidden">
                                <span class="mr-2">{{ feeling.name }}</span>
                            </div>

                            <div class="pr-2 w-1/2 overflow-hidden">
                                <div
                                    class="overflow-hidden h-4 text-xs flex rounded bg-gray-200"
                                >
                                    <div
                                        v-if="
                                            feeling.happiness &&
                                            feeling.happiness != ''
                                        "
                                        :style="feeling.happinessStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="feeling.happinessClass"
                                    >
                                        {{ feeling.happiness }}
                                    </div>
                                    <div
                                        v-if="
                                            feeling.sadness &&
                                            feeling.sadness != ''
                                        "
                                        :style="feeling.sadnessStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="feeling.sadnessClass"
                                    >
                                        {{ feeling.sadness }}
                                    </div>
                                    <div
                                        v-if="
                                            feeling.fear && feeling.fear != ''
                                        "
                                        :style="feeling.fearStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="feeling.fearClass"
                                    >
                                        {{ feeling.fear }}
                                    </div>
                                    <div
                                        v-if="
                                            feeling.angry && feeling.angry != ''
                                        "
                                        :style="feeling.angryStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="feeling.angryClass"
                                    >
                                        {{ feeling.angry }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </BaseCard>
                <BaseCard style="max-height: 200px; overflow: auto">
                    <h4 class="card-title mb-4">Emoções por tópico:</h4>
                    <template
                        v-for="(emotion, index) in emotionsByTopic"
                        :key="index"
                    >
                        <div class="flex flex-wrap -mx-2 overflow-hidden">
                            <div class="px-2 w-1/2 overflow-hidden">
                                <span class="mr-2">{{ emotion.name }}</span>
                            </div>

                            <div class="pr-2 w-1/2 overflow-hidden">
                                <div
                                    class="overflow-hidden h-4 text-xs flex rounded bg-gray-200"
                                >
                                    <div
                                        v-if="
                                            emotion.happiness &&
                                            emotion.happiness != ''
                                        "
                                        :style="emotion.happinessStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="emotion.happinessClass"
                                    >
                                        {{ emotion.happiness }}
                                    </div>
                                    <div
                                        v-if="
                                            emotion.sadness &&
                                            emotion.sadness != ''
                                        "
                                        :style="emotion.sadnessStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="emotion.sadnessClass"
                                    >
                                        {{ emotion.sadness }}
                                    </div>
                                    <div
                                        v-if="
                                            emotion.fear && emotion.fear != ''
                                        "
                                        :style="emotion.fearStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="emotion.fearClass"
                                    >
                                        {{ emotion.fear }}
                                    </div>
                                    <div
                                        v-if="
                                            emotion.angry && emotion.angry != ''
                                        "
                                        :style="emotion.angryStyle"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                                        :class="emotion.angryClass"
                                    >
                                        {{ emotion.angry }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </BaseCard>
                <div>
                    <BaseCard noPadding>
                        <h4 style="padding: 1.25rem" class="pb-0 card-title">
                            Nuvem de palavras:
                        </h4>
                        <MyTagCanvas></MyTagCanvas>
                    </BaseCard>
                </div>

                <BaseCard class="col-span-2" noPadding>
                    <h4 style="padding: 1.25rem" class="pb-0 card-title">
                        Sentimento ao longo do tempo:
                    </h4>
                    <apexchart
                        height="150"
                        :options="dashboardThree.chartOptions"
                        :series="dashboardThree.series"
                    ></apexchart>
                    <apexchart
                        type="area"
                        height="250"
                        :options="splineAreaWidgetTwo.chartOptions"
                        :series="splineAreaWidgetTwo.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
.branco {
    color: white !important;
}
</style>
