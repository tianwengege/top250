window.addEventListener('load',function () {
    let main = document.querySelectorAll('.content');
    let top = echarts.init(main[0]);
    let option = {
        backgroundColor: '#2c343c',
        series: [
            {
                name: '电影类型',
                type: 'pie',
                data: [

                ]
            }
        ]
    };

    let arr=[];
    for (let i=0;i<categories.length;i++){
            if (i==0){continue};
            let name=categories[i];
            let value=data.filter(ele=>ele[4].includes(name)).length;
            arr.push({name,value})
    }
            option.series[0].data=arr;
            top.setOption(option);




});





