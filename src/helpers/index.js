export const modifiedMeals =  (res) => {
     const items = res?.items || [];
    if(items?.length){
      let current = res.items[0];
      let count = +current.noOfCal;
      let refs = [current]; 
      for(let i = 1; i< items.length; i++){
        const next = items[i]; 
        if(current.created_on === next.created_on){
          count += +next.noOfCal;
          refs.push(next);
          if(count >= 2000){
            refs.forEach((ele) => {
              ele.color = 'red';
            })
          } else {
            refs.forEach((ele) => {
              ele.color = '';
            })
          }
        } else {
          current = next;
          refs = [current]; 
        }
      }

      if(items.length < 2){
        const color = count >= 2000 ? 'red': ''
        refs.forEach((ele) => {
          ele.color = color;
        })
      }
    }
    return items;
}

export const deepCopy = (obj) => {
    let newObj = {};
    if(!obj){ //  null, undefined 
      return obj;
    }
    if(typeof obj == 'object' && !Array.isArray(obj)){
        const keys = Object.keys(obj);
        newObj = {};
        keys.forEach((key) => {
          newObj[key]= deepCopy(obj[key]);
        });
      } else if(Array.isArray(obj)){
          newObj = [];
          obj.forEach((ele, i) => {
            newObj[i] = deepCopy(ele);
          });
      } else {
          newObj = obj;
      }

  return newObj;
}