setTimeout(()=>{
    document.getElementById('count').innerHTML = 10;
    return setTimeout(()=>{
        document.getElementById('count').innerHTML = 9;
        return setTimeout(()=>{
            document.getElementById('count').innerHTML = 8;
            return setTimeout(()=>{
                document.getElementById('count').innerHTML = 7;
                return setTimeout(()=>{
                    document.getElementById('count').innerHTML = 6;
                    return setTimeout(()=>{
                        document.getElementById('count').innerHTML = 5;
                        return setTimeout(()=>{
                            document.getElementById('count').innerHTML = 4;
                            return setTimeout(()=>{
                                document.getElementById('count').innerHTML = 3;
                                return setTimeout(()=>{
                                    document.getElementById('count').innerHTML = 2;
                                    return setTimeout(()=>{
                                        document.getElementById('count').innerHTML = 1;
                                        return setTimeout(()=>{
                                            document.getElementById('count').innerHTML = "Happy Independence Day";  
                                        },1000)  
                                    },1000)  
                                },1000)  
                            },1000)  
                        },1000)  
                    },1000)  
                },1000)
            },1000)
        },1000)
    },1000)
},1000)