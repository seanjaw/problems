function directionstocoordinates(string){
    let array =string.split('');
     console.log(array)
    let coordArray = [0,0];
    let stepsArray = [];
    
    for ( let i =0 ; i < array.length; i++ ){
      switch (array[i]) {
        case 'N':
          coordArray[1]=coordArray[1]+1;
          console.log( 'N', coordArray);
          break;
        case 'E':
          coordArray[0]=coordArray[0]+1; 
          console.log( 'E', coordArray)
          break;
        case 'S':
          coordArray[1]=coordArray[1]-1;               console.log( 'S', coordArray)
   
          break;
        default:
          coordArray[0]=coordArray[0]-1;
          console.log('W',coordArray)
      } 
      stepsArray.push(coordArray)
    }
    euclideanValue= Math.sqrt(Math.pow(coordArray[0],2) + Math.pow(coordArray[1],2))
     return [stepsArray,euclideanValue];
   }