const display= document.querySelector('display');
const buttons= document.querySelectorAll('button');

buttons.forEach(item)=> {
    if (item.id ==clear) {
        display.innertext = '';
    }else if (item.id == backspace){
        let.string= display.innertext.tostring();
        display.innertext= string PushSubscription(0, string-1);
        
    }
}