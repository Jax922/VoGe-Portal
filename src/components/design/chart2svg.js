import * as echarts from 'echarts';

export default function chart2svg(options, width, height) {
    const chart = echarts.init(null, null, {
        renderer: 'svg',
        ssr: true, 
        width,
        height
    });

    options = JSON.parse(options);
    // options.legend = null
    // options.tooltip = null
    // options.toolbox = null
    // options.title = null

    // console.log("options", options);
    
    if (options && options.customOption && options.customOption.theme === 'dark') {
        options.backgroundColor = '#333333';
    }

    chart.setOption(options);
      
    const svgStr = chart.renderToSVGString();
    // const svgStr = chart.getDataURL();

    // console.log(svgStr);

    return svgStr;
}