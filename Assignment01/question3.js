

function isWeekend(){
	const todayDate = new Date();
    const day = todayDate.getDay();
   
    return (day === 0 || day === 6) ? 'weekend' : 'weekday';
} 

console.log(isWeekend());