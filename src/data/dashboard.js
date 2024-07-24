// import {
//     scatterDatetimeChild,
//     dataSeries,
//     generateDayWiseTimeSeries,
//     randomizeArray,
//     sparklineData,
// } from '@/data/apexDataSeries'

var happiness = 10
var sadness = 10
var fear = 10
var angry = 10

export const dashboardOne = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ],
    chartOptions: {
        colors: ['rgba(196, 181, 253, 1)', '#8b5cf6'],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
            ],
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands'
                },
            },
        },
    },
}

export const dashboardTwo = {
    series: [happiness, sadness, fear, angry],
    chartOptions: {
        labels: ['Felicidade', 'Tristeza', 'Medo', 'Raiva'],
        chart: {
            width: '100%',
            type: 'pie',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        // width: 200
                    },
                    legend: {
                        position: false,
                    },
                },
            },
        ],
    },
}

export const dashboardThree = {
    series: [happiness, sadness, fear, angry],
    chartOptions: {
        chart: {
            height: 'auto',
            type: 'donut',
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          },
          position: 'left'
        },
        labels: ['Felicidade', 'Tristeza', 'Medo', 'Raiva'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                      position: 'bottom'
                    }
                },
            },
        ],
    },
}

export const splineAreaWidgetTwo = {
    series: [
        {
            name: 'Felicidade',
            data: [31, 42, 38, 54, 42, 109, 100],
        },
        {
            name: 'Tristeza',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Medo',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
        {
            name: 'Raiva',
            data: [100, 50, 90, 10, 74, 52, 41],
        },
    ],
    chartOptions: {
        chart: {
            height: 'auto',
            type: 'area',
            // sparkline: {
            //     enabled: true,
            // },
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: true,
                    customIcons: [],
                },
                export: {
                    csv: {
                        filename: undefined,
                        columnDelimiter: ',',
                        headerCategory: 'category',
                        headerValue: 'value',
                        dateFormatter(timestamp) {
                            return new Date(timestamp).toDateString()
                        },
                    },
                    svg: {
                        filename: undefined,
                    },
                    png: {
                        filename: undefined,
                    },
                },
                autoSelected: 'zoom',
            },
            locales: [
                {
                    name: 'en',
                    options: {
                        months: [
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro',
                        ],
                        shortMonths: [
                            'Jan',
                            'Fev',
                            'Mar',
                            'Abr',
                            'Mai',
                            'Jun',
                            'Jul',
                            'Ago',
                            'Set',
                            'Out',
                            'Nov',
                            'Dez',
                        ],
                        days: [
                            'Domingo',
                            'Segunda',
                            'Terça',
                            'Quarta',
                            'Quinta',
                            'Sexta',
                            'Sábado',
                        ],
                        shortDays: [
                            'Dom',
                            'Seg',
                            'Ter',
                            'Qua',
                            'Qui',
                            'Sex',
                            'Sáb',
                        ],
                        toolbar: {
                            exportToSVG: 'Exportar SVG',
                            exportToPNG: 'Exportar PNG',
                            exportToCSV: 'Exportar CSV',
                            menu: 'Menu',
                            selection: 'Selection',
                            selectionZoom: 'Selection Zoom',
                            zoomIn: 'Zoom In',
                            zoomOut: 'Zoom Out',
                            pan: 'Panning',
                            reset: 'Remover Zoom',
                        },
                    },
                },
            ],
        },
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false,
            position: 'top',
        },
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        xaxis: {
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yyyy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    },
}

export const splineAreaWidgetThree = {
    series: [
        {
            name: 'series2',
            data: [41, 52, 34, 32, 45, 90, 11],
        },
    ],

    chartOptions: {
        chart: {
            width: '100%',
            height: 100,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            show: false,
        },

        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        colors: ['#f59e0b'],
        stroke: {
            curve: 'smooth',
            width: 1,
        },
    },
}
