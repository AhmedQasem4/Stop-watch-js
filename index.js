function StopWatch(){
    let startTime, endTime, running , duration=0;
    this.start = function(){
        if(running)
            throw new Error('Stop watch has already started');
         
        running = true;

        startTime = new Date();

    }
    this.stop = function(){
        if(!running)
            throw new Error('Stop watch is not started');
        running = false;
        endTime = new Date();
        
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset= function(){
        if(running)
            throw new ('we can not reset stop watch until it stopped');
    }
    Object.defineProperty(this,'duration',{
        get: function() { return duration;}
    });

}

