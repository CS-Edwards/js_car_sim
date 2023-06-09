class NeuralNetwork{

    //number of neurons in each layer
    constructor(neuronCounts){
        this.levels=[];

        //for each level specify input and output count
        for(let i =0; i<neuronCounts.length-1; i++){
            //new level with neuron count for ith index and i+1 index.
            this.levels.push(new Level(
                neuronCounts[i], neuronCounts[i+1]
            ));
        }       
    }

    static feedFoward(givenInputs,network){
        //calling first levels to produce output
        let outputs=Level.feedFoward(
            givenInputs,network.levels[0]
        )
        
        //loop through remaining levels
        for(let i=1; i<network.levels.length;i++){
            //putting output of the previous level as inputs to the next level
            outputs= Level.feedFoward(
                outputs,network.levels[i]
            )
        }

        return outputs;
    }


}









class Level{
    constructor(inputCount,outputCount){
        this.inputs = new Array(inputCount);
        this.outputs = new Array(outputCount);

        // each output neuron has a bias; a value above which it will fire
        this.biases = new Array(outputCount);

        this.weights=[];
        
        // connecting every input neuron to every output neuron

        // for every inputs, create an empty array the size of the output count
        // each inputnode has outputCount number of connections
        for(let i=0; i<inputCount; i++){
            this.weight[i] = new Array(outputCount);
        }

        //random brain
        Level.#randomize(this);

    }

    //static serializable object instead of method
    //sets values for weights matrix and biases vector
    static #randomize(level){
        for(let i=0; i<level.inputs.length; i++){
            for(let i=0; i<level.outputs.length;i++){
                //for every input-output pair set weight to random (-1,1)
                level.weights[i][j]= Math.random()*2-1;
            }
        }

        //biases
        //set with ranodom number for now (0,1)
        for(let i=0; i<level.biases.length; i++){
            level.biases[i]= Math.random()*2-1;
        }
    }

    static feedFoward(givenInputs, level){
    //Given input values from the sensor; go though all of the Level inputs and set inputs based on values
    for(let i=0;i<level.inputs.length;i++){
        level.inputs[i] = givenInputs[i];
    }

    //Loop through every ouput and calculate sum between value of the inputs and weights
    for(let i=0; i<level.outputs.length; i++){
        let sum = 0;

        //loop through inputs 
        for(let j=0; j<level.outputs.length; j++){

            //sum adds product of jth input *leve wight [j][i]
            sum += level.inputs[j]*level.weights[j][i];
        }

        //activate neuron if sum>bias
        // ie ReLu
        if(sum>level.biases[i]){
            level.outputs[i]=1;
        }else{
            level.outputs[i]=0;
        }
    }

    return level.outputs

    }
   
}