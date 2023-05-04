let length = parseInt(userInput[0]);
      let item = userInput[1].split(' ')
      let list ={}
      let arr=[]
       for (let number of item) {
        list[number] = 0;
    }

    for (let number of item) {
        list[number]++;
    }
      
     console.log(Object.entries(list).map(subArray => subArray[0]).join(' '))