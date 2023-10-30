const countSheep = (num) => {
  let sheeps = '' // to store the output
//   using the num to output the num base on its length 
  for (let i = 1; i <= num; i++) sheeps += `${i} sheep...`
//   if the num is 0 then return empty string else the sheeps
  return num === 0 ? '' : sheeps
}
