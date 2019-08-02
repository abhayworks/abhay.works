 //donut

 var options = {
            chart: {
                type: 'donut',
                fontFamily: "supply",
                
            },
               
            series: [68, 18, 14],
            labels: ['Smartphones', 'No Phone', 'Basic Phone'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

       var chart = new ApexCharts(
            document.querySelector("#donut"),
            options
        );
        
        chart.render();


    //donut2

    var options = {
            chart: {
                type: 'donut',
                fontFamily: "supply",
                
            },
               
            series: [84, 61],
            labels: ['Desktop or Laptop', 'Tablet'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

       var chart = new ApexCharts(
            document.querySelector("#donut2"),
            options
        );
        
        chart.render();

        //donut3

    var options = {
            chart: {
                type: 'donut',
                fontFamily: "supply",
            },
               
            series: [51, 19, 7, 3],
            labels: ['Facebook', 'Instagram', 'Snapchat', 'Twitter'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

       var chart = new ApexCharts(
            document.querySelector("#donut3"),
            options
        );
        
        chart.render();

    //donut4

    var options = {
            chart: {
                type: 'donut',
                fontFamily: "supply",
                
            },
               
            series: [25, 29],
            labels: ['Adult Influence', 'Peer Influence'],

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

       var chart = new ApexCharts(
            document.querySelector("#donut4"),
            options
        );
        
        chart.render();
