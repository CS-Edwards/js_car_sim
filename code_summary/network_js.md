# network.js

## Class: NeuralNetwork
## Class: Level

 * The constructor function is used to initialize the neural network. It takes an array called neuronCounts as a parameter, which specifies the number of neurons in each layer of the network. The function creates an empty array called levels to store the network's levels. <br>

* Inside the constructor, a loop is used to iterate over the neuronCounts array, except for the last element. For each iteration, a new Level object is created and added to the levels array. Each Level object represents a layer in the neural network and is initialized with the number of neurons for the current and next layer.<br>

* The NeuralNetwork class also has a static method called feedForward. This method takes two parameters: givenInputs, which represents the input data to be fed into the network, and network, which is an instance of the NeuralNetwork class.<br>

* The feedForward method starts by calling the feedForward function of the first level (network.levels[0]) with the given inputs. This function processes the inputs and produces outputs. <br>

* Then, a loop is used to iterate over the remaining levels in the network. For each level, the outputs from the previous level are used as inputs for the current level's feedForward function. This process is repeated until all levels have been processed. <br>

* Finally, the feedForward method returns the outputs produced by the last level of the network.