// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

//console.log(returnRandBase())
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
        for (let i = 0; i < 15; i++) {
            newStrand.push(returnRandBase())
        }
    return newStrand
    }

//factory function for multiobject creation
const pAequorFactory = (specimenNum, dna) =>{
    
        return {
            specimenNum : specimenNum,
            dna : dna,
            mutate(){
                let changer = mockUpStrand();
                while(changer[0] == this.dna[0]){
                    return this.dna =  mockUpStrand();
                }
                    return this.dna;
            },
            //calc % -> % of x in y ---> x / y * 100
            //calc % -> 5% of n     ---> n * 0.05
            compareDNA(obj){
                var matcher = 0;
                let percent = 0;
                for(let i = 0; i < obj.dna.length; i++){
                
                        // if(obj.dna[i] == this.dna[j]){
                        //     matcher++;
                        // }
                    if(obj.dna[i] == this.dna[i]){
                        matcher++;
                    }
                    console.log(obj.dna[i] , this.dna[i])
                }
                percent = (matcher / obj.dna.length) * 100;
                return `specimenNum #${obj.specimenNum} and specimenNum #${this.specimenNum} have ${percent} % in common`;   
            },
            willLikelySurvive(){
                let counter = 0;
                let percentEle = 0;
                for(let i = 0; i < this.dna.length; i++){
                    if(this.dna[i] == 'G' || this.dna[i] == 'C'){
                        counter++;
                    }
                }
                percentEle = (counter / this.dna.length) * 100;
                if(percentEle >= 60){
                    return true
                }else{
                    return false
                }
            }
        }
    
}
function survive30(){
    let outerArr = [];
    let x;
    for(let outerCounter = 1; outerCounter <= 30; outerCounter++){
        
        x = pAequorFactory(outerCounter, mockUpStrand());
        if(x.willLikelySurvive == false) outerCounter--;
        else outerArr.push(x)
    }
    return outerArr;
}
console.log(survive30());
// const x = pAequorFactory(1, mockUpStrand());
// // const a = pAequorFactory(2, mockUpStrand());
// // const b = pAequorFactory(3, mockUpStrand());
// // const c = pAequorFactory(4, ['C', 'T', 'A', 'A']);
// // const f = pAequorFactory(4, ['C', 'C', 'C', 'A']);
// // const f1 = pAequorFactory(4, ['C', 'C', 'G', 'A']);
// const aa2 = x;
// console.log(aa2.mutate()+'  '+["arr", 'is', {adj : 'nice'}])
// console.log(x.dna, x.mutate());
// //console.log(x.compareDNA(b))
// console.log(x.mutate())
// console.log(x.mutate())
// console.log(x.mutate())

// console.log(c.willLikelySurvive())
// console.log(f.willLikelySurvive())
// console.log(f1.willLikelySurvive())
