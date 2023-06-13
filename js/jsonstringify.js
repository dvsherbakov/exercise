 const gradients= [
    {
      name: 'grTube',
      gradient: '<linearGradient id="grTube" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#8f8f92" /><stop offset="40%" stop-color="#010101" stop-opacity="0" /><stop offset="70%" stop-color="#585151" stop-opacity="0" /><stop offset="100%" stop-color="#515151" /></linearGradient>'
    },
    {
      name: 'YellowGradient',
      gradient: '<linearGradient id="YellowGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f7d067" /><stop offset="30%" stop-color="#f8f4c1" stop-opacity="0.8" /><stop offset="50%" stop-color="#f7d067" stop-opacity="1" /><stop offset="70%" stop-color="#f8f4c1" stop-opacity=".8" /><stop offset="100%" stop-color="#f7d067" /></linearGradient>'
    },
    {
      name: 'BlueGradient',
      gradient: '<linearGradient id="BlueGradient" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#5d7fee" /><stop offset="35%" stop-color="#86bdce" /><stop offset="50%" stop-color="#e6f4f8" /><stop offset="65%" stop-color="#e6f4f8" /><stop offset="100%" stop-color="#5d7fee" /></linearGradient>'
    },
    {
      name: 'grGreen',
      gradient:'<linearGradient id="grGreen" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="#16fc47" /><stop offset="34%" stop-color="#0c5206" /><stop offset="56%" stop-color="#106d18" /><stop offset="100%" stop-color="#b6fac4" /></linearGradient>'
    }
  ];

 //console.log(gradients)
 const js = JSON.stringify(gradients)
 //console.log(js)
 console.log(JSON.parse(js))

 //const p =
 //'[{"name":"grTube","gradient":"<linearGradient id=\\"grTube\\" x1=\\"0\\" x2=\\"1\\" y1=\\"0\\" y2=\\"0\\"><stop offset=\\"0%\\" stop-color=\\"#8f8f92\\" /><stop offset=\\"40%\\" stop-color=\\"#010101\\" stop-opacity=\\"0\\" /><stop offset=\\"70%\\" stop-color=\\"#585151\\" stop-opacity=\\"0\\" /><stop offset=\\"100%\\" stop-color=\\"#515151\\" /></linearGradient>"},{"name":"YellowGradient","gradient":"<linearGradient id=\\"YellowGradient\\" x1=\\"0\\" x2=\\"0\\" y1=\\"0\\" y2=\\"1\\"><stop offset=\\"0%\\" stop-color=\\"#f7d067\\" /><stop offset=\\"30%\\" stop-color=\\"#f8f4c1\\" stop-opacity=\\"0.8\\" /><stop offset=\\"50%\\" stop-color=\\"#f7d067\\" stop-opacity=\\"1\\" /><stop offset=\\"70%\\" stop-color=\\"#f8f4c1\\" stop-opacity=\\".8\\" /><stop offset=\\"100%\\" stop-color=\\"#f7d067\\" /></linearGradient>"},{"name":"BlueGradient","gradient":"<linearGradient id=\\"BlueGradient\\" x1=\\"0\\" x2=\\"1\\" y1=\\"0\\" y2=\\"0\\"><stop offset=\\"0%\\" stop-color=\\"#5d7fee\\" /><stop offset=\\"35%\\" stop-color=\\"#86bdce\\" /><stop offset=\\"50%\\" stop-color=\\"#e6f4f8\\" /><stop offset=\\"65%\\" stop-color=\\"#e6f4f8\\" /><stop offset=\\"100%\\" stop-color=\\"#5d7fee\\" /></linearGradient>"},{"name":"grGreen","gradient":"<linearGradient id=\\"grGreen\\" x1=\\"0\\" x2=\\"1\\" y1=\\"0\\" y2=\\"0\\"><stop offset=\\"0%\\" stop-color=\\"#16fc47\\" /><stop offset=\\"34%\\" stop-color=\\"#0c5206\\" /><stop offset=\\"56%\\" stop-color=\\"#106d18\\" /><stop offset=\\"100%\\" stop-color=\\"#b6fac4\\" /></linearGradient>"}]'
 //console.log(JSON.parse(js))