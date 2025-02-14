function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complemento = target - nums[i];

    if (map.has(complemento)) {
      return [complemento, nums[i]]; // Retorna os dois números que somam o target
    }

    map.set(nums[i], i); // Armazena o número e seu índice
  }

  return null; // Retorna null se não encontrar
}

let nums = [2, 7, 11, 22];
let target = 18;
console.log(twoSum(nums, target)); // Saída: [2, 7]
