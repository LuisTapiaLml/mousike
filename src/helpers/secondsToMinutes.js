export const secondsToMinutes = ( d  ) => {
    
        d = Number(d);
        // var h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);
    
      
        let mDisplay = m > 0 ?  (m > 9  ? m : "0" + m )   : "00";
        let sDisplay = s > 0 ? (s > 9 ? s : "0" + s )   : "00";
      
        return  mDisplay +":"+ sDisplay; 

}
