import { EChartOption } from 'echarts';
// import { Colors } from '../e-commerce/products';

//Echart (line Chart)
export let echartLineBarOption: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer: {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'sales',
		type: 'bar',
		barMaxWidth: 20,
		data: [10, 15, 9, 18, 10, 15]
	},  {
		name: 'growth',
		type: 'bar',
		barMaxWidth: 20,
		data: [10, 14, 10, 15, 9, 25]
	}],
    color: ['#285cf7', '#7987a1' ]
    
}

export let echartLineOption: EChartOption = {

    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(119, 119, 142, 0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'sales',
		type: 'bar',
		barMaxWidth: 20,
		data: [10, 15, 9, 18, 10, 15]
	},  {
		name: 'growth',
		type: 'bar',
		barMaxWidth: 20,
		data: [10, 14, 10, 15, 9, 25]
	}],
    color: ['#285cf7', '#7987a1']
}

export let echartVerticalLineBarChart: EChartOption = {
    
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'sales',
		type: 'line',
		smooth: true,
		data: [10, 15, 9, 18, 10, 15],
	}, {
		name: 'Profit',
		type: 'line',
		smooth: true,
		data: [10, 14, 10, 15, 9, 25]
	}],
    color: ['#285cf7', '#7987a1' ]
}

export let echartVerticalLineChart: EChartOption = {
    
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series:  [{
		name: 'sales',
		type: 'line',
		smooth: true,
		data: [10, 15, 9, 18, 10, 15]
        }, {
            name: 'Profit',
            type: 'line',
            smooth: true,
            data: [10, 14, 10, 15, 9, 25]
        }],
    color: ['#7987a1', '#285cf7', '#43d7ef']

}

export let echartBarChart: EChartOption = {
    
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'sales',
		type: 'bar',
		barMaxWidth: 20,
		stack: 'Stack',
		data: [10, 15, 9, 18, 10, 15]
	}, {
		name: 'Profit',
		type: 'bar',
		stack: 'Stack',
		barMaxWidth: 20,
		data: [10, 14, 10, 15, 9, 25]
	}],
    color: ['#7987a1', '#285cf7']
}

export let echartHorizontalbarChart: EChartOption = {
    grid: {
        top: '6',
        right: '10',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'sales',
		type: 'bar',
		barMaxWidth: 20,
		stack: 'Stack',
		data: [10, 15, 9, 18, 10, 15]
	}, {
		name: 'Profit',
		type: 'bar',
		stack: 'Stack',
		barMaxWidth: 20,
		data: [10, 14, 10, 15, 9, 25]
	}],
    color: ['#7987a1', '#285cf7']
}

export let echartSingleLineChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series: [{
		name: 'data',
		type: 'line',
		data: [5, 15, 9, 18, 10, 15]
	    }],
    color: ['#7987a1']
}

export let echartSingleSmoothLineChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    tooltip: {
        trigger: 'axis',
        position: ['35%', '32%'],
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(171, 167, 167,0.2)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#5f6d7a'
        }
    },
    series:  [{
		name: 'data',
		type: 'line',
		smooth: true,
		data: [5, 15, 9, 18, 10, 15]
	    }],
    color: ['#285cf7']
}
